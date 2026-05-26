import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
	Easing,
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'

import { Spacing } from '@/constants/theme'

import { ThemedText } from './themed-text'

type ToastContextValue = {
	showToast: (message: string, durationMs?: number) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
	const ctx = useContext(ToastContext)
	if (!ctx) {
		throw new Error('useToast must be used within a ToastProvider')
	}
	return ctx
}

const DEFAULT_DURATION_MS = 3200

export function ToastProvider({ children }: { children: ReactNode }) {
	const [message, setMessage] = useState<string | null>(null)
	const opacity = useSharedValue(0)
	const translateY = useSharedValue(24)
	const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const clearMessage = useCallback(() => setMessage(null), [])

	const hide = useCallback(() => {
		opacity.value = withTiming(
			0,
			{ duration: 250, easing: Easing.out(Easing.cubic) },
			finished => {
				if (finished) runOnJS(clearMessage)()
			},
		)
		translateY.value = withTiming(24, {
			duration: 250,
			easing: Easing.out(Easing.cubic),
		})
	}, [opacity, translateY, clearMessage])

	const showToast = useCallback(
		(nextMessage: string, durationMs = DEFAULT_DURATION_MS) => {
			if (hideTimerRef.current) {
				clearTimeout(hideTimerRef.current)
				hideTimerRef.current = null
			}
			setMessage(nextMessage)
			opacity.value = withTiming(1, {
				duration: 220,
				easing: Easing.out(Easing.cubic),
			})
			translateY.value = withTiming(0, {
				duration: 280,
				easing: Easing.out(Easing.cubic),
			})
			hideTimerRef.current = setTimeout(hide, durationMs)
		},
		[opacity, translateY, hide],
	)

	useEffect(
		() => () => {
			if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
		},
		[],
	)

	const toastStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
		transform: [{ translateY: translateY.value }],
	}))

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			<View
				pointerEvents="box-none"
				style={StyleSheet.absoluteFill}
				accessibilityElementsHidden={!message}
			>
				{message !== null && (
					<Animated.View
						style={[styles.toast, toastStyle]}
						pointerEvents="none"
						accessibilityLiveRegion="polite"
					>
						<ThemedText type="small" style={styles.toastText}>
							{message}
						</ThemedText>
					</Animated.View>
				)}
			</View>
		</ToastContext.Provider>
	)
}

const styles = StyleSheet.create({
	toast: {
		position: 'absolute',
		bottom: 110,
		left: Spacing.four,
		right: Spacing.four,
		alignSelf: 'center',
		maxWidth: 420,
		marginHorizontal: 'auto',
		paddingVertical: Spacing.three,
		paddingHorizontal: Spacing.four,
		borderRadius: Spacing.three,
		backgroundColor: 'rgba(20, 24, 40, 0.95)',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.35,
		shadowRadius: 16,
		elevation: 8,
	},
	toastText: {
		color: '#F5F5F5',
		textAlign: 'center',
	},
})

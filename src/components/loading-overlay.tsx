import { Image } from 'expo-image'
import { useEffect } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSequence,
	withTiming,
} from 'react-native-reanimated'
import { scheduleOnRN } from 'react-native-worklets'

import { ThemedText } from './themed-text'

type Props = {
	progress: number
	visible: boolean
	onDismiss: () => void
}

const RING_SIZE = 200
const AVATAR_SIZE = 140

export function LoadingOverlay({ progress, visible, onDismiss }: Props) {
	const opacity = useSharedValue(1)
	const scale = useSharedValue(1)
	const rotation = useSharedValue(0)
	const pulse = useSharedValue(1)
	const progressWidth = useSharedValue(0)

	useEffect(() => {
		rotation.value = withRepeat(
			withTiming(360, { duration: 2400, easing: Easing.linear }),
			-1,
			false,
		)
		pulse.value = withRepeat(
			withSequence(
				withTiming(1.06, {
					duration: 900,
					easing: Easing.inOut(Easing.quad),
				}),
				withTiming(1, { duration: 900, easing: Easing.inOut(Easing.quad) }),
			),
			-1,
			false,
		)
	}, [pulse, rotation])

	useEffect(() => {
		progressWidth.value = withTiming(progress, {
			duration: 350,
			easing: Easing.out(Easing.cubic),
		})
	}, [progress, progressWidth])

	useEffect(() => {
		if (!visible) {
			scale.value = withTiming(1.35, {
				duration: 520,
				easing: Easing.out(Easing.cubic),
			})
			opacity.value = withTiming(
				0,
				{ duration: 520, easing: Easing.out(Easing.cubic) },
				finished => {
					'worklet'
					if (finished) scheduleOnRN(onDismiss)
				},
			)
		}
	}, [visible, scale, opacity, onDismiss])

	const containerStyle = useAnimatedStyle(() => ({ opacity: opacity.value }))
	const ringStyle = useAnimatedStyle(() => ({
		transform: [{ rotate: `${rotation.value}deg` }],
	}))
	const logoStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value * pulse.value }],
	}))
	const progressBarStyle = useAnimatedStyle(() => ({
		width: `${Math.min(Math.max(progressWidth.value, 0), 1) * 100}%`,
	}))

	return (
		<Modal
			visible
			transparent
			animationType="none"
			statusBarTranslucent
			navigationBarTranslucent
			hardwareAccelerated
			onRequestClose={() => {}}
		>
			<Animated.View
				pointerEvents={visible ? 'auto' : 'none'}
				style={[styles.overlay, containerStyle]}
			>
				<View style={styles.glow} />
				<View style={styles.center}>
					<Animated.View style={[styles.ring, ringStyle]} />
					<Animated.View style={[styles.logoWrapper, logoStyle]}>
						<Image
							source={require('@/assets/images/portfolio/avatar.jpg')}
							style={styles.avatar}
							contentFit="cover"
							accessibilityLabel="Hunter Wallen"
						/>
					</Animated.View>
				</View>
				<View style={styles.bottom}>
					<ThemedText type="smallBold" style={styles.brand}>
						HUNTER WALLEN
					</ThemedText>
					<View style={styles.progressTrack}>
						<Animated.View style={[styles.progressFill, progressBarStyle]} />
					</View>
					<ThemedText type="small" style={styles.progressText}>
						{Math.round(Math.min(progress, 1) * 100)}%
					</ThemedText>
				</View>
			</Animated.View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	overlay: {
		...StyleSheet.absoluteFill,
		backgroundColor: '#070C1A',
		zIndex: 9999,
		justifyContent: 'center',
		alignItems: 'center',
	},
	glow: {
		position: 'absolute',
		width: 520,
		height: 520,
		borderRadius: 260,
		backgroundColor: '#3c87f7',
		opacity: 0.18,
		transform: [{ scale: 1 }],
	},
	center: {
		width: RING_SIZE,
		height: RING_SIZE,
		justifyContent: 'center',
		alignItems: 'center',
	},
	ring: {
		position: 'absolute',
		width: RING_SIZE,
		height: RING_SIZE,
		borderRadius: RING_SIZE / 2,
		borderWidth: 3,
		borderColor: 'rgba(60, 135, 247, 0.18)',
		borderTopColor: '#3c87f7',
		borderRightColor: 'rgba(60, 135, 247, 0.55)',
	},
	logoWrapper: {
		width: AVATAR_SIZE,
		height: AVATAR_SIZE,
		borderRadius: AVATAR_SIZE / 2,
		overflow: 'hidden',
		shadowColor: '#3c87f7',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 28,
		shadowOpacity: 0.7,
		elevation: 20,
	},
	avatar: {
		width: '100%',
		height: '100%',
	},
	bottom: {
		position: 'absolute',
		bottom: 110,
		width: '70%',
		maxWidth: 320,
		alignItems: 'center',
		gap: 12,
	},
	brand: {
		color: '#F5F5F5',
		letterSpacing: 4,
		fontSize: 12,
	},
	progressTrack: {
		width: '100%',
		height: 3,
		backgroundColor: 'rgba(255, 255, 255, 0.12)',
		borderRadius: 2,
		overflow: 'hidden',
	},
	progressFill: {
		height: '100%',
		backgroundColor: '#3c87f7',
		borderRadius: 2,
	},
	progressText: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontVariant: ['tabular-nums'],
	},
})

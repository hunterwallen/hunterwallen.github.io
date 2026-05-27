import { type Href, useNavigation, useRouter } from 'expo-router'
import { SymbolView } from 'expo-symbols'
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { InteractiveTransition, Spacing } from '@/constants/theme'
import { useTheme } from '@/hooks/use-theme'

import { ThemedText } from './themed-text'

type Props = {
	title?: string
	/**
	 * Explicit target to navigate to on back. Use this when the screen is
	 * reached from a known parent (e.g. Privacy/Terms always come from
	 * Settings). Without it, the back button uses router.back() and falls
	 * back to '/'.
	 */
	backHref?: Href
}

export function StackHeader({ title, backHref }: Props) {
	const theme = useTheme()
	const insets = useSafeAreaInsets()
	const router = useRouter()
	const navigation = useNavigation()

	const handleBack = () => {
		if (backHref) {
			router.replace(backHref)
			return
		}
		if (navigation.canGoBack && navigation.canGoBack()) {
			router.back()
		} else {
			router.replace('/')
		}
	}

	return (
		<View
			style={[
				styles.header,
				{
					paddingTop: insets.top + Spacing.two,
					paddingLeft: insets.left + Spacing.three,
					paddingRight: insets.right + Spacing.three,
					borderBottomColor: theme.backgroundElement,
				},
			]}
		>
			<Pressable
				accessibilityRole="button"
				accessibilityLabel="Back"
				onPress={handleBack}
				hitSlop={12}
				style={({ pressed, hovered }: PressableState) => [
					styles.back,
					interactiveBase,
					hovered && styles.backHovered,
					pressed && styles.backPressed,
				]}
			>
				<SymbolView
					name={{
						ios: 'chevron.left',
						android: 'arrow_back',
						web: 'arrow_back',
					}}
					size={18}
					tintColor={theme.text as string}
				/>
				<ThemedText type="link" themeColor="text">
					Back
				</ThemedText>
			</Pressable>
			<View style={styles.titleSlot}>
				{title && (
					<ThemedText type="smallBold" style={styles.title}>
						{title}
					</ThemedText>
				)}
			</View>
			<View style={styles.spacer} />
		</View>
	)
}

type PressableState = { pressed: boolean; hovered?: boolean }

const interactiveBase = InteractiveTransition as unknown as ViewStyle

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: Spacing.two,
		borderBottomWidth: StyleSheet.hairlineWidth,
		gap: Spacing.two,
	},
	back: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 2,
		minWidth: 88,
		paddingVertical: 4,
		paddingHorizontal: Spacing.one,
		borderRadius: Spacing.one,
	},
	backHovered: {
		opacity: 0.7,
	},
	backPressed: {
		opacity: 0.45,
	},
	titleSlot: {
		flex: 1,
	},
	title: {
		textAlign: 'center',
		fontSize: 14,
		letterSpacing: 0.4,
	},
	spacer: {
		minWidth: 88,
	},
})

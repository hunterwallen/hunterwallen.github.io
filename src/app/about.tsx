import { Image } from 'expo-image'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { MaxContentWidth, Spacing } from '@/constants/theme'
import { useTheme } from '@/hooks/use-theme'

export default function AboutScreen() {
	const theme = useTheme()
	const insets = useSafeAreaInsets()

	return (
		<ScrollView
			style={[styles.scroll, { backgroundColor: theme.background }]}
			contentContainerStyle={[
				styles.contentContainer,
				{
					paddingTop: insets.top + Spacing.four,
					paddingLeft: insets.left + Spacing.four,
					paddingRight: insets.right + Spacing.four,
				},
			]}
		>
			<View style={styles.inner}>
				<ThemedText type="subtitle" style={styles.title}>
					Who I Am
				</ThemedText>

				<View style={styles.avatarWrapper}>
					<Image
						source={require('@/assets/images/portfolio/avatar.jpg')}
						style={styles.avatar}
						contentFit="cover"
					/>
				</View>

				<ThemedView type="backgroundElement" style={styles.card}>
					<ThemedText type="default" style={styles.paragraph}>
						I&apos;m a full-stack engineer who lives closest to the mobile
						layer. Most of my work sits where TypeScript meets the metal:
						writing native modules in Swift, Kotlin, Objective-C and Java to
						bridge SDKs into React Native, integrating Bluetooth Low Energy
						stacks with hardware in the field, wrapping real-time video and
						telehealth SDKs into clean typed APIs, and leading full migrations
						of legacy native iOS and Android apps onto a single React Native
						codebase without losing the users on the other side. I&apos;ve taken
						codebases through New Architecture and TurboModule adoption, rebuilt
						CI pipelines to cut native build times in half, and shipped
						component libraries that multiple consumer apps depend on. Lately a
						lot of my energy has gone into rebuilding that practice around AI
						agents — running multi-repo migrations and CI overhauls with them
						rather than just asking one-off questions.
					</ThemedText>
					<ThemedText type="default" style={styles.paragraph}>
						Outside of work I&apos;m usually somewhere off-pavement in Colorado
						with my wife, a rooftop tent, and however many of my five dogs fit
						in the truck. Dirt roads are where I do my best thinking.
					</ThemedText>
					<ThemedText type="default" style={styles.paragraph}>
						If you&apos;re building something where the mobile layer actually
						matters, I&apos;d love to hear about it.
					</ThemedText>
				</ThemedView>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
	},
	contentContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingBottom: Spacing.four,
	},
	inner: {
		width: '100%',
		maxWidth: MaxContentWidth,
		gap: Spacing.four,
		alignItems: 'center',
	},
	title: {
		textAlign: 'center',
	},
	avatarWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		width: 250,
		height: 250,
		borderRadius: 90,
	},
	card: {
		borderRadius: Spacing.four,
		padding: Spacing.four,
		gap: Spacing.three,
		width: '100%',
	},
	paragraph: {
		lineHeight: 24,
		textAlign: 'center',
	},
})

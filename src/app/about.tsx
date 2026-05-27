import { Image } from 'expo-image'
import { useBottomTabBarHeight } from 'expo-router/js-tabs'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ScreenHeader } from '@/components/screen-header'
import { ThemedText } from '@/components/themed-text'
import { MaxContentWidth, Spacing } from '@/constants/theme'
import { useTheme } from '@/hooks/use-theme'

export default function AboutScreen() {
	const theme = useTheme()
	const insets = useSafeAreaInsets()
	const tabBarHeight = useBottomTabBarHeight()

	return (
		<View style={[styles.root, { backgroundColor: theme.background }]}>
			<ScreenHeader />
			<ScrollView
				style={styles.scroll}
				contentContainerStyle={[
					styles.contentContainer,
					{
						paddingLeft: insets.left + Spacing.four,
						paddingRight: insets.right + Spacing.four,
						paddingBottom: tabBarHeight + Spacing.four,
					},
				]}
			>
				<View style={styles.inner}>
					<View style={styles.avatarWrapper}>
						<Image
							source={require('@/assets/images/portfolio/avatar.jpg')}
							style={styles.avatar}
							contentFit="cover"
							accessibilityLabel="Hunter Wallen"
						/>
					</View>

					<View style={styles.bodyBlock}>
						<ThemedText type="default" style={styles.paragraph}>
							I&apos;m a full-stack engineer who lives closest to the mobile
							layer. Most of my work sits where TypeScript meets the metal:
							writing native modules in Swift, Kotlin, Objective-C and Java to
							bridge SDKs into React Native, integrating Bluetooth Low Energy
							stacks with hardware in the field, wrapping real-time video and
							telehealth SDKs into clean typed APIs, and leading full
							migrations of legacy native iOS and Android apps onto a single
							React Native codebase without losing the users on the other
							side. I&apos;ve taken codebases through New Architecture and
							TurboModule adoption, rebuilt CI pipelines to cut native build
							times in half, and shipped component libraries that multiple
							consumer apps depend on. Lately a lot of my energy has gone into
							rebuilding that practice around AI agents — running multi-repo
							migrations and CI overhauls with them rather than just asking
							one-off questions.
						</ThemedText>

						<View
							style={[styles.quoteBlock, { borderLeftColor: '#3c87f7' }]}
						>
							<ThemedText style={styles.quoteText}>
								Dirt roads are where I do my best thinking.
							</ThemedText>
						</View>

						<ThemedText type="default" style={styles.paragraph}>
							Outside of work I&apos;m usually somewhere off-pavement in
							Colorado with my wife, a rooftop tent, and however many of my
							five dogs fit in the truck.
						</ThemedText>

						<ThemedText type="default" style={styles.paragraph}>
							If you&apos;re building something where the mobile layer actually
							matters, I&apos;d love to hear about it.
						</ThemedText>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	root: { flex: 1 },
	scroll: { flex: 1 },
	contentContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: Spacing.three,
	},
	inner: {
		width: '100%',
		maxWidth: MaxContentWidth,
		gap: Spacing.five,
		alignItems: 'stretch',
	},
	avatarWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		width: 220,
		height: 220,
		borderRadius: 110,
	},
	bodyBlock: {
		gap: Spacing.four,
	},
	paragraph: {
		lineHeight: 26,
	},
	quoteBlock: {
		borderLeftWidth: 3,
		paddingLeft: Spacing.three,
		paddingVertical: Spacing.one,
	},
	quoteText: {
		fontSize: 22,
		lineHeight: 30,
		fontWeight: '600',
		fontStyle: 'italic',
	},
})

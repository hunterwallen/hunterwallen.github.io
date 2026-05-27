import { Image } from 'expo-image'
import { useBottomTabBarHeight } from 'expo-router/js-tabs'
import { SymbolView } from 'expo-symbols'
import {
	ImageSourcePropType,
	Linking,
	Platform,
	Pressable,
	ScrollView,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ScreenHeader } from '@/components/screen-header'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Fonts, InteractiveTransition, Spacing } from '@/constants/theme'
import { Project, projects } from '@/data/portfolio'
import { useTheme } from '@/hooks/use-theme'

type PressableState = { pressed: boolean; hovered?: boolean }
const interactiveBase = InteractiveTransition as unknown as ViewStyle

const CARD_MAX_WIDTH = 460
const CARD_GAP = Spacing.four
const GRID_MAX_WIDTH = CARD_MAX_WIDTH * 2 + CARD_GAP

export default function PortfolioScreen() {
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
					<View style={styles.header}>
						<ThemedText
							type="small"
							themeColor="textSecondary"
							style={styles.eyebrow}
						>
							WORK
						</ThemedText>
						<ThemedText style={styles.title}>What I&apos;ve built.</ThemedText>
					</View>

					<View style={styles.cardGrid}>
						{projects.map(project => (
							<ProjectCard key={project.id} project={project} />
						))}
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

function ProjectCard({ project }: { project: Project }) {
	const theme = useTheme()

	return (
		<ThemedView type="backgroundElement" style={styles.card}>
			<View
				style={[
					styles.imageFrame,
					{ backgroundColor: theme.backgroundSelected },
				]}
			>
				<Image
					source={project.image}
					style={styles.appImage}
					contentFit="contain"
					accessibilityLabel={`${project.title} screenshot`}
				/>
			</View>

			<View style={styles.cardBody}>
				<View style={styles.cardHeader}>
					<ThemedText style={styles.cardTitle}>{project.title}</ThemedText>
					<ThemedText
						themeColor="textSecondary"
						style={styles.cardRole}
					>
						{project.role.toUpperCase()}
					</ThemedText>
				</View>

				{project.context && (
					<ThemedText themeColor="textSecondary" style={styles.cardContext}>
						{project.context}
					</ThemedText>
				)}

				<View style={styles.contribList}>
					{project.contributions.map((line, idx) => (
						<View key={idx} style={styles.contribRow}>
							<ThemedText
								themeColor="textSecondary"
								style={styles.contribDash}
							>
								—
							</ThemedText>
							<ThemedText style={styles.contribText}>{line}</ThemedText>
						</View>
					))}
				</View>

				<View style={styles.stackBlock}>
					<ThemedText
						themeColor="textSecondary"
						style={styles.metaLabel}
					>
						STACK
					</ThemedText>
					<View style={styles.chipRow}>
						{project.stack.map(item => (
							<View
								key={item}
								style={[styles.chip, { borderColor: theme.backgroundSelected }]}
							>
								<ThemedText style={styles.chipText}>{item}</ThemedText>
							</View>
						))}
					</View>
				</View>

				{project.outcome && (
					<View
						style={[styles.outcome, { borderLeftColor: '#3c87f7' }]}
					>
						<ThemedText
							themeColor="textSecondary"
							style={styles.metaLabel}
						>
							OUTCOME
						</ThemedText>
						<ThemedText style={styles.outcomeText}>
							{project.outcome}
						</ThemedText>
					</View>
				)}

				<View
					style={[
						styles.linkRow,
						{ borderTopColor: theme.backgroundSelected },
					]}
				>
					<LinkButton
						label={project.urlLabel}
						url={project.url}
						icon="arrow.up.right"
						androidIcon="open_in_new"
					/>
					{project.iosUrl && Platform.OS !== 'android' && (
						<LinkButton
							label="App Store"
							url={project.iosUrl}
							imageIcon={require('@/assets/images/portfolio/apple.png')}
						/>
					)}
					{project.androidUrl && Platform.OS !== 'ios' && (
						<LinkButton
							label="Google Play"
							url={project.androidUrl}
							imageIcon={require('@/assets/images/portfolio/googleplay.png')}
						/>
					)}
				</View>
			</View>
		</ThemedView>
	)
}

function LinkButton({
	label,
	url,
	icon,
	androidIcon,
	imageIcon,
}: {
	label: string
	url: string
	icon?: string
	androidIcon?: string
	imageIcon?: ImageSourcePropType
}) {
	const theme = useTheme()
	return (
		<Pressable
			accessibilityRole="link"
			accessibilityLabel={label}
			onPress={() => Linking.openURL(url)}
			style={({ pressed, hovered }: PressableState) => [
				styles.link,
				hovered && styles.linkHovered,
				pressed && styles.pressed,
			]}
		>
			{imageIcon ? (
				<Image
					source={imageIcon}
					style={styles.linkImage}
					contentFit="contain"
					tintColor={theme.textSecondary as string}
				/>
			) : icon && androidIcon ? (
				<SymbolView
					name={
						{
							ios: icon,
							android: androidIcon,
							web: androidIcon,
						} as React.ComponentProps<typeof SymbolView>['name']
					}
					size={12}
					tintColor={theme.textSecondary as string}
				/>
			) : null}
			<ThemedText themeColor="textSecondary" style={styles.linkText}>
				{label}
			</ThemedText>
		</Pressable>
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
		maxWidth: GRID_MAX_WIDTH,
		gap: Spacing.five,
	},

	header: {
		gap: Spacing.two,
		paddingTop: Spacing.three,
	},
	eyebrow: {
		letterSpacing: 3,
		fontSize: 12,
	},
	title: {
		fontSize: 36,
		lineHeight: 40,
		fontWeight: '700',
		letterSpacing: -0.5,
	},

	cardGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: CARD_GAP,
	},
	card: {
		flexBasis: CARD_MAX_WIDTH,
		flexGrow: 1,
		flexShrink: 1,
		maxWidth: CARD_MAX_WIDTH,
		borderRadius: Spacing.four,
		overflow: 'hidden',
	},
	imageFrame: {
		width: '100%',
		height: 280,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: Spacing.three,
	},
	appImage: {
		width: '100%',
		height: '100%',
	},
	cardBody: {
		padding: Spacing.four,
		gap: Spacing.four,
	},
	cardHeader: {
		gap: 4,
	},
	cardTitle: {
		fontSize: 24,
		lineHeight: 28,
		fontWeight: '700',
		letterSpacing: -0.3,
	},
	cardRole: {
		fontFamily: Fonts.mono,
		fontSize: 11,
		letterSpacing: 1,
	},
	cardContext: {
		fontSize: 15,
		lineHeight: 22,
	},

	contribList: {
		gap: Spacing.two,
	},
	contribRow: {
		flexDirection: 'row',
		gap: Spacing.two,
	},
	contribDash: {
		fontSize: 15,
		lineHeight: 22,
	},
	contribText: {
		flex: 1,
		fontSize: 15,
		lineHeight: 22,
	},

	stackBlock: {
		gap: Spacing.two,
	},
	metaLabel: {
		letterSpacing: 2,
		fontSize: 10,
		fontFamily: Fonts.mono,
	},
	chipRow: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 6,
	},
	chip: {
		paddingHorizontal: Spacing.two,
		paddingVertical: 4,
		borderRadius: 999,
		borderWidth: 1,
	},
	chipText: {
		fontSize: 12,
		lineHeight: 16,
	},

	outcome: {
		borderLeftWidth: 3,
		paddingLeft: Spacing.three,
		paddingVertical: 4,
		gap: 4,
	},
	outcomeText: {
		fontSize: 15,
		lineHeight: 22,
		fontWeight: '500',
	},

	linkRow: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		gap: Spacing.three,
		paddingTop: Spacing.three,
		borderTopWidth: StyleSheet.hairlineWidth,
	},
	link: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
		paddingVertical: 2,
		paddingHorizontal: 4,
		borderRadius: Spacing.one,
		...interactiveBase,
	},
	linkImage: {
		width: 12,
		height: 12,
	},
	linkHovered: {
		opacity: 0.65,
	},
	linkText: {
		fontSize: 13,
		fontFamily: Fonts.mono,
	},
	pressed: {
		opacity: 0.5,
	},
})

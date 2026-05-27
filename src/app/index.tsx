import { Image } from 'expo-image'
import { useBottomTabBarHeight } from 'expo-router/js-tabs'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
	Easing,
	FadeInUp,
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollOffset,
	useSharedValue,
	withRepeat,
	withSequence,
	withTiming,
} from 'react-native-reanimated'

import { ScreenHeader } from '@/components/screen-header'
import { SocialRow } from '@/components/social-row'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Fonts, MaxContentWidth, Spacing } from '@/constants/theme'
import { useAppReady } from '@/contexts/app-ready'
import { useTheme } from '@/hooks/use-theme'
import { useEffect } from 'react'

type SkillGroup = {
	label: string
	items: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
	{
		label: 'Mobile',
		items: ['React Native', 'Expo', 'Swift', 'Kotlin', 'iOS', 'Android'],
	},
	{
		label: 'Web',
		items: ['React', 'Next.js', 'React Native Web', 'Expo Router'],
	},
	{
		label: 'Languages',
		items: ['TypeScript', 'JavaScript', 'Python', 'Java'],
	},
	{
		label: 'Backend & Data',
		items: [
			'Node.js',
			'GraphQL',
			'PostgreSQL',
			'MongoDB',
			'DynamoDB',
			'Django',
		],
	},
	{
		label: 'AI-assisted delivery',
		items: ['MCP integrations', 'Custom subagents', 'AI-augmented CI/CD'],
	},
]

const POSITIONING = 'Senior Software Engineer'
const POSITIONING_DETAIL =
	'Shipping iOS, Android, and the web from a single React Native codebase — with AI-assisted delivery at the core.'
const STACK_LEDE =
	'One codebase, three platforms. You’re using one of them right now.'

function LiveDot() {
	const opacity = useSharedValue(1)
	const scale = useSharedValue(1)

	useEffect(() => {
		opacity.value = withRepeat(
			withSequence(
				withTiming(0.3, {
					duration: 900,
					easing: Easing.inOut(Easing.quad),
				}),
				withTiming(1, { duration: 900, easing: Easing.inOut(Easing.quad) }),
			),
			-1,
			false,
		)
		scale.value = withRepeat(
			withSequence(
				withTiming(1.4, {
					duration: 900,
					easing: Easing.inOut(Easing.quad),
				}),
				withTiming(1, { duration: 900, easing: Easing.inOut(Easing.quad) }),
			),
			-1,
			false,
		)
	}, [opacity, scale])

	const dotStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
		transform: [{ scale: scale.value }],
	}))

	return (
		<View style={styles.liveDotWrapper}>
			<Animated.View style={[styles.liveDotHalo, dotStyle]} />
			<View style={styles.liveDot} />
		</View>
	)
}

export default function HomeScreen() {
	const theme = useTheme()
	const insets = useSafeAreaInsets()
	const tabBarHeight = useBottomTabBarHeight()
	const ready = useAppReady()
	const scrollRef = useAnimatedRef<Animated.ScrollView>()
	const scrollOffset = useScrollOffset(scrollRef)

	const heroParallaxStyle = useAnimatedStyle(() => ({
		opacity: interpolate(
			scrollOffset.value,
			[0, 140, 220],
			[1, 0.6, 0],
			'clamp',
		),
		transform: [
			{
				translateY: interpolate(
					scrollOffset.value,
					[0, 220],
					[0, -40],
					'clamp',
				),
			},
		],
	}))

	return (
		<View style={[styles.root, { backgroundColor: theme.background }]}>
			<ScreenHeader />
			<Animated.ScrollView
				ref={scrollRef}
				style={styles.scroll}
				scrollEventThrottle={16}
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
					{/* Hero */}
					<Animated.View style={[styles.hero, heroParallaxStyle]}>
						{ready && (
							<Animated.View
								entering={FadeInUp.duration(500).delay(60)}
							>
								<ThemedText
									type="small"
									themeColor="textSecondary"
									style={styles.heroEyebrow}
								>
									HUNTER WALLEN
								</ThemedText>
							</Animated.View>
						)}
						{ready && (
							<Animated.View
								entering={FadeInUp.duration(600).delay(140).springify()}
							>
								<ThemedText style={styles.heroTitle}>
									{POSITIONING}.
								</ThemedText>
							</Animated.View>
						)}
						{ready && (
							<Animated.View
								entering={FadeInUp.duration(500).delay(260)}
							>
								<ThemedText
									themeColor="textSecondary"
									style={styles.heroDetail}
								>
									{POSITIONING_DETAIL}
								</ThemedText>
							</Animated.View>
						)}
					</Animated.View>

					{/* Skills */}
					<View style={styles.section}>
						<ThemedText
							type="small"
							themeColor="textSecondary"
							style={styles.sectionLabel}
						>
							STACK
						</ThemedText>
						<ThemedText style={styles.sectionLede}>{STACK_LEDE}</ThemedText>
						<View style={styles.skillsGroups}>
							{SKILL_GROUPS.map(group => (
								<View key={group.label} style={styles.skillGroup}>
									<ThemedText
										themeColor="textSecondary"
										style={styles.groupLabel}
									>
										{group.label}
									</ThemedText>
									<View style={styles.chipRow}>
										{group.items.map(item => (
											<ThemedView
												key={item}
												type="backgroundElement"
												style={[
													styles.chip,
													{ borderColor: theme.backgroundSelected },
												]}
											>
												<ThemedText style={styles.chipText}>{item}</ThemedText>
											</ThemedView>
										))}
									</View>
								</View>
							))}
						</View>
					</View>

					{/* Featured callout */}
					<View style={[styles.callout, { borderLeftColor: '#3c87f7' }]}>
						<View style={styles.calloutLabelRow}>
							<LiveDot />
							<ThemedText
								type="small"
								themeColor="textSecondary"
								style={styles.calloutLabel}
							>
								CURRENTLY
							</ThemedText>
						</View>
						<ThemedText style={styles.calloutText}>
							Architecting React Native platforms on the New Architecture —
							TurboModule-backed native bridges into telehealth, EMR, and BLE
							SDKs, with shared feature and themed component libraries spanning
							multiple host apps.
						</ThemedText>
						<ThemedText style={styles.calloutText}>
							Pioneering AI-assisted developer tooling — MCP integrations,
							reusable subagents, and AI-augmented CI/CD that lift team
							velocity, harden code reliability, and cut native build times
							from 45 minutes to under 15.
						</ThemedText>
					</View>

					{/* Social */}
					<View style={styles.socialBlock}>
						<ThemedText
							type="small"
							themeColor="textSecondary"
							style={styles.sectionLabel}
						>
							ELSEWHERE
						</ThemedText>
						<View style={styles.socialWrap}>
							<SocialRow size={44} />
						</View>
					</View>

					{/* Avatar lock-up at the bottom */}
					<View style={styles.avatarBlock}>
						<Image
							source={require('@/assets/images/portfolio/avatar.jpg')}
							style={styles.avatar}
							contentFit="cover"
							accessibilityLabel="Hunter Wallen"
						/>
						<View>
							<ThemedText type="smallBold">Hunter Wallen</ThemedText>
							<ThemedText
								type="small"
								themeColor="textSecondary"
								style={styles.avatarLine}
							>
								Denver, Colorado
							</ThemedText>
						</View>
					</View>
				</View>
			</Animated.ScrollView>
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
		gap: Spacing.six,
	},

	hero: {
		gap: Spacing.three,
		paddingTop: Spacing.four,
	},
	heroEyebrow: {
		letterSpacing: 3,
		fontSize: 12,
	},
	heroTitle: {
		fontSize: 44,
		lineHeight: 48,
		fontWeight: '700',
		letterSpacing: -0.5,
	},
	heroDetail: {
		fontSize: 17,
		lineHeight: 26,
		maxWidth: 560,
	},

	section: {
		gap: Spacing.three,
	},
	sectionLabel: {
		letterSpacing: 2,
		fontSize: 11,
	},
	sectionLede: {
		fontSize: 17,
		lineHeight: 26,
		fontWeight: '500',
		maxWidth: 560,
	},
	skillsGroups: {
		gap: Spacing.four,
	},
	skillGroup: {
		gap: Spacing.two,
	},
	groupLabel: {
		fontFamily: Fonts.mono,
		fontSize: 12,
		letterSpacing: 0.5,
	},
	chipRow: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: Spacing.two,
	},
	chip: {
		paddingHorizontal: Spacing.three,
		paddingVertical: 6,
		borderRadius: 999,
		borderWidth: 1,
	},
	chipText: {
		fontSize: 13,
		lineHeight: 18,
	},

	callout: {
		borderLeftWidth: 3,
		paddingLeft: Spacing.three,
		paddingVertical: Spacing.one,
		gap: Spacing.two,
	},
	calloutLabelRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: Spacing.two,
	},
	calloutLabel: {
		letterSpacing: 2,
		fontSize: 11,
	},
	calloutText: {
		fontSize: 17,
		lineHeight: 26,
	},
	liveDotWrapper: {
		width: 8,
		height: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	liveDot: {
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: '#3c87f7',
	},
	liveDotHalo: {
		position: 'absolute',
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: '#3c87f7',
	},

	socialBlock: {
		gap: Spacing.three,
	},
	socialWrap: {
		alignItems: 'flex-start',
	},

	avatarBlock: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: Spacing.three,
		paddingTop: Spacing.two,
	},
	avatar: {
		width: 56,
		height: 56,
		borderRadius: 28,
	},
	avatarLine: {
		fontFamily: Fonts.mono,
		fontSize: 12,
	},
})

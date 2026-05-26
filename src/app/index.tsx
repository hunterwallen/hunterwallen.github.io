import { Image, ImageBackground } from 'expo-image'
import { ScrollView, StyleSheet, View } from 'react-native'

import { SocialRow } from '@/components/social-row'
import { ThemedText } from '@/components/themed-text'
import { MaxContentWidth, Spacing } from '@/constants/theme'
import { featuredTech, techStack } from '@/data/portfolio'
import { useTheme } from '@/hooks/use-theme'

export default function HomeScreen() {
	const theme = useTheme()

	return (
		<ScrollView
			style={[styles.scroll, { backgroundColor: theme.background }]}
			contentContainerStyle={styles.contentContainer}
		>
			<View style={styles.inner}>
				<ImageBackground
					source={require('@/assets/images/portfolio/coverimage.jpg')}
					style={styles.heroBackground}
					contentFit="cover"
					contentPosition="left"
				>
					<View style={styles.heroOverlay}>
						<ThemedText type="title" style={styles.heroTitle}>
							My name is Hunter.
						</ThemedText>
						<ThemedText type="subtitle" style={styles.heroSubtitle}>
							I am a Senior Full-Stack{'\n'}Software Engineer.
						</ThemedText>
					</View>
				</ImageBackground>

				<View style={styles.section}>
					<View style={styles.techCard}>
						<ThemedText type="subtitle" style={styles.cardTitle}>
							I have experience with…
						</ThemedText>

						<View style={styles.featuredWrapper}>
							<Image
								source={featuredTech.image}
								style={styles.featuredLogo}
								contentFit="contain"
								accessibilityLabel={`${featuredTech.label} logo`}
							/>
							<ThemedText type="smallBold" style={styles.featuredLabel}>
								{featuredTech.label}
							</ThemedText>
						</View>

						<View style={styles.techGrid}>
							{techStack.map(tech => (
								<View key={tech.id} style={styles.techItem}>
									<Image
										source={tech.image}
										style={styles.techLogo}
										contentFit="contain"
										accessibilityLabel={`${tech.label} logo`}
									/>
									<ThemedText type="small" style={styles.techLabel}>
										{tech.label}
									</ThemedText>
								</View>
							))}
						</View>

						<ThemedText type="default" style={styles.cardFooter}>
							…and more.
						</ThemedText>
					</View>
				</View>

				<ImageBackground
					source={require('@/assets/images/portfolio/challengepic.jpeg')}
					style={styles.challengeBackground}
					contentFit="cover"
				>
					<View style={styles.challengeOverlay}>
						<ThemedText type="subtitle" style={styles.challengeText}>
							There&apos;s nothing I enjoy more than a good challenge.
						</ThemedText>
					</View>
				</ImageBackground>

				<View style={styles.section}>
					<View style={styles.socialSection}>
						<ThemedText type="smallBold" style={styles.socialHeading}>
							You can find me here!
						</ThemedText>
						<SocialRow size={100} />
					</View>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
	},
	contentContainer: {
		flexDirection: 'column',
		paddingBottom: Spacing.six,
	},
	inner: {
		width: '100%',
		gap: Spacing.five,
	},
	heroBackground: {
		width: '100%',
		minHeight: 380,
		paddingTop: Spacing.six,
		paddingHorizontal: Spacing.four,
		paddingBottom: Spacing.six,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	heroOverlay: {
		backgroundColor: 'rgba(10, 10, 10, 0.8)',
		padding: Spacing.four,
		borderRadius: 10,
		gap: Spacing.two,
		maxWidth: 600,
	},
	heroTitle: {
		color: '#F5F5F5',
	},
	heroSubtitle: {
		color: '#F5F5F5',
	},
	section: {
		paddingHorizontal: Spacing.four,
		alignSelf: 'center',
		width: '100%',
		maxWidth: MaxContentWidth,
		gap: Spacing.four,
	},
	card: {
		borderRadius: Spacing.four,
		padding: Spacing.four,
		gap: Spacing.four,
	},
	techCard: {
		backgroundColor: '#F5F5F5',
		borderRadius: Spacing.four,
		padding: Spacing.four,
		gap: Spacing.five,
	},
	cardTitle: {
		textAlign: 'center',
		fontSize: 24,
		lineHeight: 32,
		color: '#1A1A1A',
	},
	featuredWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: Spacing.two,
		paddingVertical: Spacing.two,
	},
	featuredLogo: {
		width: 140,
		height: 140,
	},
	featuredLabel: {
		color: '#1A1A1A',
		fontSize: 16,
	},
	techGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		gap: Spacing.four,
	},
	techItem: {
		width: 84,
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: Spacing.one,
	},
	techLogo: {
		width: 52,
		height: 52,
	},
	techLabel: {
		color: '#1A1A1A',
		textAlign: 'center',
	},
	cardFooter: {
		textAlign: 'center',
		fontStyle: 'italic',
		color: '#4A4A4A',
	},
	challengeBackground: {
		width: '100%',
		minHeight: 260,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: Spacing.six,
	},
	challengeOverlay: {
		flex: 1,
		width: '100%',
		backgroundColor: 'rgba(100, 100, 100, 0.7)',
		paddingVertical: Spacing.six,
		paddingHorizontal: Spacing.four,
		justifyContent: 'center',
		alignItems: 'center',
	},
	challengeText: {
		color: '#FFFFFF',
		textAlign: 'center',
		fontSize: 26,
		lineHeight: 34,
		fontWeight: '600',
	},
	bodyText: {
		textAlign: 'center',
		lineHeight: 24,
	},
	socialSection: {
		alignItems: 'center',
		gap: Spacing.three,
		paddingTop: Spacing.two,
	},
	socialHeading: {
		textAlign: 'center',
	},
})

import { Image } from 'expo-image'
import { SymbolView } from 'expo-symbols'
import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Spacing } from '@/constants/theme'
import { Project, projects } from '@/data/portfolio'
import { useTheme } from '@/hooks/use-theme'

const CARD_MAX_WIDTH = 400
const CARD_HEIGHT = 700
const CARD_GAP = Spacing.four
const GRID_MAX_WIDTH = CARD_MAX_WIDTH * 2 + CARD_GAP

type StoreCta = {
	url: string
	label: string
}

function getStoreCta(project: Project): StoreCta | undefined {
	if (Platform.OS === 'ios' && project.iosUrl) {
		return { url: project.iosUrl, label: 'Install on App Store' }
	}
	if (Platform.OS === 'android' && project.androidUrl) {
		return { url: project.androidUrl, label: 'Install on Google Play' }
	}
	return undefined
}

export default function PortfolioScreen() {
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
					What I Build
				</ThemedText>
				<View style={styles.cardGrid}>
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</View>
			</View>
		</ScrollView>
	)
}

function ProjectCard({ project }: { project: Project }) {
	const theme = useTheme()
	const storeCta = getStoreCta(project)

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

			<View style={styles.cardBodyWrapper}>
				<View style={styles.cardTextWrapper}>
					<ThemedText type="subtitle" style={styles.cardTitle}>
						{project.title}
					</ThemedText>
					<ThemedText
						type="default"
						themeColor="textSecondary"
						style={styles.cardBody}
					>
						{project.description}
					</ThemedText>
				</View>
				<View style={styles.actionsWrapper}>
					{storeCta && (
						<Pressable
							accessibilityRole="link"
							accessibilityLabel={`${storeCta.label} for ${project.title}`}
							onPress={() => Linking.openURL(storeCta.url)}
							style={({ pressed }) => [
								styles.installButton,
								pressed && styles.pressed,
							]}
						>
							<SymbolView
								name={{
									ios: 'arrow.down.app.fill',
									android: 'download',
									web: 'download',
								}}
								size={16}
								tintColor="#FFFFFF"
							/>
							<ThemedText type="smallBold" style={styles.installButtonText}>
								{storeCta.label}
							</ThemedText>
						</Pressable>
					)}
					{Platform.OS === 'web' && (project.iosUrl || project.androidUrl) && (
						<View style={styles.webStoreLinks}>
							{project.iosUrl && (
								<Pressable
									accessibilityRole="link"
									accessibilityLabel={`View ${project.title} on the App Store`}
									onPress={() => Linking.openURL(project.iosUrl!)}
									style={({ pressed }) => [
										styles.webStoreLink,
										pressed && styles.pressed,
									]}
								>
									<Image
										source={require('@/assets/images/portfolio/apple.png')}
										style={styles.storeLogo}
										contentFit="contain"
										accessibilityLabel="Apple logo"
									/>
									<ThemedText type="linkPrimary">App Store</ThemedText>
								</Pressable>
							)}
							{project.androidUrl && (
								<Pressable
									accessibilityRole="link"
									accessibilityLabel={`View ${project.title} on Google Play`}
									onPress={() => Linking.openURL(project.androidUrl!)}
									style={({ pressed }) => [
										styles.webStoreLink,
										pressed && styles.pressed,
									]}
								>
									<Image
										source={require('@/assets/images/portfolio/googleplay.png')}
										style={styles.storeLogo}
										contentFit="contain"
										accessibilityLabel="Google Play logo"
									/>
									<ThemedText type="linkPrimary">Google Play</ThemedText>
								</Pressable>
							)}
						</View>
					)}
					<Pressable
						accessibilityRole="link"
						onPress={() => Linking.openURL(project.url)}
						style={({ pressed }) => pressed && styles.pressed}
					>
						<ThemedView type="backgroundSelected" style={styles.linkButton}>
							<ThemedText type="link" style={{ color: theme.text }}>
								{project.urlLabel}
							</ThemedText>
							<SymbolView
								name={{
									ios: 'arrow.up.right.square',
									android: 'open_in_new',
									web: 'open_in_new',
								}}
								size={14}
								tintColor={theme.text as string}
							/>
						</ThemedView>
					</Pressable>
				</View>
			</View>
		</ThemedView>
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
		maxWidth: GRID_MAX_WIDTH,
		gap: Spacing.four,
	},
	cardGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: CARD_GAP,
	},
	header: {
		alignItems: 'center',
		gap: Spacing.two,
		paddingBottom: Spacing.two,
	},
	title: {
		textAlign: 'center',
	},
	subtitle: {
		textAlign: 'center',
	},
	card: {
		flexBasis: CARD_MAX_WIDTH,
		flexGrow: 1,
		flexShrink: 1,
		maxWidth: CARD_MAX_WIDTH,
		borderRadius: Spacing.four,
		overflow: 'hidden',
		gap: 0,
		height: CARD_HEIGHT,
	},
	imageFrame: {
		width: '100%',
		height: 340,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: Spacing.three,
	},
	appImage: {
		width: '100%',
		height: '100%',
	},
	cardBodyWrapper: {
		padding: Spacing.four,
		gap: Spacing.three,
		flex: 1,
		justifyContent: 'space-between',
	},
	cardTextWrapper: {
		gap: Spacing.three,
	},
	cardTitle: {
		fontSize: 24,
		lineHeight: 30,
	},
	cardBody: {
		lineHeight: 22,
	},
	actionsWrapper: {
		gap: Spacing.two,
		alignItems: 'flex-start',
	},
	installButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: Spacing.two,
		paddingHorizontal: Spacing.four,
		paddingVertical: Spacing.two,
		borderRadius: Spacing.three,
		backgroundColor: '#3c87f7',
		alignSelf: 'flex-start',
	},
	installButtonText: {
		color: '#FFFFFF',
		fontSize: 14,
	},
	webStoreLinks: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: Spacing.three,
		alignSelf: 'flex-start',
	},
	webStoreLink: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: Spacing.one,
	},
	storeLogo: {
		width: 16,
		height: 16,
	},
	linkButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: Spacing.one,
		paddingHorizontal: Spacing.three,
		paddingVertical: Spacing.two,
		borderRadius: Spacing.three,
		alignSelf: 'flex-start',
	},
	pressed: {
		opacity: 0.7,
	},
})

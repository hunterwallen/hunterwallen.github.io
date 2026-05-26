import Constants from 'expo-constants'
import * as Contacts from 'expo-contacts'
import { SymbolView } from 'expo-symbols'
import { useState } from 'react'
import {
	Modal,
	Platform,
	Pressable,
	ScrollView,
	Share,
	StyleSheet,
	View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { useToast } from '@/components/toast'
import { MaxContentWidth, Spacing } from '@/constants/theme'
import { ThemeMode, useThemeMode } from '@/contexts/theme-mode'
import { useTheme } from '@/hooks/use-theme'

const THEME_OPTIONS: { value: ThemeMode; label: string; sf: string }[] = [
	{ value: 'system', label: 'System', sf: 'circle.lefthalf.filled' },
	{ value: 'light', label: 'Light', sf: 'sun.max.fill' },
	{ value: 'dark', label: 'Dark', sf: 'moon.fill' },
]

const PORTFOLIO_URL = 'https://hunterwallen.com'

export default function SettingsScreen() {
	const theme = useTheme()
	const insets = useSafeAreaInsets()
	const { mode, setMode } = useThemeMode()
	const { showToast } = useToast()
	const [learnMoreOpen, setLearnMoreOpen] = useState(false)

	const saveContact = async () => {
		if (Platform.OS === 'web') {
			showToast('Save to Contacts is only available in the mobile app.')
			return
		}
		try {
			const permission = await Contacts.requestPermissionsAsync()
			if (permission.status !== 'granted') {
				showToast('Contacts permission denied.')
				return
			}
			await Contacts.Contact.presentCreateForm({
				givenName: 'Hunter',
				familyName: 'Wallen',
				jobTitle: 'Full-Stack Software Engineer',
				emails: [{ address: 'hunterwallen67@gmail.com', label: 'work' }],
				urlAddresses: [
					{ url: 'https://hunterwallen.com', label: 'portfolio' },
					{ url: 'https://github.com/hunterwallen', label: 'github' },
					{
						url: 'https://www.linkedin.com/in/hunter-wallen',
						label: 'linkedin',
					},
				],
			})
		} catch {
			showToast("Couldn't save contact. Try again.")
		}
	}

	const sharePortfolio = async () => {
		try {
			await Share.share({
				title: 'Hunter Wallen — Portfolio',
				message: `Check out Hunter Wallen's portfolio: ${PORTFOLIO_URL}`,
				url: PORTFOLIO_URL,
			})
		} catch {
			showToast("Couldn't open the share sheet.")
		}
	}

	const appVersion =
		Constants.expoConfig?.version ??
		Constants.manifest2?.runtimeVersion ??
		'1.0.0'

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
					Settings
				</ThemedText>

				<Section title="APPEARANCE">
					<ThemedView type="backgroundElement" style={styles.card}>
						<View style={styles.segmentRow}>
							{THEME_OPTIONS.map(option => {
								const selected = option.value === mode
								return (
									<Pressable
										key={option.value}
										accessibilityRole="button"
										accessibilityState={{ selected }}
										accessibilityLabel={`${option.label} theme`}
										onPress={() => setMode(option.value)}
										style={({ pressed }) => [
											styles.segment,
											selected && {
												backgroundColor: theme.backgroundSelected,
											},
											pressed && styles.pressed,
										]}
									>
										<SymbolView
											name={
												{
													ios: option.sf,
													android:
														option.value === 'system'
															? 'brightness_medium'
															: option.value === 'light'
																? 'light_mode'
																: 'dark_mode',
													web:
														option.value === 'system'
															? 'brightness_medium'
															: option.value === 'light'
																? 'light_mode'
																: 'dark_mode',
												} as React.ComponentProps<typeof SymbolView>['name']
											}
											size={18}
											tintColor={
												selected
													? (theme.text as string)
													: (theme.textSecondary as string)
											}
										/>
										<ThemedText
											type="smallBold"
											themeColor={selected ? 'text' : 'textSecondary'}
										>
											{option.label}
										</ThemedText>
									</Pressable>
								)
							})}
						</View>
					</ThemedView>
				</Section>

				<Section title="CONNECT">
					<ThemedView type="backgroundElement" style={styles.card}>
						<Row
							icon="person.crop.circle.badge.plus"
							androidIcon="contact_page"
							label="Save my contact info"
							helper="Adds Hunter to your phone's contacts."
							onPress={saveContact}
						/>
						<Divider color={theme.backgroundSelected as string} />
						<Row
							icon="square.and.arrow.up"
							androidIcon="share"
							label="Share this portfolio"
							onPress={sharePortfolio}
						/>
					</ThemedView>
				</Section>

				<Section title="ABOUT">
					<ThemedView type="backgroundElement" style={styles.card}>
						<Row
							icon="info.circle.fill"
							androidIcon="info"
							label="Learn more about this app"
							helper="Stack, libraries, and features."
							onPress={() => setLearnMoreOpen(true)}
						/>
						<Divider color={theme.backgroundSelected as string} />
						<View style={styles.aboutRow}>
							<ThemedText type="small" themeColor="textSecondary">
								Version
							</ThemedText>
							<ThemedText type="smallBold">{appVersion}</ThemedText>
						</View>
						<Divider color={theme.backgroundSelected as string} />
						<View style={styles.aboutRow}>
							<ThemedText type="small" themeColor="textSecondary">
								Built with
							</ThemedText>
							<ThemedText type="smallBold">Expo + React Native</ThemedText>
						</View>
					</ThemedView>
				</Section>
			</View>
			<LearnMoreModal
				visible={learnMoreOpen}
				onClose={() => setLearnMoreOpen(false)}
				appVersion={appVersion}
			/>
		</ScrollView>
	)
}

type LibraryItem = {
	name: string
	description: string
}

const STACK: LibraryItem[] = [
	{ name: 'Expo SDK 56', description: 'Managed runtime, build, and OTA updates.' },
	{
		name: 'React Native 0.85 + React 19.2',
		description: 'Single codebase rendering native UI on iOS, Android, and the web.',
	},
	{
		name: 'TypeScript',
		description: 'Strict typing across the entire app surface.',
	},
	{
		name: 'expo-router (js-tabs)',
		description: 'File-based routing with stable React Navigation bottom tabs.',
	},
]

const LIBRARIES: LibraryItem[] = [
	{
		name: 'react-native-reanimated',
		description: 'Worklet-driven animations for the loading overlay and toast.',
	},
	{
		name: 'expo-image',
		description: 'High-performance images with cross-platform prefetching.',
	},
	{
		name: 'expo-symbols',
		description: 'SF Symbols on iOS, Material Icons on Android and web.',
	},
	{
		name: 'expo-contacts',
		description: 'Native “Save Contact” form via the modern class-based API.',
	},
	{
		name: 'expo-clipboard',
		description: 'Clipboard fallback when mailto links fail on iOS.',
	},
	{
		name: 'expo-web-browser',
		description: 'In-app browser presentation for external links.',
	},
	{
		name: '@react-native-async-storage/async-storage',
		description: 'Persists the user’s theme preference across launches.',
	},
	{
		name: 'react-native-safe-area-context',
		description: 'Adapts every screen to notches, Dynamic Islands, and cutouts.',
	},
]

const FEATURES: string[] = [
	'Cross-platform from one codebase — iOS, Android, and web.',
	'System / Light / Dark theme with persistence across launches.',
	'Animated loading screen that prefetches every image before reveal.',
	'Native share sheet with portfolio metadata.',
	'Save Hunter’s contact info directly to the device’s address book.',
	'Toast notifications with auto-dismiss and a11y live regions.',
	'Platform-aware install CTAs — Play Store on Android, App Store on iOS, two text links on the web.',
	'Safe-area-aware layouts; modal loading overlay covers status and nav bars.',
]

function LearnMoreModal({
	visible,
	onClose,
	appVersion,
}: {
	visible: boolean
	onClose: () => void
	appVersion: string
}) {
	const theme = useTheme()
	const insets = useSafeAreaInsets()

	return (
		<Modal
			visible={visible}
			onRequestClose={onClose}
			animationType="slide"
			presentationStyle="pageSheet"
		>
			<View style={[styles.modalRoot, { backgroundColor: theme.background }]}>
				<View
					style={[
						styles.modalHeader,
						{
							borderBottomColor: theme.backgroundElement,
							paddingTop: Platform.OS === 'ios' ? Spacing.three : insets.top + Spacing.three,
						},
					]}
				>
					<View style={{ width: 60 }} />
					<ThemedText type="smallBold" style={styles.modalTitle}>
						About this app
					</ThemedText>
					<Pressable
						accessibilityRole="button"
						accessibilityLabel="Close"
						onPress={onClose}
						style={({ pressed }) => [styles.modalClose, pressed && styles.pressed]}
						hitSlop={12}
					>
						<ThemedText type="link" themeColor="text">
							Done
						</ThemedText>
					</Pressable>
				</View>

				<ScrollView
					contentContainerStyle={[
						styles.modalScroll,
						{
							paddingBottom: insets.bottom + Spacing.five,
							paddingLeft: insets.left + Spacing.four,
							paddingRight: insets.right + Spacing.four,
						},
					]}
				>
					<View style={styles.modalIntro}>
						<ThemedText type="subtitle" style={styles.modalIntroTitle}>
							Hunter Wallen — Portfolio
						</ThemedText>
						<ThemedText themeColor="textSecondary" style={styles.modalIntroBody}>
							A cross-platform port of hunterwallen.com, written from scratch in
							Expo SDK 56. The same React Native codebase ships to iOS, Android,
							and the web with no per-platform forks of the screen logic.
						</ThemedText>
						<ThemedText
							type="small"
							themeColor="textSecondary"
							style={styles.modalIntroMeta}
						>
							Version {appVersion}
						</ThemedText>
					</View>

					<Section title="STACK">
						<ThemedView type="backgroundElement" style={styles.modalCard}>
							{STACK.map((item, idx) => (
								<View key={item.name}>
									<View style={styles.libraryRow}>
										<ThemedText type="smallBold">{item.name}</ThemedText>
										<ThemedText type="small" themeColor="textSecondary">
											{item.description}
										</ThemedText>
									</View>
									{idx < STACK.length - 1 && (
										<Divider color={theme.backgroundSelected as string} />
									)}
								</View>
							))}
						</ThemedView>
					</Section>

					<Section title="LIBRARIES">
						<ThemedView type="backgroundElement" style={styles.modalCard}>
							{LIBRARIES.map((item, idx) => (
								<View key={item.name}>
									<View style={styles.libraryRow}>
										<ThemedText type="smallBold">{item.name}</ThemedText>
										<ThemedText type="small" themeColor="textSecondary">
											{item.description}
										</ThemedText>
									</View>
									{idx < LIBRARIES.length - 1 && (
										<Divider color={theme.backgroundSelected as string} />
									)}
								</View>
							))}
						</ThemedView>
					</Section>

					<Section title="FEATURES">
						<ThemedView type="backgroundElement" style={styles.modalCard}>
							{FEATURES.map((feature, idx) => (
								<View key={feature}>
									<View style={styles.featureRow}>
										<SymbolView
											name={
												{
													ios: 'checkmark.circle.fill',
													android: 'check_circle',
													web: 'check_circle',
												} as React.ComponentProps<typeof SymbolView>['name']
											}
											size={16}
											tintColor="#3c87f7"
										/>
										<ThemedText
											type="small"
											style={styles.featureText}
										>
											{feature}
										</ThemedText>
									</View>
									{idx < FEATURES.length - 1 && (
										<Divider color={theme.backgroundSelected as string} />
									)}
								</View>
							))}
						</ThemedView>
					</Section>

					<ThemedText
						type="small"
						themeColor="textSecondary"
						style={styles.modalFootnote}
					>
						Source available on GitHub.
					</ThemedText>
				</ScrollView>
			</View>
		</Modal>
	)
}

function Section({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<View style={styles.section}>
			<ThemedText
				type="smallBold"
				themeColor="textSecondary"
				style={styles.sectionTitle}
			>
				{title}
			</ThemedText>
			{children}
		</View>
	)
}

function Row({
	icon,
	androidIcon,
	label,
	helper,
	onPress,
}: {
	icon: string
	androidIcon: string
	label: string
	helper?: string
	onPress: () => void
}) {
	const theme = useTheme()
	return (
		<Pressable
			accessibilityRole="button"
			accessibilityLabel={label}
			onPress={onPress}
			style={({ pressed }) => [styles.row, pressed && styles.pressed]}
		>
			<View
				style={[styles.rowIcon, { backgroundColor: theme.backgroundSelected }]}
			>
				<SymbolView
					name={
						{
							ios: icon,
							android: androidIcon,
							web: androidIcon,
						} as React.ComponentProps<typeof SymbolView>['name']
					}
					size={18}
					tintColor={theme.text as string}
				/>
			</View>
			<View style={styles.rowText}>
				<ThemedText type="default">{label}</ThemedText>
				{helper && (
					<ThemedText type="small" themeColor="textSecondary">
						{helper}
					</ThemedText>
				)}
			</View>
			<SymbolView
				name={{
					ios: 'chevron.right',
					android: 'chevron_right',
					web: 'chevron_right',
				}}
				size={14}
				tintColor={theme.textSecondary as string}
			/>
		</Pressable>
	)
}

function Divider({ color }: { color: string }) {
	return <View style={[styles.divider, { backgroundColor: color }]} />
}

const styles = StyleSheet.create({
	scroll: { flex: 1 },
	contentContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingBottom: Spacing.four,
	},
	inner: {
		width: '100%',
		maxWidth: MaxContentWidth,
		gap: Spacing.five,
	},
	title: {
		textAlign: 'center',
	},
	section: {
		gap: Spacing.two,
	},
	sectionTitle: {
		letterSpacing: 1.2,
		paddingHorizontal: Spacing.two,
	},
	card: {
		borderRadius: Spacing.four,
		paddingVertical: Spacing.two,
		paddingHorizontal: Spacing.three,
	},
	segmentRow: {
		flexDirection: 'row',
		gap: Spacing.one,
		paddingVertical: Spacing.two,
	},
	segment: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: Spacing.one,
		paddingVertical: Spacing.two,
		paddingHorizontal: Spacing.three,
		borderRadius: Spacing.three,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: Spacing.three,
		paddingVertical: Spacing.three,
	},
	rowIcon: {
		width: 36,
		height: 36,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	rowText: {
		flex: 1,
		gap: 2,
	},
	aboutRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: Spacing.three,
	},
	divider: {
		height: StyleSheet.hairlineWidth,
		width: '100%',
	},
	pressed: {
		opacity: 0.7,
	},
	modalRoot: {
		flex: 1,
	},
	modalHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: Spacing.four,
		paddingBottom: Spacing.three,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	modalTitle: {
		flex: 1,
		textAlign: 'center',
		fontSize: 14,
		letterSpacing: 0.4,
	},
	modalClose: {
		width: 60,
		alignItems: 'flex-end',
	},
	modalScroll: {
		paddingTop: Spacing.four,
		gap: Spacing.five,
	},
	modalIntro: {
		gap: Spacing.two,
		paddingBottom: Spacing.two,
	},
	modalIntroTitle: {
		fontSize: 24,
		lineHeight: 30,
	},
	modalIntroBody: {
		lineHeight: 22,
	},
	modalIntroMeta: {
		paddingTop: Spacing.one,
	},
	modalCard: {
		borderRadius: Spacing.four,
		paddingHorizontal: Spacing.three,
	},
	libraryRow: {
		paddingVertical: Spacing.three,
		gap: 2,
	},
	featureRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: Spacing.two,
		paddingVertical: Spacing.three,
	},
	featureText: {
		flex: 1,
		lineHeight: 20,
	},
	modalFootnote: {
		textAlign: 'center',
		paddingTop: Spacing.two,
	},
})

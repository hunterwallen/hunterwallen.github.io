import * as Contacts from 'expo-contacts/legacy'
import { useRouter } from 'expo-router'
import { SymbolView } from 'expo-symbols'
import {
	Linking,
	Platform,
	Pressable,
	Share,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { InteractiveTransition, Spacing } from '@/constants/theme'
import { useTheme } from '@/hooks/use-theme'

import { useToast } from './toast'

const PORTFOLIO_URL = 'https://hunterwallen.com'
const CONTACT_EMAIL = 'hunterwallen67@gmail.com'

export function ScreenHeader() {
	const theme = useTheme()
	const insets = useSafeAreaInsets()
	const router = useRouter()
	const { showToast } = useToast()

	const saveContact = async () => {
		try {
			const permission = await Contacts.requestPermissionsAsync()
			if (permission.status !== 'granted') {
				showToast('Contacts permission denied.')
				return
			}
			const contact: Contacts.Contact = {
				contactType: Contacts.ContactTypes.Person,
				name: 'Hunter Wallen',
				firstName: 'Hunter',
				lastName: 'Wallen',
				jobTitle: 'Full-Stack Software Engineer',
				emails: [
					{
						email: CONTACT_EMAIL,
						label: 'work',
						isPrimary: true,
					},
				],
				urlAddresses: [
					{ url: PORTFOLIO_URL, label: 'portfolio' },
					{ url: 'https://github.com/hunterwallen', label: 'github' },
					{
						url: 'https://www.linkedin.com/in/hunter-wallen',
						label: 'linkedin',
					},
				],
			}
			await Contacts.presentFormAsync(null, contact)
		} catch {
			showToast("Couldn't save contact. Try again.")
		}
	}

	const emailMe = async () => {
		try {
			await Linking.openURL(`mailto:${CONTACT_EMAIL}`)
		} catch {
			showToast(`Couldn't open email. Reach Hunter at ${CONTACT_EMAIL}.`)
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

	return (
		<View
			style={[
				styles.header,
				{
					paddingTop: insets.top + Spacing.two,
					paddingLeft: insets.left + Spacing.four,
					paddingRight: insets.right + Spacing.four,
				},
			]}
		>
			<View style={styles.spacer} />

			<Pressable
				accessibilityRole="button"
				accessibilityLabel="Share this portfolio"
				onPress={sharePortfolio}
				hitSlop={12}
				style={({ pressed, hovered }: PressableState) => [
					styles.iconButton,
					hovered && styles.iconHovered,
					pressed && styles.iconPressed,
				]}
			>
				<SymbolView
					name={{
						ios: 'square.and.arrow.up',
						android: 'share',
						web: 'share',
					}}
					size={20}
					tintColor={theme.textSecondary as string}
				/>
			</Pressable>

			{Platform.OS === 'web' ? (
				<Pressable
					accessibilityRole="link"
					accessibilityLabel={`Email Hunter at ${CONTACT_EMAIL}`}
					onPress={emailMe}
					hitSlop={12}
					style={({ pressed, hovered }: PressableState) => [
					styles.iconButton,
					hovered && styles.iconHovered,
					pressed && styles.iconPressed,
				]}
				>
					<SymbolView
						name={{
							ios: 'envelope.fill',
							android: 'mail',
							web: 'mail',
						}}
						size={20}
						tintColor={theme.textSecondary as string}
					/>
				</Pressable>
			) : (
				<Pressable
					accessibilityRole="button"
					accessibilityLabel="Save my contact info"
					onPress={saveContact}
					hitSlop={12}
					style={({ pressed, hovered }: PressableState) => [
					styles.iconButton,
					hovered && styles.iconHovered,
					pressed && styles.iconPressed,
				]}
				>
					<SymbolView
						name={{
							ios: 'person.crop.circle.badge.plus',
							android: 'contact_page',
							web: 'contact_page',
						}}
						size={20}
						tintColor={theme.textSecondary as string}
					/>
				</Pressable>
			)}

			<Pressable
				accessibilityRole="button"
				accessibilityLabel="Settings"
				onPress={() => router.push('/settings')}
				hitSlop={12}
				style={({ pressed, hovered }: PressableState) => [
					styles.iconButton,
					hovered && styles.iconHovered,
					pressed && styles.iconPressed,
				]}
			>
				<SymbolView
					name={{
						ios: 'gearshape.fill',
						android: 'settings',
						web: 'settings',
					}}
					size={20}
					tintColor={theme.textSecondary as string}
				/>
			</Pressable>
		</View>
	)
}

type PressableState = { pressed: boolean; hovered?: boolean }

const interactiveBase = InteractiveTransition as unknown as ViewStyle

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: Spacing.two,
		gap: Spacing.three,
	},
	spacer: { flex: 1 },
	iconButton: {
		padding: Spacing.one,
		borderRadius: Spacing.one,
		...interactiveBase,
	},
	iconHovered: {
		opacity: 0.7,
	},
	iconPressed: {
		opacity: 0.45,
	},
})

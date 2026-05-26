import * as Clipboard from 'expo-clipboard'
import { Image } from 'expo-image'
import { Alert, Linking, Pressable, StyleSheet, View } from 'react-native'

import { Spacing } from '@/constants/theme'
import { SocialLink, socials } from '@/data/portfolio'

import { useToast } from './toast'

type Props = {
	size?: number
}

function extractEmail(mailtoUrl: string) {
	return mailtoUrl.replace(/^mailto:/, '').split('?')[0]
}

export function SocialRow({ size = 56 }: Props) {
	const { showToast } = useToast()

	const openSocial = async (social: SocialLink) => {
		try {
			await Linking.openURL(social.url)
		} catch {
			if (social.url.startsWith('mailto:')) {
				const email = extractEmail(social.url)
				try {
					await Clipboard.setStringAsync(email)
					showToast(
						`Failed to open your email. Hunter's email has been copied to your clipboard.`,
					)
				} catch {
					Alert.alert('Email me at', email, [{ text: 'OK' }])
				}
			} else {
				Alert.alert("Couldn't open link", social.url, [{ text: 'OK' }])
			}
		}
	}

	return (
		<View style={styles.row}>
			{socials.map(social => (
				<Pressable
					key={social.id}
					accessibilityRole="link"
					accessibilityLabel={social.label}
					onPress={() => openSocial(social)}
					style={({ pressed }) => [
						styles.iconWrapper,
						pressed && styles.pressed,
					]}
				>
					<Image
						source={social.image}
						style={{ width: size, height: size }}
						contentFit="contain"
					/>
				</Pressable>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		gap: Spacing.four,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconWrapper: {
		padding: Spacing.one,
	},
	pressed: {
		opacity: 0.6,
	},
})

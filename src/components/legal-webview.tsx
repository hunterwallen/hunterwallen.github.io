import { useRouter } from 'expo-router'
import { SymbolView } from 'expo-symbols'
import { useState } from 'react'
import {
	ActivityIndicator,
	Pressable,
	StyleSheet,
	View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview'

import { Spacing } from '@/constants/theme'
import { useTheme } from '@/hooks/use-theme'

import { ThemedText } from './themed-text'

type Props = {
	title: string
	url: string
}

export function LegalWebView({ title, url }: Props) {
	const theme = useTheme()
	const insets = useSafeAreaInsets()
	const router = useRouter()
	const [loading, setLoading] = useState(true)

	return (
		<View style={[styles.root, { backgroundColor: theme.background }]}>
			<View
				style={[
					styles.header,
					{
						paddingTop: insets.top + Spacing.two,
						borderBottomColor: theme.backgroundElement,
					},
				]}
			>
				<Pressable
					accessibilityRole="button"
					accessibilityLabel="Back"
					onPress={() => router.back()}
					hitSlop={12}
					style={({ pressed }) => [styles.back, pressed && styles.pressed]}
				>
					<SymbolView
						name={{
							ios: 'chevron.left',
							android: 'arrow_back',
							web: 'arrow_back',
						}}
						size={20}
						tintColor={theme.text as string}
					/>
					<ThemedText type="link" themeColor="text">
						Back
					</ThemedText>
				</Pressable>
				<ThemedText type="smallBold" style={styles.title}>
					{title}
				</ThemedText>
				<View style={styles.headerSpacer} />
			</View>

			<View style={styles.webviewWrapper}>
				<WebView
					source={{ uri: url }}
					onLoadEnd={() => setLoading(false)}
					style={{ backgroundColor: theme.background }}
					originWhitelist={['*']}
				/>
				{loading && (
					<View
						style={[
							StyleSheet.absoluteFill,
							styles.loadingOverlay,
							{ backgroundColor: theme.background },
						]}
						pointerEvents="none"
					>
						<ActivityIndicator size="large" color="#3c87f7" />
					</View>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: { flex: 1 },
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: Spacing.three,
		paddingBottom: Spacing.two,
		borderBottomWidth: StyleSheet.hairlineWidth,
		gap: Spacing.two,
	},
	back: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 2,
		minWidth: 80,
	},
	title: {
		flex: 1,
		textAlign: 'center',
	},
	headerSpacer: {
		minWidth: 80,
	},
	pressed: {
		opacity: 0.6,
	},
	webviewWrapper: {
		flex: 1,
	},
	loadingOverlay: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})

import { useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'

import { useTheme } from '@/hooks/use-theme'

import { StackHeader } from './stack-header'

type Props = {
	title: string
	url: string
}

export function LegalWebView({ title, url }: Props) {
	const theme = useTheme()
	const [loading, setLoading] = useState(true)

	return (
		<View style={[styles.root, { backgroundColor: theme.background }]}>
			<StackHeader title={title} backHref="/settings" />
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
	webviewWrapper: {
		flex: 1,
	},
	loadingOverlay: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})

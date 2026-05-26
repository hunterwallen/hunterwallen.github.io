import { Image as ExpoImage } from 'expo-image'
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router'
import { Tabs } from 'expo-router/js-tabs'
import { SymbolView } from 'expo-symbols'
import { useEffect, useState } from 'react'
import {
	ColorValue,
	Image as RNImage,
	useColorScheme,
	View,
} from 'react-native'

import { LoadingOverlay } from '@/components/loading-overlay'
import { ToastProvider } from '@/components/toast'
import { Colors } from '@/constants/theme'
import {
	featuredTech,
	projects,
	socials,
	techStack,
} from '@/data/portfolio'

const tabIcons = {
	index: { ios: 'house.fill', android: 'home', web: 'home' },
	portfolio: { ios: 'briefcase.fill', android: 'work', web: 'work' },
	about: { ios: 'person.fill', android: 'person', web: 'person' },
} as const

type TabName = keyof typeof tabIcons

function TabIcon({
	name,
	color,
	size,
}: {
	name: TabName
	color: ColorValue
	size: number
}) {
	return (
		<SymbolView
			name={tabIcons[name]}
			size={size}
			tintColor={color as string}
			resizeMode="scaleAspectFit"
		/>
	)
}

const MIN_OVERLAY_MS = 1500

const criticalAssets = [
	require('@/assets/images/portfolio/coverimage.jpg'),
	require('@/assets/images/portfolio/challengepic.jpeg'),
	require('@/assets/images/portfolio/avatar.jpg'),
	require('@/assets/images/portfolio/apple.png'),
	require('@/assets/images/portfolio/googleplay.png'),
	featuredTech.image,
	...techStack.map(t => t.image),
	...projects.map(p => p.image),
	...socials.map(s => s.image),
]

function resolveUri(asset: unknown): string | null {
	try {
		const resolved = RNImage.resolveAssetSource(asset as number)
		return resolved?.uri ?? null
	} catch {
		return null
	}
}

export default function RootLayout() {
	const scheme = useColorScheme()
	const isDark = scheme === 'dark'
	const colors = Colors[isDark ? 'dark' : 'light']

	const [progress, setProgress] = useState(0)
	const [contentReady, setContentReady] = useState(false)
	const [overlayMounted, setOverlayMounted] = useState(true)

	useEffect(() => {
		let cancelled = false
		const startedAt = Date.now()

		const uris = criticalAssets
			.map(resolveUri)
			.filter((uri): uri is string => Boolean(uri))

		const total = uris.length || 1
		let done = 0

		const bumpProgress = () => {
			if (cancelled) return
			done += 1
			setProgress(done / total)
		}

		const loadAll =
			uris.length === 0
				? Promise.resolve()
				: Promise.all(
						uris.map(uri =>
							ExpoImage.prefetch(uri)
								.catch(() => null)
								.then(bumpProgress),
						),
				  )

		const minDelay = new Promise<void>(resolve =>
			setTimeout(
				resolve,
				Math.max(0, MIN_OVERLAY_MS - (Date.now() - startedAt)),
			),
		)

		Promise.all([loadAll, minDelay]).then(() => {
			if (!cancelled) {
				setProgress(1)
				setContentReady(true)
			}
		})

		return () => {
			cancelled = true
		}
	}, [])

	return (
		<ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
			<ToastProvider>
				<View style={{ flex: 1 }}>
					<Tabs
					screenOptions={{
						headerShown: false,
						tabBarActiveTintColor: '#3c87f7',
						tabBarInactiveTintColor: colors.textSecondary,
						tabBarStyle: {
							backgroundColor: colors.background,
							borderTopColor: colors.backgroundElement,
						},
					}}
				>
					<Tabs.Screen
						name="index"
						options={{
							title: 'Home',
							tabBarIcon: ({ color, size }) => (
								<TabIcon name="index" color={color} size={size} />
							),
						}}
					/>
					<Tabs.Screen
						name="portfolio"
						options={{
							title: 'Portfolio',
							tabBarIcon: ({ color, size }) => (
								<TabIcon name="portfolio" color={color} size={size} />
							),
						}}
					/>
					<Tabs.Screen
						name="about"
						options={{
							title: 'About',
							tabBarIcon: ({ color, size }) => (
								<TabIcon name="about" color={color} size={size} />
							),
						}}
					/>
				</Tabs>
				{overlayMounted && (
					<LoadingOverlay
						progress={progress}
						visible={!contentReady}
						onDismiss={() => setOverlayMounted(false)}
					/>
				)}
			</View>
			</ToastProvider>
		</ThemeProvider>
	)
}

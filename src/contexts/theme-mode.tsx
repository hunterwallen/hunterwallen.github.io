import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import { useColorScheme as useSystemColorScheme } from 'react-native'

export type ThemeMode = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'hunters-portfolio.theme-mode'

type ThemeModeContextValue = {
	mode: ThemeMode
	setMode: (mode: ThemeMode) => void
	effectiveScheme: 'light' | 'dark'
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null)

export function useThemeMode() {
	const ctx = useContext(ThemeModeContext)
	if (!ctx) {
		throw new Error('useThemeMode must be used within ThemeModeProvider')
	}
	return ctx
}

export function ThemeModeProvider({ children }: { children: ReactNode }) {
	const systemScheme = useSystemColorScheme()
	const [mode, setModeState] = useState<ThemeMode>('system')
	const [hasHydrated, setHasHydrated] = useState(false)

	useEffect(() => {
		let cancelled = false
		AsyncStorage.getItem(STORAGE_KEY)
			.then(value => {
				if (cancelled) return
				if (value === 'light' || value === 'dark' || value === 'system') {
					setModeState(value)
				}
			})
			.catch(() => {})
			.finally(() => {
				if (!cancelled) setHasHydrated(true)
			})
		return () => {
			cancelled = true
		}
	}, [])

	const setMode = useCallback((next: ThemeMode) => {
		setModeState(next)
		AsyncStorage.setItem(STORAGE_KEY, next).catch(() => {})
	}, [])

	const resolvedSystem: 'light' | 'dark' =
		systemScheme === 'dark' ? 'dark' : 'light'

	const effectiveScheme: 'light' | 'dark' = !hasHydrated
		? resolvedSystem
		: mode === 'system'
			? resolvedSystem
			: mode

	return (
		<ThemeModeContext.Provider value={{ mode, setMode, effectiveScheme }}>
			{children}
		</ThemeModeContext.Provider>
	)
}

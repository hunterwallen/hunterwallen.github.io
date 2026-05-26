import { useThemeMode } from '@/contexts/theme-mode'

export function useColorScheme(): 'light' | 'dark' {
	return useThemeMode().effectiveScheme
}

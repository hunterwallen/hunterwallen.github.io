import { createContext, ReactNode, useContext } from 'react'

const AppReadyContext = createContext(true)

export function useAppReady() {
	return useContext(AppReadyContext)
}

export function AppReadyProvider({
	value,
	children,
}: {
	value: boolean
	children: ReactNode
}) {
	return (
		<AppReadyContext.Provider value={value}>
			{children}
		</AppReadyContext.Provider>
	)
}

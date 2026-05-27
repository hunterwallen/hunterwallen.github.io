import { ReactNode } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ThemedText } from '@/components/themed-text'
import { MaxContentWidth, Spacing } from '@/constants/theme'
import { useTheme } from '@/hooks/use-theme'

type LegalLayoutProps = {
	title: string
	lastUpdated: string
	intro?: ReactNode
	children: ReactNode
}

export function LegalLayout({
	title,
	lastUpdated,
	intro,
	children,
}: LegalLayoutProps) {
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
					paddingBottom: insets.bottom + Spacing.six,
				},
			]}
		>
			<View style={styles.inner}>
				<ThemedText type="subtitle" style={styles.title}>
					{title}
				</ThemedText>
				<ThemedText
					type="small"
					themeColor="textSecondary"
					style={styles.lastUpdated}
				>
					Last updated: {lastUpdated}
				</ThemedText>
				{intro && <View style={styles.introBlock}>{intro}</View>}
				<View style={styles.sectionsWrapper}>{children}</View>
			</View>
		</ScrollView>
	)
}

export function LegalSection({
	title,
	children,
}: {
	title: string
	children: ReactNode
}) {
	return (
		<View style={styles.section}>
			<ThemedText style={styles.sectionTitle}>{title}</ThemedText>
			<View style={styles.sectionBody}>{children}</View>
		</View>
	)
}

export function LegalParagraph({
	children,
	emphasis,
}: {
	children: ReactNode
	emphasis?: boolean
}) {
	return (
		<ThemedText
			type={emphasis ? 'smallBold' : 'default'}
			style={[styles.paragraph, emphasis && styles.emphasis]}
		>
			{children}
		</ThemedText>
	)
}

export function LegalList({ items }: { items: ReactNode[] }) {
	return (
		<View style={styles.list}>
			{items.map((item, idx) => (
				<View key={idx} style={styles.bulletRow}>
					<ThemedText style={styles.bulletMark} themeColor="textSecondary">
						•
					</ThemedText>
					<ThemedText style={styles.bulletText}>{item}</ThemedText>
				</View>
			))}
		</View>
	)
}

export function LegalContact({
	name,
	email,
}: {
	name: string
	email: string
}) {
	return (
		<View style={styles.contactBlock}>
			<ThemedText type="smallBold">{name}</ThemedText>
			<ThemedText type="small" themeColor="textSecondary">
				Email: {email}
			</ThemedText>
		</View>
	)
}

const styles = StyleSheet.create({
	scroll: { flex: 1 },
	contentContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	inner: {
		width: '100%',
		maxWidth: MaxContentWidth,
		gap: Spacing.three,
	},
	title: {
		textAlign: 'left',
	},
	lastUpdated: {
		marginBottom: Spacing.two,
	},
	introBlock: {
		gap: Spacing.three,
		paddingBottom: Spacing.two,
	},
	sectionsWrapper: {
		gap: Spacing.five,
	},
	section: {
		gap: Spacing.two,
	},
	sectionTitle: {
		fontSize: 20,
		lineHeight: 26,
		fontWeight: '700',
	},
	sectionBody: {
		gap: Spacing.three,
	},
	paragraph: {
		lineHeight: 24,
	},
	emphasis: {
		lineHeight: 24,
		fontSize: 16,
	},
	list: {
		gap: Spacing.two,
		paddingLeft: Spacing.two,
	},
	bulletRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: Spacing.two,
	},
	bulletMark: {
		fontSize: 16,
		lineHeight: 24,
	},
	bulletText: {
		flex: 1,
		lineHeight: 22,
	},
	contactBlock: {
		gap: Spacing.one,
		paddingTop: Spacing.two,
	},
})

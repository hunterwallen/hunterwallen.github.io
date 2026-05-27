import { ScrollViewStyleReset } from 'expo-router/html'
import { type PropsWithChildren } from 'react'

const initialLoadingCss = `
#initial-loading {
	position: fixed;
	inset: 0;
	background: #070C1A;
	z-index: 2147483647;
	pointer-events: none;
}
`

export default function Root({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta
					name="description"
					content="Hunter Wallen — Full-Stack Software Engineer"
				/>
				<ScrollViewStyleReset />
				<style dangerouslySetInnerHTML={{ __html: initialLoadingCss }} />
			</head>
			<body>
				<div id="initial-loading" />
				{children}
			</body>
		</html>
	)
}

import { ImageSourcePropType } from 'react-native'

export type Project = {
	id: string
	title: string
	role: string
	context?: string
	contributions: string[]
	stack: string[]
	outcome?: string
	url: string
	urlLabel: string
	image: ImageSourcePropType
	iosUrl?: string
	androidUrl?: string
}

export type Tech = {
	id: string
	label: string
	image: ImageSourcePropType
}

export const projects: Project[] = [
	{
		id: 'villagemd',
		title: 'VillageMD',
		role: 'Lead React Native Engineer',
		context: 'Patient-facing app for VillageMD primary care.',
		contributions: [
			'Architected and led the iterative migration of two legacy iOS and Android apps onto a single modern React Native codebase without losing users on the other side.',
			'Designed complex third-party telehealth and EMR native SDK integrations via TurboModule bridges in Swift, Kotlin, Objective-C, and Java.',
			'Built and maintained a centralized shared feature library and themed component library used across both the VillageMD and CityMD apps, with state shared across host and library boundaries.',
			'Migrated CI to GitHub Actions and the deployment pipeline to Firebase, with AI-augmented optimizations to the native build flow.',
			'Led code reviews, pair programming, and mentoring for two five-person mobile teams.',
		],
		stack: [
			'React Native',
			'TypeScript',
			'Swift',
			'Kotlin',
			'Obj-C',
			'Java',
			'TurboModules',
			'GitHub Actions',
			'Firebase',
		],
		outcome: 'Build times cut from 45 minutes to under 15.',
		url: 'https://www.villagemd.com/',
		urlLabel: 'VillageMD.com',
		image: require('@/assets/images/portfolio/VMD.png'),
		androidUrl:
			'https://play.google.com/store/apps/details?id=com.villagemd.patx&hl=en_US',
		iosUrl: 'https://apps.apple.com/us/app/village-medical/id1514618127',
	},
	{
		id: 'scmd',
		title: 'CityMD',
		role: 'Lead React Native Engineer',
		context:
			'Patient-facing app for Summit Health primary care and CityMD urgent care.',
		contributions: [
			'Modernized a legacy React Native + Expo codebase onto the New Architecture with TurboModule-enabled native modules.',
			'Migrated CI to GitHub Actions and the release pipeline to Firebase distribution.',
			'Used AI-assisted workflows to redesign the native build flow.',
			'Shared a centralized feature library and themed component library with the VillageMD app, with state shared across host and library layers.',
		],
		stack: [
			'React Native',
			'Expo',
			'New Architecture',
			'TurboModules',
			'TypeScript',
			'GitHub Actions',
			'Firebase',
		],
		outcome: 'Build times cut in half via AI-augmented CI.',
		url: 'https://www.citymd.com/',
		urlLabel: 'CityMD.com',
		image: require('@/assets/images/portfolio/CityMD.png'),
		androidUrl:
			'https://play.google.com/store/apps/details?id=com.summithealth.mobile&hl=en_US',
		iosUrl: 'https://apps.apple.com/us/app/citymd-urgent-care/id1565837885',
	},
	{
		id: 'project-canary',
		title: 'Canary Recon',
		role: 'Senior React Native Engineer',
		context: 'Field tool for an IoT methane and ethane laser spectrometer.',
		contributions: [
			'Architected and built a highly technical React Native application integrating with a BLE-enabled IoT laser spectrometer for live emission readings.',
			'Optimized data processing to handle thousands of points per minute over BLE without UI lag.',
			'Built complex Mapbox, Turf.js, and Plotly integrations for performant large-scale field data visualization.',
		],
		stack: [
			'React Native',
			'TypeScript',
			'BLE',
			'Mapbox',
			'Turf.js',
			'Plotly',
			'Context API',
		],
		url: 'https://www.projectcanary.com/',
		urlLabel: 'ProjectCanary.com',
		image: require('@/assets/images/portfolio/EmissionResponder.png'),
		androidUrl:
			'https://play.google.com/store/apps/details?id=com.mobile_canary',
		iosUrl: 'https://apps.apple.com/us/app/recon-investigate/id6741432039',
	},
	{
		id: 'hello-alice',
		title: 'Hello Alice',
		role: 'React Native Engineer',
		context: 'Funding and resources for small business owners.',
		contributions: [
			'Architected and implemented digital authentication integration with a large financial institution, including OAuth 2.0 flows meeting bank-level security requirements.',
		],
		stack: [
			'React Native',
			'JavaScript',
			'GraphQL',
			'REST',
			'OAuth 2.0',
			'Context API',
		],
		url: 'https://helloalice.com/',
		urlLabel: 'HelloAlice.com',
		image: require('@/assets/images/portfolio/HelloAlice.png'),
	},
	{
		id: 'modivcare',
		title: 'Modivcare',
		role: 'Full-Stack Software Engineer',
		context: "Modivcare's flagship non-emergency medical transportation app.",
		contributions: [
			'Spearheaded a shared React and React Native component library used across multiple web and mobile applications in the Modivcare suite.',
			'Integrated multiple back-end APIs and microservices for high-volume usage and secure transmission of confidential patient data.',
		],
		stack: ['React Native', 'React', 'TypeScript', 'Redux', 'REST'],
		url: 'https://www.modivcare.com/',
		urlLabel: 'Modivcare.com',
		image: require('@/assets/images/portfolio/ModivcareApp.png'),
		androidUrl:
			'https://play.google.com/store/apps/details?id=com.modivcareriderapp',
		iosUrl: 'https://apps.apple.com/us/app/modivcare/id1560385849',
	},
	{
		id: 'jump-the-line',
		title: 'Jump The Line',
		role: 'Founding Mobile Engineer',
		context: 'Social engagement app for skipping lines at venues.',
		contributions: [
			'One of two founding mobile engineers; built the foundational architecture from zero.',
			'Built state management, location permissions, push notification utilities, and the API integration layer.',
			'Designed and shipped a buttery-smooth UI that made user interactions feel seamless.',
		],
		stack: ['React Native', 'JavaScript', 'Push Notifications', 'Geolocation'],
		url: 'https://gojumptheline.io/',
		urlLabel: 'GoJumpTheLine.io',
		image: require('@/assets/images/portfolio/JumpTheLine.png'),
		androidUrl:
			'https://play.google.com/store/apps/details?id=com.jumptheline.app',
		iosUrl: 'https://apps.apple.com/us/app/bookt/id992163837',
	},
]

export const featuredTech: Tech = {
	id: 'react-native',
	label: 'React Native',
	image: require('@/assets/images/portfolio/reactnative.png'),
}

export const techStack: Tech[] = [
	{
		id: 'typescript',
		label: 'TypeScript',
		image: require('@/assets/images/portfolio/typescript.png'),
	},
	{
		id: 'javascript',
		label: 'JavaScript',
		image: require('@/assets/images/portfolio/javascript.png'),
	},
	{
		id: 'react',
		label: 'React',
		image: require('@/assets/images/portfolio/react.png'),
	},
	{
		id: 'redux',
		label: 'Redux',
		image: require('@/assets/images/portfolio/redux.png'),
	},
	{
		id: 'expo',
		label: 'Expo',
		image: require('@/assets/images/portfolio/expo.png'),
	},
	{
		id: 'node',
		label: 'Node.js',
		image: require('@/assets/images/portfolio/node.png'),
	},
	{
		id: 'express',
		label: 'Express',
		image: require('@/assets/images/portfolio/express.png'),
	},
	{
		id: 'python',
		label: 'Python',
		image: require('@/assets/images/portfolio/python.png'),
	},
	{
		id: 'django',
		label: 'Django',
		image: require('@/assets/images/portfolio/django.png'),
	},
	{
		id: 'rails',
		label: 'Rails',
		image: require('@/assets/images/portfolio/rails.png'),
	},
	{
		id: 'postgres',
		label: 'PostgreSQL',
		image: require('@/assets/images/portfolio/postgres.png'),
	},
	{
		id: 'mongo',
		label: 'MongoDB',
		image: require('@/assets/images/portfolio/mongodb.png'),
	},
	{
		id: 'mysql',
		label: 'MySQL',
		image: require('@/assets/images/portfolio/mysql.png'),
	},
	{
		id: 'firebase',
		label: 'Firebase',
		image: require('@/assets/images/portfolio/firebase.png'),
	},
	{
		id: 'aws',
		label: 'AWS',
		image: require('@/assets/images/portfolio/aws.png'),
	},
	{
		id: 'claude',
		label: 'Claude',
		image: require('@/assets/images/portfolio/claude.png'),
	},
	{
		id: 'codex',
		label: 'Codex',
		image: require('@/assets/images/portfolio/codex.png'),
	},
]

export type SocialLink = {
	id: string
	label: string
	url: string
	image: ImageSourcePropType
}

export const socials: SocialLink[] = [
	{
		id: 'email',
		label: 'Email',
		url: 'mailto:hunterwallen67@gmail.com',
		image: require('@/assets/images/portfolio/gmail.png'),
	},
	{
		id: 'github',
		label: 'GitHub',
		url: 'https://github.com/hunterwallen',
		image: require('@/assets/images/portfolio/github.png'),
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/hunter-wallen',
		image: require('@/assets/images/portfolio/linkedin.png'),
	},
]

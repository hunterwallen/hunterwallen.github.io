import { ImageSourcePropType } from 'react-native'

export type Project = {
	id: string
	title: string
	description: string
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
		description:
			'The patient-facing mobile app for VillageMD primary care — scheduling, messaging, telehealth visits, records, and billing in one cross-platform React Native codebase.',
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
		description:
			'The patient-facing mobile app for Summit Health primary care and CityMD urgent care — scheduling, messaging, telehealth visits, records, and billing in one cross-platform React Native codebase.',
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
		description:
			'React Native application built with TypeScript, Context, Mapbox, Plotly, and Turf.js. Integrates via BLE with an IoT methane measurement sensor to allow for complex data management, modeling, and visualization.',
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
		description:
			'React Native application built with JavaScript, using the Context API for state management and integrating with GraphQL as well as REST architecture. Integrates OAuth 2.0 authentication for bank-level security. Hello Alice provides solutions and funding for small business owners with a focus on the new majority.',
		url: 'https://helloalice.com/',
		urlLabel: 'HelloAlice.com',
		image: require('@/assets/images/portfolio/HelloAlice.png'),
	},
	{
		id: 'modivcare',
		title: 'Modivcare',
		description:
			"React Native enterprise application built in TypeScript. Integrates numerous back-end APIs and microservices to support high-volume usage and secure transmission of confidential data. Utilizes Redux for state management. Modivcare's flagship non-emergency medical transportation application.",
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
		description:
			'React Native application built in JavaScript. Integrates multiple back-end APIs and third-party libraries to support consistent and reliable service. JumpTheLine is at the forefront of improving social engagements. Need to JumpTheLine and save time? We got you.',
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

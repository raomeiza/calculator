import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as MuiLogo from './svg/miu.svg'
import * as ReactLogo from './svg/logo.svg'
import * as EmotionLogo from './svg/emotion.png'
import * as TypescriptLogo from './svg/Typescript_logo_2020.svg.png'
import * as ReactRouterLogo from './svg/react-router-dom.jpg'
import Slides, { IItem } from './slider';


const items: IItem[] = [
	{
	name: 'React',
	image: ReactLogo,
	description: 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
	url: 'https://reactjs.org/',
	},
	{
	name: 'MUI',
	image: MuiLogo,
	description: 'MUI (formerly Material-UI) is an open-source project that features React components that implement Google\'s Material Design. MUI is a lightweight library that allows developers to add Google\'s Material Design look and feel to their websites. MUI was created by Olav S Thoresen and is maintained by a community of contributors.',
	url: 'https://mui.com/',
	},
	{
	name: 'TypeScript',
	image: TypescriptLogo,
	description: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.',
	url: 'https://www.typescriptlang.org/',
	},
	{
	name: 'Emotion',
	image: EmotionLogo,
	description: 'Emotion is a library designed for writing CSS styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities.',
	url: 'https://emotion.sh/docs/introduction',
	},
	{
	name: 'React Router',
	image: ReactRouterLogo,
	description: 'React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering.',
	url: 'https://reactrouter.com/',
	}
]


export default function About(props: { id: string }) {
	return (
		<Box
			sx={{
				minHeight: '60vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',

			}}
			id={props.id}
		>
			<Typography variant="h2" component="div" gutterBottom>
				About
			</Typography>
			<Typography variant="h5" component="div" gutterBottom fontFamily={'monospace'} padding={2}>
				This landing page was designed using the following technologies:
			</Typography>
			<Box sx={{ width: { xs: '100%', sm: '80%', md: '50%', padding: 2 }, size: '200px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			flexWrap: 'wrap',
			overflow: 'hidden',
			gap: 2,
		}} >
				<Slides items={items}/>
			</Box>
		</Box>
	)
}
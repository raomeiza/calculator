import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Divider, IconButton, TextField, Typography, Slide } from '@mui/material';
import { UserContext } from '../context/userContext';
import { ArrowDown, History } from './svg/icons';
import HistoryPane from './HistoryPane';
import Login from './login';

export default function SlideContainer(props: React.ComponentProps<any>) {
    const { children, open, setOpen } = props;

	const { user, login } = React.useContext(UserContext);
	const [isRegistered, setIsRegistered] = React.useState(true);
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [repeatPassword, setRepeatPassword] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState('');




	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		let url;
		let data: { email: string; password: string; name?: string; repeatPassword?: string };
		event.preventDefault();
		if (isRegistered) {
			url = 'http://localhost:5000/user/login';
			data = { email, password };
		} else {
			data = { name, email, password, repeatPassword };
			url = 'http://localhost:5000/user/register';
		}
		// make simple validation
		if (!email || !password) {
			setErrorMessage('Please fill in all fields');
			return;
		}
		if (!isRegistered && password !== repeatPassword) {
			setErrorMessage('Passwords do not match');
			return;
		}
		setIsLoading(true);
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data.success) { throw data }
				const { user, token } = data.data;
					setIsLoading(false);
					login(user.email, token);
			})
			.catch((err) => {
				setIsLoading(false);
				setErrorMessage(err.message);
			});
	};

	return (
		<Box
			sx={{ backgroundColor: open ? 'white' : 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', p: 2, border: '1px solid grey', width: '100%', height: open ? '520px' : '0px', transition: 'height 0.5s ease-in-out' }}
		>
			<Slide
				in={open}
				direction="down"
			>
                {children}
			</Slide>
			<IconButton onClick={() => setOpen(!open)}
				sx={{
					// if open, rotate this button
					transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
					backgroundColor: open ? 'primary.main' : 'secondary.main',
				}} >
				
				{
					user ? <History /> : <ArrowDown />
				}
				
			</IconButton>
		</Box>
	);
}
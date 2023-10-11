import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Divider, IconButton, TextField, Typography, Slide } from '@mui/material';
import { UserContext } from '../context/userContext';
import { ArrowDown, History } from './svg/icons';
import SlideContainer from './SlideContainer';
import { apiRootUrl } from '../config';
export default function Login(props: any) {
	const { open, setOpen } = props;
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
			url = `${apiRootUrl}/user/register`
			data = { email, password };
		} else {
			data = { name, email, password, repeatPassword };
			url = `${apiRootUrl}/user/login`
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
		<SlideContainer open={open} setOpen={setOpen}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 2,
						width: '100%',
						height: open ? '480px' : 0,
					}}
					component={'form'}
			onSubmit={handleSubmit}
				>
					<Typography variant="h5" >{isRegistered ? 'Login' : 'Register'}</Typography>
					<TextField
						label="Email"
						variant="outlined"
						fullWidth
						type="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
					/>
					{!isRegistered && (
						<TextField
							label="Name"
							variant="outlined"
							fullWidth
							type="text"
							value={name}
							onChange={(event) => setName(event.target.value)}
							required
						/>
					)}
					<TextField
						label="Password"
						variant="outlined"
						fullWidth
						type="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						required
					/>

					{!isRegistered && (
						<TextField
							label="Confirm Password"
							variant="outlined"
							fullWidth
							type="password"
							value={repeatPassword}
							onChange={(event) => setRepeatPassword(event.target.value)}
							required
						/>
					)}
					{errorMessage && (
						<Typography variant="body2" sx={{ color: 'red', mt: 2 }}>
							{errorMessage}
						</Typography>
					)}
					<Button disabled={isLoading} type="submit" variant="contained" sx={{ mt: 2 }}>
						{isRegistered ? 'Login' : 'Register'}
					</Button>
					<Divider sx={{ my: 2, width: '100%' }} />
					<Typography variant="body2">
						{isRegistered ? "Don't have an account?" : 'Already have an account?'}
						<Button sx={{ ml: 1 }} onClick={() => setIsRegistered(!isRegistered)}>
							{isRegistered ? 'Register' : 'Login'}
						</Button>
					</Typography>
				</Box>
		</SlideContainer>
	);
}
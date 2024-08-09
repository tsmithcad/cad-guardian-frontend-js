import React from "react";
import {
	Container,
	TextField,
	Typography,
	Button,
	Link,
	Box,
} from "@mui/material";

const Login = () => {
	return (
			<Container component="main" maxWidth="xs">
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						mt: 8,
						p: 3,
						boxShadow: 3,
						borderRadius: 2,
						bgcolor: "background.paper",
					}}>
					<Typography
						variant="h6"
						component="div"
						sx={{ textTransform: "uppercase", mb: 2 }}>
						Login
					</Typography>
					<Typography variant="h4" gutterBottom>
						Welcome back
					</Typography>
					<Typography variant="body1" color="textSecondary">
						Login to manage your account.
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<Typography variant="body2" sx={{ mt: 2 }}>
							Enter your email
						</Typography>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<Typography variant="body2" sx={{ mt: 2 }}>
							Enter your password
						</Typography>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Box
							sx={{
								display: "flex",
								justifyContent: "flex-end",
								alignItems: "center",
								mt: 2,
							}}>
							<Link href="#" variant="body2">
								Forgot your password?
							</Link>
						</Box>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}>
							Login
						</Button>
						<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
							<Typography variant="body2">
								Don’t have an account yet? <Link href="#">Sign up here.</Link>
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
	);
};

export default Login;

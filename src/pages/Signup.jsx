// src/components/Signup.jsx
import React from "react";
import {
	Container,
	TextField,
	Typography,
	Button,
	Link,
	Box,
} from "@mui/material";

const Signup = () => {
	return (
			<Container component="main" maxWidth="s">
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
						Signup
					</Typography>
					<Typography variant="h5" gutterBottom>
						Create an account
					</Typography>
					<Typography variant="body1" color="textSecondary">
						Fill out the form to get started.
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="firstName"
								label="First name"
								name="firstName"
								autoComplete="given-name"
								autoFocus
								sx={{ mr: 1 }}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="lastName"
								label="Last name"
								name="lastName"
								autoComplete="family-name"
								sx={{ ml: 1 }}
							/>
						</Box>
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
							autoComplete="new-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}>
							Sign up
						</Button>
						<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
							<Typography variant="body2">
								Already have an account? <Link href="#">Login</Link>.
							</Typography>
						</Box>
						<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
							<Typography variant="body2">
								By clicking "Sign up" button you agree with our{" "}
								<Link href="#">company terms and conditions</Link>.
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
	);
};

export default Signup;

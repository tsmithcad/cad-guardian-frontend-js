// src/components/Recover.jsx
import React from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Recover = () => {
	return (
		<>
			<Helmet>
				<title>Recover Account - CADGuardian</title>
				<meta
					name="description"
					content="Forgot your CADGuardian account password? Use our account recovery tool to reset your password and regain access to your AI-powered CAD tools."
				/>
			</Helmet>
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
						variant="h1"
						component="div"
						sx={{ textTransform: "uppercase", mb: 2 }}>
						Recover Account
					</Typography>
					<Typography variant="h2" gutterBottom>
						Forgot password?
					</Typography>
					<Typography variant="body1" color="textSecondary">
						Enter your email address to recover.
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
						<Box
							sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
							<Button variant="outlined" href="#" sx={{ mr: 2 }}>
								Back to login
							</Button>
							<Button type="submit" variant="contained" color="primary">
								Send reset link
							</Button>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Recover;

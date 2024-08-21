// src/components/Recover.jsx
import React from "react";
import {
	Container,
	TextField,
	Typography,
	Button,
	Box,
} from "@mui/material";

const Recover = () => {
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
						Recover Account
					</Typography>
					<Typography variant="h5" gutterBottom>
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
	);
};

export default Recover;

// src/components/Pricing.jsx
import React from "react";
import {
	Container,
	Typography,
	Button,
	Grid,
	Box,
	Card,
	CardContent,
	CardActions,
	ButtonGroup,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { usePricing } from "../../contexts/PricingContext";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";

const Pricing = () => {
	const { billingPeriod, setBillingPeriod, pricingPlans } = usePricing();

	const handleBillingPeriodChange = (period) => {
		setBillingPeriod(period);
	};

	const theme = useTheme();

	return (
		<>
			<Helmet>
				<title>Pricing - CADGuardian</title>
				<meta
					name="description"
					content="Explore CADGuardian's flexible pricing plans for individuals, teams, and enterprises. Find a plan that fits your needs and start automating your CAD workflows today."
				/>
			</Helmet>
			<Container>
				<Box
					sx={{
						mt: 8,
						padding: 4,
						textAlign: "center",
						borderRadius: 4,
						boxShadow: 3,
					}}>
					<Typography variant="h5" gutterBottom>
						Pricing
					</Typography>
					<Typography variant="body1" gutterBottom>
						We are founded by a leading academic and researcher in the field of
						Industrial Systems Engineering. For entrepreneurs, startups and
						freelancers. If you didn’t find what you needed, these could help!
					</Typography>
					<ButtonGroup sx={{ mt: 2 }}>
						<Button
							variant={billingPeriod === "annual" ? "contained" : "outlined"}
							onClick={() => handleBillingPeriodChange("annual")}>
							Annual
						</Button>
						<Button
							variant={billingPeriod === "monthly" ? "contained" : "outlined"}
							onClick={() => handleBillingPeriodChange("monthly")}>
							Monthly
						</Button>
					</ButtonGroup>
				</Box>
				<Box
					sx={{
						padding: 4,
						mt: 2,
					}}>
					<Grid container spacing={2} justifyContent="center">
						{pricingPlans.map((plan, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										height: "100%",
									}}>
									<CardContent>
										<Typography variant="h5" component="div">
											{plan.plan}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											sx={{ marginTop: 1 }}>
											{plan.description}
										</Typography>
										<Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
											{plan.price}
										</Typography>
										<Box sx={{ mt: 2 }}>
											{plan.features.map((feature, idx) => (
												<Box
													key={idx}
													sx={{ display: "flex", alignItems: "center", mt: 1 }}>
													<CheckCircleIcon
														sx={{
															color: theme.palette.primary,
															marginRight: 1,
														}}
													/>
													<Typography
														variant="body2"
														component="p"
														sx={{ ml: 1 }}>
														{feature}
													</Typography>
												</Box>
											))}
										</Box>
									</CardContent>
									<CardActions sx={{ mt: "auto" }}>
										<Button size="large" variant="contained" fullWidth>
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Pricing;

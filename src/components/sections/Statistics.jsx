import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Container, Card } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import statisticsData from "../../data/statisticsData.json";
import { useTheme } from "@mui/material/styles";

// Icon mapping to dynamically render icons
const iconMap = {
	SchoolIcon: SchoolIcon,
	GroupIcon: GroupIcon,
	PersonIcon: PersonIcon,
	BookIcon: BookIcon,
};

const StatisticCard = ({ icon: Icon, count, title, description }) => {
	const theme = useTheme();

	return (
		<Grid item xs={12} sm={6} md={3}>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					height: "100%",
				}}>
				<Box
					sx={{
						padding: 2,
						textAlign: "center",
						boxShadow: 3,
					}}>
					<Icon sx={{ fontSize: 40, color: theme.palette.primary}} />
					<Typography variant="h5" sx={{ mt: 1 }}>
						{count}
					</Typography>
					<Typography variant="body1" sx={{ fontWeight: "bold" }}>
						{title}
					</Typography>
					<Typography
						sx={{ height: "100%" }}
						variant="body2"
						color="textSecondary">
						{description}
					</Typography>
				</Box>
			</Card>
		</Grid>
	);
};

const Statistics = () => {
	const [statistics, setStatistics] = useState([]);

	useEffect(() => {
		setStatistics(statisticsData);
	}, []);

	return (
		<Container>
			<Box
				sx={{
					padding: "40px 20px",
					textAlign: "center",
					mt: 8,
					boxShadow: 3,
					borderRadius: 2,
					bgcolor: "background.paper",
				}}>
				<Typography variant="h4" gutterBottom>
					Statistics
				</Typography>
				<Typography variant="body1" gutterBottom>
					The best way to learn is by using skills. That's why every class has a
					project that lets you practice and get feedback.
				</Typography>
				<Box sx={{ mt: 2, mb: 4 }}>
					<Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
						Book a tutor
					</Button>
					<Button variant="outlined" color="primary">
						Explore more
					</Button>
				</Box>
				<Grid container spacing={2} justifyContent="center">
					{statistics.map(({ muiIcon, count, title, description }, index) => {
						const IconComponent = iconMap[muiIcon];
						return (
							<StatisticCard
								key={index}
								icon={IconComponent}
								count={count}
								title={title}
								description={description}
							/>
						);
					})}
				</Grid>
			</Box>
		</Container>
	);
};

export default Statistics;

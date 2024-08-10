import React, { useState, useEffect } from "react";
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	TextField,
	Typography,
	Paper,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import targetMarketData from "../../data/targetMarketData.json";

const TargetMarket = () => {
	const [customers, setCustomers] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [order, setOrder] = useState("");
	const [orderBy, setOrderBy] = useState("");

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	useEffect(() => {
		setCustomers(targetMarketData);
	}, []);

	const handleRequestSort = (property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSearch = (event) => {
		setSearchQuery(event.target.value);
	};

	const filteredCustomers = customers.filter(
		(customer) =>
			customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			customer.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
			customer.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
			customer.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
			customer.financialValue.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const sortedCustomers = filteredCustomers.sort((a, b) => {
		if (order === "asc") {
			return a[orderBy] < b[orderBy] ? -1 : 1;
		} else {
			return a[orderBy] > b[orderBy] ? -1 : 1;
		}
	});

	return (
		<Box
			sx={{
				p: 3,
				marginTop: 8,
				boxShadow: 3,
				borderRadius: 2,
			}}>
			<Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
				Market
			</Typography>
			<Typography variant="body2" color="textSecondary" gutterBottom>
				A comprehensive market analysis highlights a significant opportunity
				within the manufacturing sector and related industries. By addressing
				specific customer needs and leveraging trends like digital
				transformation and AI, I intend to serve the largest international
				companies and government entities, providing substantial value and
				driving long-term growth.
			</Typography>
			<Box sx={{ mb: 3, marginTop: 4 }}>
				<TextField
					variant="outlined"
					fullWidth
					placeholder="Search customers..."
					onChange={handleSearch}
					value={searchQuery}
				/>
			</Box>
			{isMobile && (
				<Typography variant="caption" color="textSecondary" sx={{ marginBottom: 2 }}>
					Note: Information simplified for mobile view.
				</Typography>
			)}
			<TableContainer component={Paper} sx={{ height: 500 }}>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>
								<TableSortLabel
									active={orderBy === "name"}
									direction={orderBy === "name" ? order : "asc"}
									onClick={() => handleRequestSort("name")}>
									Name
								</TableSortLabel>
							</TableCell>
							<TableCell>
								<TableSortLabel
									active={orderBy === "purpose"}
									direction={orderBy === "purpose" ? order : "asc"}
									onClick={() => handleRequestSort("purpose")}>
									Purpose
								</TableSortLabel>
							</TableCell>
							{!isMobile && (
								<TableCell>
									<TableSortLabel
										active={orderBy === "category"}
										direction={orderBy === "category" ? order : "asc"}
										onClick={() => handleRequestSort("category")}>
										Category
									</TableSortLabel>
								</TableCell>
							)}
							{!isMobile && (
								<TableCell>
									<TableSortLabel
										active={orderBy === "industry"}
										direction={orderBy === "industry" ? order : "asc"}
										onClick={() => handleRequestSort("industry")}>
										Industry
									</TableSortLabel>
								</TableCell>
							)}
							<TableCell>
								<TableSortLabel>Value (2024)</TableSortLabel>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{sortedCustomers.map((customer, index) => (
							<TableRow key={index}>
								<TableCell>{customer.name}</TableCell>
								<TableCell>{customer.purpose}</TableCell>
								{!isMobile && <TableCell>{customer.category}</TableCell>}
								{!isMobile && <TableCell>{customer.industry}</TableCell>}
								<TableCell>{customer.financialValue}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default TargetMarket;

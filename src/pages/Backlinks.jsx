import React from "react";
import { Box, Typography, Container, Link, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";

const backlinks = {
	"CAD Design and Modeling": [
		{
			text: "Top CAD Blogs and Forums",
			description:
				"Explore the best CAD blogs and forums to stay updated with the latest trends, tips, and tutorials in CAD design and modeling.",
			href: "https://www.cadalyst.com/", // Cadalyst - A leading authority on CAD news and tutorials.
		},
		{
			text: "Leading CAD Software Providers",
			description:
				"Learn about the top CAD software providers and their cutting-edge tools that revolutionize the design process.",
			href: "https://www.autodesk.com/", // Autodesk - A leading provider of CAD software solutions like AutoCAD.
		},
	],
	"Artificial Intelligence in CAD": [
		{
			text: "AI and Machine Learning in Design",
			description:
				"Discover how AI and machine learning are transforming CAD design, improving efficiency and accuracy.",
			href: "https://blogs.nvidia.com/", // NVIDIA Blog - Covers AI and machine learning innovations, including in CAD.
		},
		{
			text: "AI-Powered CAD Automation Tools",
			description:
				"Explore AI-powered tools that automate the CAD workflow, saving time and reducing errors.",
			href: "https://www.amd.com/",
		},
	],
	"Technology and Innovation": [
		{
			text: "Latest Trends in Technology",
			description:
				"Stay informed about the latest trends and innovations in technology that impact the CAD industry.",
			href: "https://www.techcrunch.com/", // TechCrunch - Leading source for technology news and analysis.
		},
		{
			text: "Tech Conferences and Events",
			description:
				"Find out about upcoming tech conferences and events where CAD and AI advancements are discussed.",
			href: "https://conferences.oreilly.com/", // O'Reilly Conferences - Premier tech events including AI and CAD.
		},
	],
	"Educational Resources": [
		{
			text: "Online CAD Courses and Tutorials",
			description:
				"Access a wealth of online courses and tutorials to enhance your CAD skills and knowledge.",
			href: "https://www.coursera.org/courses?query=cad", // Coursera - Offers a variety of CAD courses and certifications.
		},
		{
			text: "Books and Publications on CAD and AI",
			description:
				"Explore books and publications that provide in-depth insights into CAD design and AI integration.",
			href: "https://www.oreilly.com/", // O'Reilly Media - Leading publisher of CAD and AI books.
		},
	],
};

const Backlinks = () => (
	<>
		<Helmet>
			<title>Backlinks and Resources - CADGuardian</title>
			<meta
				name="description"
				content="Explore our curated list of reputable CAD and AI-related resources. Access valuable links to blogs, tools, educational content, and more."
			/>
		</Helmet>
		<Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
			<Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
				Backlinks and Resources
			</Typography>

			<Typography variant="body1" gutterBottom>
				Discover a curated list of resources related to CAD, AI, and technology.
				These links are essential for anyone looking to deepen their knowledge,
				stay updated with industry trends, or find tools that complement
				CADGuardian's offerings. Partnering with reputable sites in these areas
				can significantly improve our authority and ranking.
			</Typography>

			<Grid container spacing={4} sx={{ mt: 4 }}>
				{Object.keys(backlinks).map((category, index) => (
					<Grid item xs={12} key={index}>
						<Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
							{category}
						</Typography>
						{backlinks[category].map((link, linkIndex) => (
							<Box sx={{ mb: 2 }} key={linkIndex}>
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									<Link
										href={link.href}
										color="primary"
										underline="hover"
										target="_blank"
										rel="noopener">
										{link.text}
									</Link>
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{link.description}
								</Typography>
							</Box>
						))}
					</Grid>
				))}
			</Grid>
		</Container>
	</>
);

export default Backlinks;

import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import statisticsData from "../../data/statisticsData.json";
import CardGrid from "../common/CardGrid";

// Icon mapping for Statistics component
const iconMap = {
  SchoolIcon: SchoolIcon,
  GroupIcon: GroupIcon,
  PersonIcon: PersonIcon,
  BookIcon: BookIcon,
};

const Statistics = () => (
  <CardGrid
    title="Statistics"
    subtitle="The best way to learn is by using skills. That's why every class has a project that lets you practice and get feedback."
    data={statisticsData}
    iconMap={iconMap}
  />
);

export default Statistics;

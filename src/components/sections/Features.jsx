import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ExploreIcon from "@mui/icons-material/Explore";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import featuresData from "../../data/featuresData.json";
import CardGrid from "../common/CardGrid";

// Icon mapping for Features component
const iconMap = {
  CameraAltIcon: CameraAltIcon,
  UploadFileIcon: UploadFileIcon,
  ExploreIcon: ExploreIcon,
  FindInPageIcon: FindInPageIcon,
};

const Features = () => (
  <CardGrid
    title="CAD Features"
    subtitle="Explore a wide range of features designed to enhance your workflow."
    data={featuresData}
    iconMap={iconMap}
  />
);

export default Features;

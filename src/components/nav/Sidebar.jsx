import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import sidebarLinks from '../../data/sidebarLinks.json';

const iconMap = {
  ReceiptIcon: <ReceiptIcon />,
  GroupIcon: <GroupIcon />,
  AttachMoneyIcon: <AttachMoneyIcon />,
  SwapHorizIcon: <SwapHorizIcon />,
  CreditCardIcon: <CreditCardIcon />,
  DescriptionIcon: <DescriptionIcon />,
  AssessmentIcon: <AssessmentIcon />,
  NotificationsIcon: <NotificationsIcon />,
  SettingsIcon: <SettingsIcon />,
  BuildIcon: <BuildIcon />,
  SecurityIcon: <SecurityIcon />,
  SupportIcon: <SupportIcon />,
  AnnouncementIcon: <AnnouncementIcon />,
};

const Sidebar = () => {
  return (
    <div>
      {sidebarLinks.map((category, index) => (
        <div key={index}>
          <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 2, ml: 2 }}>
            {category.category}
          </Typography>
          <List>
            {category.items.map((item, idx) => (
              <ListItem button component={Link} to={item.path} key={idx}>
                <ListItemIcon>{iconMap[item.muiIcon]}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          {index < sidebarLinks.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

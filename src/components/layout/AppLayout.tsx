import * as React from "react";
import Box from "@mui/material/Box";
import CottageIcon from "@mui/icons-material/Cottage";
import CssBaseline from "@mui/material/CssBaseline";
import DeleteIcon from "@mui/icons-material/Delete";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

export interface menuItem {
  text: string;
  path: string;
  icon: React.ComponentType;
}

export default function AppLayout() {
  //携帯端末使用時の状態変数
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //ドロワー閉開用状態変数
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const MenuItems: menuItem[] = [
    { text: "Home", path: "/", icon: CottageIcon },
    { text: "Report", path: "/report", icon: EqualizerIcon },
    { text: "Garbage duty", path: "/garbage", icon: DeleteIcon },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: (theme) => theme.palette.grey[100],
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {/*ヘッダー*/}
      <Header
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        MenuItems={MenuItems}
      />
      {/*サイドバー*/}
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerClose={handleDrawerClose}
        MenuItems={MenuItems}
      />
      {/*メインコンテンツ*/}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

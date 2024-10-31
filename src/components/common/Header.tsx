import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { menuItem } from "../layout/AppLayout";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  handleDrawerToggle: () => void;
  drawerWidth: number;
  MenuItems: menuItem[];
}
declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}
const Header = ({
  handleDrawerToggle,
  drawerWidth,
  MenuItems,
}: HeaderProps) => {
  const [selectedItem, setSelectedItem] = React.useState<string>("");
  return (
    <AppBar
      position="fixed"
      color="inherit" // テーマの secondary 色に変更
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {selectedItem || "Title"}{" "}
        </Typography>

        {MenuItems.map((item, index) => (
          <NavLink
            key={item.text}
            to={item.path}
            style={({ isActive }) => {
              if (isActive) {
                // リンクがアクティブなら状態を更新
                setSelectedItem(item.text);
              }
              return {};
            }}
          ></NavLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

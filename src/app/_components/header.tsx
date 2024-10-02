"use client";

import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import {
  IconButton,
  Container,
  Breadcrumbs,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  // Menu button handling
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorMenuEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenuEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorMenuEl(null);
  };

  // User Account button menu handling
  const [anchorAccountMenuEl, setAnchorAccountMenuEl] =
    useState<null | HTMLElement>(null);
  const openAccountMenu = Boolean(anchorAccountMenuEl);

  const handleAccountMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorAccountMenuEl(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setAnchorAccountMenuEl(null);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "flex-end",
        alignItems: "center",
        padding: "5px 5px",
      }}
    >
      <IconButton onClick={handleMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorMenuEl}
        open={openMenu}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
      >
        <MenuItem>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/login">Login</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/dashboard/settings">Settings</Link>
        </MenuItem>
      </Menu>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link key={0} underline="hover" href="/">
          Home
        </Link>
        {pathNames.map((link, index) => {
          return (
            <Link key={index + 1} underline="hover" href={`/${link}`}>
              {link}
            </Link>
          );
        })}
      </Breadcrumbs>
      <IconButton onClick={handleAccountMenuClick}>
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorAccountMenuEl}
        open={openAccountMenu}
        onClose={handleAccountMenuClose}
        onClick={handleAccountMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
      >
        <MenuItem>
          <Link href="/accountSettings">Account Settings</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/api/auth/logout">Logout</Link>
        </MenuItem>
      </Menu>
    </Container>
  );
}

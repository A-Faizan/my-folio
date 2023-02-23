import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { items } from "@/utils/navItems";
import Link from "next/link";

function ResponsiveAppBar() {
  const [Navbar, setNavbar] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavbar(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavbar(null);
  };

  const router = useRouter();
  console.log(router.route);

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "transparent",
        // background:
        //   "linear-gradient(180.2deg, rgb(30, 33, 48) 6.8%, rgb(74, 98, 110) 131%)",
        // opacity: "0.6",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: "bolder",
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            FAM_
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            FAM_
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.to}
                onClick={handleCloseNavMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {/* {item.icon} */}
                <Typography px={1}>{item.title}</Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon
                sx={{
                  color: "black",
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={Navbar}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(Navbar)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {items.map((item) => (
                <MenuItem
                  key={item.id}
                  href={item.to}
                  onClick={handleCloseNavMenu}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  {/* {item.icon} */}
                  <Typography px={1}> {item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

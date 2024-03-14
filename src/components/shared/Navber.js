"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const navItems = [
  { route: "Home", pathname: "/" },
  { route: "Pages", pathname: "/pages" },
  { route: "Category", pathname: "/category" },
  { route: "News", pathname: "/news" },
  { route: "About", pathname: "/about" },
  { route: "Contact", pathname: "/contact" }
];

function Navber() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* logo */}
          <Image src={logo} width={100} height={100} alt="logo" />

          {/* menu */}
          <Box  className="w-full text-center" >
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button color="inherit">{item.route}</Button>
              </Link>
            ))}
          </Box>

          {/* icons */}
          <Box>
          <Stack direction="row" sx={{
            "& svg":{
              color: "white",
            }
          }}>
          <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navber;

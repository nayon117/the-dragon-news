import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
    const navItems = [
        { route: "Home", pathname: "/" },
        { route: "Pages", pathname: "/pages" },
        { route: "Category", pathname: "/category" },
        { route: "News", pathname: "/news" },
        { route: "About", pathname: "/about" },
        { route: "Contact", pathname: "/contact" }
      ];
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        {/* icons */}
        <Box className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
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
        </Box>

        {/* menu */}
        <Box  className="w-full text-center" >
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography color="gray" variant="body2" textAlign="center">
            &copy; 2024 Dragon News All Rights Reserved
          </Typography>
      </Container>
    </Box>
  );
};
export default Footer;

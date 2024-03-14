import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dragon News",
  description: "This is dragon news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber/>
        <Container className="min-h-screen">
          {children}
        </Container>
        <Footer/>
        </body>
    </html>
  );
}

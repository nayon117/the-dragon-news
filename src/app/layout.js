import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/Navber";

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
        {children}
        </body>
    </html>
  );
}

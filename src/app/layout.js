import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import LinkHeader from "@/components/LinkHeader";
import Search from "@/components/Search";
import Providers from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Created By Dimex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <LinkHeader />
          <Search />
          {/* {Navbar} */}

          {/* {Search Bar} */}

          {children}
        </Providers>
      </body>
    </html>
  );
}

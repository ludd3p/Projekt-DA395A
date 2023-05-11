import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./context/context";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projektgrupp 5",
  description: "Gruppinlämning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <GlobalContextProvider>
          <Navbar />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}

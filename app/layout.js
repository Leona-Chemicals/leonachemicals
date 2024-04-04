import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leona Chemicals",
  description: "We take care of your requirements for raw materials, fine chemicals & intermediates for Pharma, Agro, Dyestuff, Paint, Aromatic & Cosmetic Industries. We handle the entire hassle for your procurement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

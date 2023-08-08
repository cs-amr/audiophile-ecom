import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "../components/Navbar";
export const metadata: Metadata = {
  title: "Dasboard",
  description: "Manage your website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

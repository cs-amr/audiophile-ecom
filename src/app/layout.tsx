import { Provider } from "react-redux";
import "./index.css";
import type { Metadata } from "next";
import { store } from "./store";

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Provider store={store}> */}
      <body>{children}</body>
      {/* </Provider> */}
    </html>
  );
}

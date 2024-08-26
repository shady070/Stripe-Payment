import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Payment",
  description: "Created by Hassan Malik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

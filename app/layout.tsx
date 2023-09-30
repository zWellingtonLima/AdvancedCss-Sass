import "@/app/globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["100", "300", "400", '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natours",
  description: "Natours landing page | Exciting tours for adventurous people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}

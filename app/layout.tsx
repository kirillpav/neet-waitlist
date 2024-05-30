import type { Metadata } from "next";
import { Lato, PT_Serif_Caption } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const myFont = localFont({ src: "../public/fonts/Excon-Regular.otf" });
const nomerok = localFont({ src: "../public/fonts/SK-Nomerok.ttf" });

export const metadata: Metadata = {
	title: "Neet Waitlist",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={myFont.className}>{children}</body>
		</html>
	);
}

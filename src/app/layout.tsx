import { ReactNode } from "react";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Modal from "@/components/ui/Modal";

export const metadata: Metadata = {
	title: "ספאר",
	description: "SPAR IL",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="he">
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
				<Modal />
			</body>
		</html>
	);
}

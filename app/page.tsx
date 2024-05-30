"use client";

import React from "react";
import localFont from "next/font/local";
import styles from "../public/styles/Landing.module.css";
import Image from "next/image";

import Form from "@/components/Form";

export default function Home() {
	return (
		<div>
			<h1 className={`${styles.title} text-7xl text-center tracking-3`}>
				NEET
			</h1>

			<div className={styles.container}>
				<Image
					src="/imgs/map-base-1.png"
					className={styles.world__image}
					width={500}
					height={500}
					alt="globe"
				/>
				<p className={styles.main__text}>
					Right People <br></br> Right Place <br></br>Right Time
				</p>
				<Form />
			</div>
		</div>
	);
}

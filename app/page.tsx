"use client";

import React from "react";
import localFont from "next/font/local";
import styles from "../public/styles/Landing.module.css";
import Image from "next/image";
import ThreeScene from "@/components/ThreeScene";

export default function Home() {
	return (
		<div>
			<h1 className={`${styles.title} text-7xl text-center tracking-3`}>
				NEET
			</h1>

			<div className={styles.container}>
				<Image
					src="/imgs/globeart.png"
					className={styles.world__image}
					width={500}
					height={500}
					alt="globe"
				/>
				{/* <ThreeScene /> */}
				<p className={styles.main__text}>
					Right People <br></br> Right Place <br></br>Right Time
				</p>
			</div>

			<form className={styles.email__form}>
				<div className={styles.email__container}>
					<input
						type="email"
						className={styles.email__input}
						placeholder="your email"
					></input>
					<button type="submit" className={styles.email__btn}>
						JOIN WAITLIST
					</button>
				</div>
			</form>
		</div>
	);
}

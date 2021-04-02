import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div>
            <Head>
                <title>BrainTax</title>
            </Head>
            <h1>Home</h1>
        </div>
    );
}

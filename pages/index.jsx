import Head from "next/head";
import { useEffect } from "react";
import { ArticleList } from "../components/ArticleList";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import styles from "../styles/Home.module.scss";
import { Services } from "../components/Services";

export default function Home({articles}) {
    return (
        <div>
            <Head>
                <title>BrainTax</title>
            </Head>
            <Hero/>
            <AboutUs/>
            <Services />
            <ArticleList articles={articles} />
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
    const articles = await res.json();

    return {
        props:{
            articles
        }
    }
}

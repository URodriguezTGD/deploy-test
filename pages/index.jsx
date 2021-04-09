import Head from "next/head";
import { useEffect } from "react";
import { ArticleList } from "../components/ArticleList";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import styles from "../styles/Home.module.scss";
import { Services } from "../components/Services";
import groq from 'groq';
import client from "../client";

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
    const query = groq`*[_type == "post"][]{
        "id":_id,
        title,
        "textContent":body[_type match 'block' && children[0].text != ''].children[].text,
        "slug":slug.current
    }`;
    const articles = await client.fetch(query);
    return {
        props: {
            articles,
        },
    };
}

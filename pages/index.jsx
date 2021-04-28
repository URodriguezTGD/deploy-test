import Head from "next/head";
import { useEffect } from "react";
import { ArticleList } from "../components/ArticleList";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import styles from "../styles/Home.module.scss";
import { Services } from "../components/Services";
import groq from 'groq';
import client from "../client";
import { useRouter } from "next/router";
import es from '../locales/ArticleList/ArticleList_es';
import en from '../locales/ArticleList/ArticleList_en';

export default function Home({articles}) {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;

    useEffect(() => {
                return () => {
            
        }
    }, [locale])

    return (
        <div>
            <Head>
                <title>BrainTax</title>
            </Head>
            <Hero/>
            <AboutUs/>
            <Services />
            <ArticleList articles={articles.filter(x => x.language === (locale === 'es' ? 'es_MX' : 'en_US'))} />
        </div>
    );
}

export const getStaticProps = async () => {
    const query = groq`*[_type == "post" && !(_id in path("drafts.**"))][0..9]{
        "id":_id,
        title,
        "image":mainImage,
        "textContent":body[_type match 'block' && children[0].text != ''].children[].text,
        "slug":slug.current,
        "language":__i18n_lang,
    }`;
    const articles = await client.fetch(query);
    return {
        props: {
            articles,
        },
        revalidate: 30
    };
}

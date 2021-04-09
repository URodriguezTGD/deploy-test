import Head from "next/head";
import React from "react";
import { ArticleGrid } from "../components/ArticleGrid";
import { TitleSection } from "../components/TitleSection";

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/Blog/Blog_es';
import en from '../locales/Blog/Blog_en';

export default function blog({ articles }) {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div>
            <Head>
                <title>{t.head}</title>
            </Head>
            <TitleSection
                title={t.title}
                desc={t.desc}
            />
            <ArticleGrid articles={articles} />
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=24`
    );
    const articles = await res.json();

    return {
        props: {
            articles,
        },
    };
};

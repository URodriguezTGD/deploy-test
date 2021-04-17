import Head from "next/head";
import { ArticleGrid } from "../components/ArticleGrid";
import { TitleSection } from "../components/TitleSection";
import groq from "groq";
import client from "../client";

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
            <ArticleGrid articles={articles.filter(x => x.language === (locale === 'es' ? 'es_MX' : 'en_US'))} />
        </div>
    );
}

export const getStaticProps = async (context) => {
    const query = groq`*[_type == "post" && !(_id in path("drafts.**"))]{
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
    };
};
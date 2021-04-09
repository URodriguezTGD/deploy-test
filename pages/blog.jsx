import Head from "next/head";
import { ArticleGrid } from "../components/ArticleGrid";
import { TitleSection } from "../components/TitleSection";
import groq from "groq";
import client from "../client";

export default function blog({ articles }) {
    return (
        <div>
            <Head>
                <title>Blog | BrainTax</title>
            </Head>
            <TitleSection
                title="Blog"
                desc="Te mantendremos al día con las noticias más relevantes del área legal."
            />
            <ArticleGrid articles={articles} />
        </div>
    );
}

export const getStaticProps = async (context) => {
    const query = groq`*[_type == "post"]{
        "id":_id,
        title,
        "textContent":body[_type match 'block' && children[0].text != ''].children[].text,
        "slug":slug.current,
    }`;
    const articles = await client.fetch(query);
    return {
        props: {
            articles,
        },
    };
};
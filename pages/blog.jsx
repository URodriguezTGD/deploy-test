import Head from "next/head";
import { ArticleGrid } from "../components/ArticleGrid";
import { TitleSection } from "../components/TitleSection";

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

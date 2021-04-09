import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import client from "../../../client";
import groq from "groq";

const article = ({ article }) => {
    return (
        <>
            {article.map(a => {
                return(
                    <div key={a.id}>
                        <h1>{a.title}</h1>
                        <div>
                            {
                                a.textContent !== null
                                ?
                                a.textContent.map(t => <p>{t}</p>)
                                :
                                'Este artículo aún no tiene contenido.'
                            }
                        </div>
                    </div>
                )
            })}
            <Link href="/">Go back</Link>
        </>
    );
};

export const getStaticProps = async (context) => {
    const query = groq `*[_type == "post" && slug.current == $slug]{
        ...,
        "id":_id,
        title,
        "textContent":body[_type match 'block' && children[0].text != ''].children[].text,
        "slug":slug.current,
    }`;
    const params = {slug:context.params.id}
    let article =  await client.fetch(query, params);
    return {
        props:{
            article
        }
    }
    };


export const getStaticPaths = async () => {
    const query = groq`*[_type == "post"][]{
        "slug":slug.current
    }`;
    const articles = await client.fetch(query);
    const slugs = articles.map((article) => article.slug);
    const paths = slugs.map((slug) => ({ params: { id: slug } }));
    return {
        paths,
        fallback: false,
    };
};

export default article;
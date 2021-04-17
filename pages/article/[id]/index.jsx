import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import client from "../../../client";
import groq from "groq";
import imageBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import PostStyles from '../../../styles/Post.module.css';
import { ArticleList } from "../../../components/ArticleList";
import { format } from 'date-fns';

const translateMonth = (month) => {
    switch(month) {
        case "1":
            return "Enero";
        case "2":
            return "Febrero";
        case "3":
            return "Marzo";
        case "4":
            return "Abril";
        case "5":
            return "Mayo";
        case "6":
            return "Junio";
        case "7":
            return "Julio";
        case "8":
            return "Agosto";
        case "9":
            return "Septiembre";
        case "10":
            return "Octubre";
        case "11":
            return "Noviembre";
        case "12":
            return "Diciembre";
    }
}

const article = ({ article, articles }) => {
    const router = useRouter();
    const { locale } = router;
    const [postImageUrl, setPostImageUrl] = useState('');
    const [authorImgUrl, setAuthorImgUrl] = useState('');
    useEffect(() => {
        const imgBuilder = imageBuilder({
            projectId:process.env.NEXT_PUBLIC_PROJECT_ID,
            dataset: process.env.NEXT_PUBLIC_DATASET,
        });
        setPostImageUrl(imgBuilder.image(article.image))
    }, [article.image]);

    useEffect(() => {
        const imgBuilderg = imageBuilder({
            projectId:process.env.NEXT_PUBLIC_PROJECT_ID,
            dataset: process.env.NEXT_PUBLIC_DATASET,
        });
        setAuthorImgUrl(imgBuilderg.image(article.avatar))
    }, [article.avatar]);
    useEffect(() => {
        
        return () => {
            
        }
    }, [])
    
    
    
    return (
        <>
            <div key={article.id} className={`${PostStyles.container}`}>
                {postImageUrl && <img src={postImageUrl} className={PostStyles.mainImage}/> }
                <h1>{article.title}</h1>
                <div className={`${PostStyles.published} section`}>
                    {authorImgUrl && <img src={authorImgUrl} className={`${PostStyles.avatar}`} />}
                    <div>
                        <p>Publicado el {format(new Date(article.createdAt), 'dd')} de { translateMonth(format(new Date(article.createdAt), 'M')) } del {format(new Date(article.createdAt), 'yyyy')}</p>
                        {article.author && <span>por {article.author}</span>}
                    </div>
                </div>
                <div className={PostStyles.body}>
                    <BlockContent blocks={article.body} />
                </div>
            </div>
                <ArticleList articles={articles.filter(x => x.language === (locale === 'es' ? 'es_MX' : 'en_US'))} />
            <Link href="/">Go back</Link>
        </>
    );
};

export const getStaticProps = async (context) => {
    const query = groq `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug]{
        ...,
        "id":_id,
        title,
        body,
        "image":mainImage,
        "textContent":body[_type match 'block' && children[0].text != ''].children[].text,
        "slug":slug.current,
        "avatar":author->image,
        "author":author->name,
        "createdAt":_createdAt,
    }`;
    const params = {slug:context.params.id}
    let article =  await client.fetch(query, params);

    const sliderArticles = groq`*[_type == "post" && !(_id in path("drafts.**")) && slug.current != $slug][]{
        "id":_id,
        title,
        "image":mainImage,
        "textContent":body[_type match 'block' && children[0].text != ''].children[].text,
        "slug":slug.current,
        "language":__i18n_lang,
    }`;
    const articles = await client.fetch(sliderArticles, params);

    // console.log("🚀 ~ file: index.jsx ~ line 43 ~ getStaticProps ~ article", article)
    
    return {
        props:{
            article:article[0],
            articles,
        }
    }
    };


export const getStaticPaths = async (c) => {
    console.log(`object`, c)
    const query = groq`*[_type == "post" && !(_id in path("drafts.**"))]{
        "slug":slug.current,
        "language":__i18n_lang,
    }`;
    const articles = await client.fetch(query);
    const slugs = articles.map((article) => ({slug:article.slug, language:article.language}));
    const paths = slugs.map((slug) => ({ params: { id: slug.slug }, locale: slug.language === 'en_US' ? 'en' : 'es'}));
    return {
        paths,
        fallback: false,
    };
};

export default article;
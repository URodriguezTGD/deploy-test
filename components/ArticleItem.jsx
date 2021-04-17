import React, { useEffect, useState } from 'react'
import articleStyle from '../styles/Article.module.css'
import Link from 'next/link'
// import Image from 'next/image'
import ImageBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { useRouter } from 'next/router';
import es from '../locales/ArticleList/ArticleList_es';
import en from '../locales/ArticleList/ArticleList_en';

export const ArticleItem = ({article}) => {
    const router = useRouter();
    const {locale} = router;
    console.log("🚀 ~ file: ArticleItem.jsx ~ line 14 ~ ArticleItem ~ locale", locale)
    const t = locale === 'es' ? es : en;
    
    const [postImageUrl, setPostImageUrl] = useState('');
    useEffect(() => {
        const imgBuilder = ImageBuilder({
            projectId:process.env.NEXT_PUBLIC_PROJECT_ID,
            dataset: process.env.NEXT_PUBLIC_DATASET,
        });
        setPostImageUrl(imgBuilder.image(article.image))
    }, [article.image]);
    return (
        <Link href={`/article/[id]`} as={`/article/${article.slug}`}>
            <div className={articleStyle.card}>
                {postImageUrl && <img src={postImageUrl} className={articleStyle.cardImage} /> }
                {/* <Image 
                    src='/images/bt-services.png'
                    alt="Picture of the author"
                    width={295}
                    height={213}
                    className={articleStyle.img}
                /> */}
                <div className={articleStyle.cardContent}>
                    <h3>{article.title}</h3>
                    <p>{article.textContent}</p>
                    <span className='right'>Leer mas <span className='mdi mdi-arrow-right'></span></span>
                </div>
            </div>
        </Link>
    )
}

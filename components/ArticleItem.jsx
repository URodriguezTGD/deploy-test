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
            <a>
                <div className={articleStyle.card}>
                    <div  className={`${articleStyle.cardImage}`} >
                        { postImageUrl && <img src={postImageUrl} className={articleStyle.articleImage} /> }
                    </div>
                    <div className={articleStyle.cardContent}>
                        <h3>{article.title}</h3>
                        <p>{article.textContent}</p>
                        <span className='right'>Leer mas <span className='mdi mdi-arrow-right'></span></span>
                    </div>
                </div>
            </a>
        </Link>
    )
}

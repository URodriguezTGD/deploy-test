import React from 'react'
import articleStyle from '../styles/Article.module.css'
import Link from 'next/link'
import Image from 'next/image'


export const ArticleItem = ({article}) => {
    return (
        <Link href='/article/[id]' as={`/article/${article.slug}`}>
            <a className={articleStyle.card}>
                <Image 
                    src='/images/bt-services.png'
                    alt="Picture of the author"
                    width={295}
                    height={213}
                    className={articleStyle.img}
                />
                <div className={articleStyle.cardContent}>
                    <h3>{article.title}</h3>
                    <p>{article.textContent}</p>
                    <span className='right'>Leer mas <span className='mdi mdi-arrow-right'></span></span>
                </div>
            </a>
        </Link>
    )
}

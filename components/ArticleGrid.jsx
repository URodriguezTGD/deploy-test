import React from 'react'
import articleStyles from '../styles/Article.module.css';
import { ArticleItem } from './ArticleItem';

export const ArticleGrid = ({articles}) => {
    return (
        <div className={articleStyles.container}>
            <div className={articleStyles.grid}>
                {
                    articles.map((article) => (<ArticleItem key={article.id} article={article} />)  )
                }
            </div>
        </div>
    )
}

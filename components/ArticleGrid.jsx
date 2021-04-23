import React from 'react'
import articleStyles from '../styles/Article.module.css';
import { ArticleItem } from './ArticleItem';



export const ArticleGrid = ({articles}) => {
    return (
        <div className={articleStyles.container}>
            {
                articles.length > 0
                ?
                <div className={articleStyles.grid}>
                    {articles.map((article) => (<ArticleItem key={article.id} article={article} />))}
                </div>
                :
                <div className={`${articleStyles.emptyBlog}`}>
                    <span className="mdi mdi-post-outline"></span>
                    <h2>Bienvenido a nuestro blog!</h2>
                    <p>Estamos trabajando en la publicación de nuestros artículos.<br/>Pronto, aquí encontrarás las noticias más importantes del área legal.</p>
                </div>
            }
        </div>
    )
}

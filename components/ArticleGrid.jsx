import React from 'react'
import articleStyles from '../styles/Article.module.css';
import { ArticleItem } from './ArticleItem';



export const ArticleGrid = ({articles}) => {
    return (
        <div className={articleStyles.container}>
            <div className={articleStyles.grid}>
                {
                    articles.length > 0
                    ?
                    articles.map((article) => (<ArticleItem key={article.id} article={article} />))
                    :
                    <div className={articleStyles.emptyBlog}>
                        <span className="mdi mdi-post-outline"></span>
                        <h2>Bienvenido a nuestro blog!</h2>
                        <p>Estamos trabajando en la publicación de nuestros artículos. Pronto, aquí encontrarás las noticias más importantes del área legal.</p>
                    </div>
                }
            </div>
        </div>
    )
}

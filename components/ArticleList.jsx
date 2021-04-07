import articleStyles from '../styles/Article.module.css';
import { ArticleItem } from './ArticleItem';
export const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.container}>
            <h2 className='center'>Noticias</h2>
            <div className={articleStyles.grid}>
                {
                    articles.map((article) => (<ArticleItem key={article.id} article={article} />)  )
                }
            </div>
        </div>
    )
}

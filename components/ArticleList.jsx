import articleStyles from '../styles/Article.module.css';
import { ArticleItem } from './ArticleItem';
export const ArticleList = ({articles}) => {
    return (
        <>
            {
                articles.length > 0
                ?
                <div className={articleStyles.container}>
                    <h2 className='center'>Noticias</h2>
                    <div className={articleStyles.slider}>
                        {
                            articles.map((article) => (<ArticleItem key={article.id} article={article} />)  )
                        }
                    </div>
                </div>
                :
                null
            }
        </>
    )
}

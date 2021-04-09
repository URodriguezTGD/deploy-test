import articleStyles from '../styles/Article.module.css';
import { ArticleItem } from './ArticleItem';

// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/ArticleList/ArticleList_es';
import en from '../locales/ArticleList/ArticleList_en';

export const ArticleList = ({articles}) => {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div className={articleStyles.container}>
            <h2 className='center'>{t.title}</h2>
            <div className={articleStyles.slider}>
                {
                    articles.map((article) => (<ArticleItem key={article.id} article={article} />)  )
                }
            </div>
        </div>
    )
}

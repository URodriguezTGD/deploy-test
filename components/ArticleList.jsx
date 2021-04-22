import articleStyles from '../styles/Article.module.css';
import { ArticleItem } from './ArticleItem';
// imports i18n
import { useRouter } from 'next/router';
import es from '../locales/ArticleList/ArticleList_es';
import en from '../locales/ArticleList/ArticleList_en';
import Link from 'next/link';

export const ArticleList = ({articles}) => {
    // Selecting language
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'es' ? es : en;
    return (
        <div className={``}>
            {
                articles.length > 0
                ?
                <div className={`${articleStyles.container} ${router.pathname === '/' ? 'white' : null}`}>
                    <Link href={ locale === 'es' ? '/es/blog' : '/en/blog' }>
                        <a><h2 className='center'>{t.title}</h2></a>
                    </Link>
                    <div className={articleStyles.sliderContainer}>
                        <div
                            id="articles-slider"
                            className={articleStyles.slider}
                        >
                            {articles.map((article) => (
                                <ArticleItem key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    );
};

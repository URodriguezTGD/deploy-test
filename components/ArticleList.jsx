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
        <>
            {
                articles.length > 0
                ?
                <div className={articleStyles.container}>
                    <h2 className='center'>{t.title}</h2>
                    <div className={articleStyles.slider}>
                        <div
                            id="articles-slider"
                            style={{ display: "inline-flex", overflow: "scroll" }}
                        >
                            {articles.map((article) => (
                                <ArticleItem key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                    <div className={articleStyles.sliderControls}>
                        <button className='btn-flat'
                            onClick={(e) => {
                                document.getElementById("articles-slider").scrollTo({
                                    top: 0,
                                    left:document.getElementById("articles-slider").scrollLeft - 1000,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <span className='mdi mdi-arrow-left'></span>
                        </button>
                        <button className='btn-flat'
                            onClick={(e) => {
                                document.getElementById("articles-slider").scrollTo({
                                    top: 0,
                                    left:document.getElementById("articles-slider").scrollLeft + 1000,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <span className='mdi mdi-arrow-right'></span>
                        </button>
                    </div>
                </div>
                :
                null
            }
        </>
    );
};

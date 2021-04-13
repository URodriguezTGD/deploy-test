import { useEffect } from "react";
import article from "../pages/article/[id]";
import articleStyles from "../styles/Article.module.css";
import { ArticleItem } from "./ArticleItem";
export const ArticleList = ({ articles }) => {
    useEffect(() => {
        return () => {};
    }, []);

    return (
        <div className={articleStyles.container}>
            <h2 className="center">Noticias</h2>
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
    );
};

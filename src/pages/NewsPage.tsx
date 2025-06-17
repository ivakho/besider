import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/slices/newsSlice";
import type { RootState, AppDispatch } from "../redux/store/store";
import styles from "./NewsPage.module.css";
import { Header } from "../components/Header/Header";
import { Article } from "../components/Article/Article";
import loader from "../assets/loader.svg";
import { groupArticlesByDate } from "../functions/groupArticlesByDay";
import { Footer } from "../components/Footer/Footer";
import { BurgerMenu } from "../components/BurgerMenu/BurgerMenu";

const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, error } = useSelector(
    (state: RootState) => state.news
  );
  const burgerMenu = useSelector((state: RootState) => state.burger.burger);

  useEffect(() => {
    const now = new Date();
    dispatch(fetchNews({ year: 2023, month: now.getMonth() + 1 }));

    const interval = setInterval(() => {
      const now = new Date();
      dispatch(fetchNews({ year: 2023, month: now.getMonth() + 1 }));
    }, 30000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const sortedArticles = [...articles].sort((a, b) => {
    return new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime();
  });

  const groupedArticles = groupArticlesByDate(sortedArticles);

  return (
    <div>
      {burgerMenu && <BurgerMenu />}

      <Header />
      <div className={styles.content}>
        {loading && <img className={styles.loader} src={loader} alt="loader" />}
        {error && <p>{error}</p>}

        {Object.entries(groupedArticles).map(([date, articles]) => (
          <div className={styles.news} key={date}>
            <h2 className={styles.title}>News for {date}</h2>
            <div className={styles.articles}>
              {articles.map((article) => (
                <Article
                  key={article._id}
                  _id={article._id}
                  source={article.source}
                  multimedia={article.multimedia}
                  web_url={article.web_url}
                  abstract={article.abstract}
                  pub_date={article.pub_date}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;

import { format } from "date-fns";
import type { ArticleProps } from "../types/types";

export const groupArticlesByDate = (articles: ArticleProps[]) => {
  const grouped: Record<string, ArticleProps[]> = {};

  articles.forEach((article) => {
    const dateKey = format(new Date(article.pub_date), "dd.MM.yyyy");
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(article);
  });

  return grouped;
};

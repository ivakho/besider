import styles from "./Article.module.css";
import type { ArticleProps } from "../../types/types";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "MMM d, yyyy, HH.mm a", { locale: enUS });
};

export const Article = ({
  source,
  web_url,
  multimedia,
  abstract,
  pub_date,
}: ArticleProps) => {
  const imageUrl =
    multimedia && multimedia.length > 0 && multimedia[0].url
      ? `https://static01.nyt.com/${multimedia[0].url}`
      : undefined;

  const text = abstract ? abstract : "This file was published in error";

  return (
    <a className={styles.container} href={web_url} target="_blank">
      <img className={styles.img} src={imageUrl} alt="article img" />
      <div className={styles.content}>
        <h2 className={styles.title}>{source}</h2>
        <div className={styles.text}>{text}</div>
        <div className={styles.date}>{formatDate(pub_date)}</div>
      </div>
    </a>
  );
};

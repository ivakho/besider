export interface ArticleProps {
  _id: string;
  web_url: string;
  multimedia: { url: string }[];
  pub_date: string;
  source: string;
  abstract: string;
}

export interface NewsState {
  articles: ArticleProps[];
  loading: boolean;
  error: string | null;
}

export interface BurgerState {
  burger: boolean;
}
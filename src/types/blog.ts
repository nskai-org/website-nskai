export interface BlogPost {
  _id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  authorImage?: string;
  author: string;
  content?: unknown;
}

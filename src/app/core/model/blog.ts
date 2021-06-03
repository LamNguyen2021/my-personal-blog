export interface Blog {
  _id: string;
  categoryId: string;
  title: string;
  content: string;
  excerpt: string;
  lastModified: Date | string;
  publishDate: Date | string;
  urlImage: string;
  __v: number;
}

export interface BlogDetail {
  _id: string;
  categoryId: string;
  title: string;
  content: string;
  excerpt: string;
  lastModified: Date | string;
  publishDate: Date | string;
  urlImage: string;
  __v: number;
}

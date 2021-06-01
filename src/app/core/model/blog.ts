export interface Blog {
  _id: string;
  categoryId: string;
  title: string;
  content: string;
  excerpt: string;
  lastModified: Date;
  publishDate: Date;
  urlImage: string;
  __v: number;
}

export interface BlogDetail {
  _id: string;
  categoryId: string;
  title: string;
  content: string;
  excerpt: string;
  lastModified: Date;
  publishDate: Date;
  urlImage: string;
  __v: number;
}

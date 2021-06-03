export interface CreatePost {
  categoryId: string;
  title: string;
  content: string;
  excerpt: string;
  urlImage: string;
}

export interface NewPost {
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

export interface CreatePost {
  title: string;
  content: string;
  excerpt: string;
  urlImage: string;
}

export interface NewPost {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  lastModified: Date;
  publishDate: Date;
  urlImage: string;
  __v: number;
}

export interface EditPost {
  title: string;
  content: string;
  excerpt: string;
  urlImage: string;
}

export interface EditedPost {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  lastModified: Date;
  publishDate: Date;
  __v: number;
  urlImage: string;
}

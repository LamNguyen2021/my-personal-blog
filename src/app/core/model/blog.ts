export interface Blog {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  lastModified: Date | string;
  publishDate: Date | string;
  urlImage: string;
  __v: number;
}

export interface BlogGroup {
  page:         number;
  pageSize:     number;
  data:         Blog[];
  totalRecords: number;
  totalPages:   number;
}

export interface BlogDetail {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  lastModified: Date | string;
  publishDate: Date | string;
  urlImage: string;
  __v: number;
}

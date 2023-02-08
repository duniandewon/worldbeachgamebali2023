export interface INode {
  id: string;
  name: string;
}

export interface IFeaturedImage {
  sourceUrl: string;
  altText: string;
}

export interface IPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string
  slug: string;
  date: string;
  isSticky?: boolean;
  categories: { nodes: INode[] };
  featuredImage: { node: IFeaturedImage };
}
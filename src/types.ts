export interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  price: number;
  image: string;
  __v: number;
}

export interface ICategory {
  _id?: string;
  name: string;
  slug: string;
  __v: number;
}

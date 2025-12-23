export interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  slug: string;
  images: Images;
  category: Categories;
}

type Images = string[];

type Categories = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

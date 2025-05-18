export interface Product {
  id: number;
  title: string;
  price: number;
  tags: string[];
  subscription: boolean;
  thumbnail: {
    width: number;
    height: number;
    url: string;
  };
}
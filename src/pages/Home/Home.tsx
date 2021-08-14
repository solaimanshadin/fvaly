import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import React, { useState, useEffect } from 'react';
// Was a mistake in import:  import { useEffect } from 'react-dom/node_modules/@types/react';
import ProductService from 'services/ProductService';
import { IProduct } from 'types';
const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  useEffect(() => {
    ProductService.getProducts().then((res: IProduct[]) => setProducts(res));
  });
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;

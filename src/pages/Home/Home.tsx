import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import ShopByStore from 'components/home/ShopByStore';
import useAsync from 'hooks/useAsync';
import React, { useEffect, useState } from 'react';
// Was a mistake in import:  import { useEffect } from 'react-dom/node_modules/@types/react';
import ProductService from 'services/ProductService';
import StoreService from 'services/StoreService';
import { IStore } from 'types';

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   ProductService.getProducts().then((res) => setProducts(res));
  // }, []);

  const [storeData, setStoreData] = useState<IStore[]>([]);

  useEffect(() => {
    StoreService.getStores().then((res) => setStoreData(res));
  }, []);

  const { data, isLoading, isSuccess } = useAsync(ProductService.getProducts);

  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
      <ShopByStore
        isSuccess={isSuccess}
        isLoading={isLoading}
        shopByStore={storeData}
      />
    </div>
  );
};

export default Home;

import StorProduct from 'components/common/StorProduct';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductsSkeleton from 'skeletons/ProductsSkeleton';
import { IStore } from 'types';

interface IProp {
  shopByStore: IStore[] | null;
  isLoading: boolean;
  isSuccess: boolean;
}

const ShopByStore = ({ shopByStore, isLoading, isSuccess }: IProp) => {
  console.log(shopByStore);

  return (
    <div>
      <Container>
        <h1 className="mb-4">Shop by Stores</h1>
        {isLoading && <ProductsSkeleton />}
        {isSuccess && (
          <Row className="align-items-stretch">
            {shopByStore?.map((storeProduct: IStore) => (
              <StorProduct key={storeProduct._id} storeProduct={storeProduct} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ShopByStore;

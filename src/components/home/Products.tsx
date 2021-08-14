import Product from 'components/common/Product';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { IProduct } from 'types';

const Products = ({ products }: { products: IProduct[] }) => {
  console.log('products', products);
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4">Latest Products</h2>
        <Row>
          {products?.map((product: IProduct) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;

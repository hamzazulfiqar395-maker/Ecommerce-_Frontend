import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = ({ addToCart }) => {
    return (
        <Container className="py-5">
            <h2 className="mb-4 text-center fw-bold">All Products</h2>
            <Row className="g-4">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} onAddToCart={addToCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FaArrowLeft, FaCartPlus } from 'react-icons/fa';
import { products } from '../data/products';

const ProductDetails = ({ addToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <Container className="py-5 text-center">
                <h2>Product not found</h2>
                <Button variant="outline-primary" onClick={() => navigate('/products')} className="mt-3">
                    Back to Products
                </Button>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Button variant="link" onClick={() => navigate(-1)} className="text-decoration-none mb-4 d-flex align-items-center gap-2 text-dark px-0">
                <FaArrowLeft /> Back
            </Button>

            <Row className="gy-4">
                <Col md={6}>
                    <div className="bg-white rounded-3 p-3 shadow-sm h-100 d-flex align-items-center justify-content-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid rounded"
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="ps-md-4">
                        <Badge bg="secondary" className="mb-2 px-3 py-2 fs-6">{product.category}</Badge>
                        <h1 className="fw-bold mb-3">{product.name}</h1>
                        <h2 className="text-primary fw-bold mb-4">${product.price.toFixed(2)}</h2>

                        <p className="lead text-muted mb-4" style={{ lineHeight: '1.8' }}>
                            {product.description}
                        </p>

                        <hr className="my-4" />

                        <div className="d-grid gap-2 d-md-block mt-4">
                            <Button
                                variant="primary"
                                size="lg"
                                className="px-5 py-3 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2 w-100 w-md-auto"
                                onClick={() => {
                                    addToCart(product);
                                    navigate('/cart');
                                }}
                            >
                                <FaCartPlus size={20} /> Add to Cart
                            </Button>
                        </div>

                        <div className="mt-5 bg-light p-4 rounded-3 border">
                            <h5 className="fw-bold mb-3">Product Features:</h5>
                            <ul className="text-muted mb-0 ps-3">
                                <li className="mb-2">Quality guaranteed by ShopReact</li>
                                <li className="mb-2">Free shipping on orders over $50</li>
                                <li className="mb-2">30-day return policy</li>
                                <li>24/7 customer support</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;

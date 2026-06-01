import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = ({ addToCart }) => {
    // Display just the first 4 products as featured
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="home-container">
            <Container className="mt-4">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1 className="fw-bold mb-3 display-4">Welcome to ShopReact</h1>
                    <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                        Discover premium quality products at unbeatable prices. From electronics to home essentials, we have everything you need.
                    </p>
                    <Button as={Link} to="/products" variant="primary" size="lg" className="px-5 rounded-pill shadow-sm">
                        Shop Now
                    </Button>
                </div>

                {/* Featured Products */}
                <div className="mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                        <h2 className="h3 mb-0">Featured Products</h2>
                        <Link to="/products" className="text-decoration-none fw-bold">View All &rarr;</Link>
                    </div>
                    <Row className="g-4">
                        {featuredProducts.map(product => (
                            <Col key={product.id} xs={12} sm={6} lg={3}>
                                <ProductCard product={product} onAddToCart={addToCart} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Home;

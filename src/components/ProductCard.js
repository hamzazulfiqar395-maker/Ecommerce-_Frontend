import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <Card className="h-100 product-card">
            <div className="position-relative">
                <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                />
                <Badge bg="secondary" className="position-absolute top-0 end-0 m-3 px-3 py-2">
                    {product.category}
                </Badge>
            </div>
            <Card.Body className="d-flex flex-column">
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                    <Card.Title className="fs-5 mb-2 line-clamp-2">{product.name}</Card.Title>
                </Link>
                <Card.Text className="text-primary fw-bold fs-4 mb-3">
                    ${product.price.toFixed(2)}
                </Card.Text>
                <Card.Text className="text-muted small flex-grow-1" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {product.description}
                </Card.Text>
                <Button
                    variant="primary"
                    className="w-100 mt-auto d-flex justify-content-center align-items-center gap-2"
                    onClick={() => onAddToCart(product)}
                >
                    <FaCartPlus /> Add to Cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;

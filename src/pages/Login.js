import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dummy ${isLogin ? 'Login' : 'Signup'} Successful!`);
    };

    return (
        <Container className="py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card className="shadow-lg border-0" style={{ width: '100%', maxWidth: '450px', borderRadius: '16px' }}>
                <Card.Body className="p-5">
                    <div className="text-center mb-5">
                        <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3 shadow-sm">
                            <FaUser size={28} />
                        </div>
                        <h2 className="fw-bold">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                        <p className="text-muted">
                            {isLogin ? 'Please enter your details to sign in.' : 'Fill in your details to get started.'}
                        </p>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <Form.Group className="mb-4 position-relative">
                                <Form.Label className="fw-semibold">Full Name</Form.Label>
                                <div className="position-relative">
                                    <FaUser className="position-absolute text-muted" style={{ top: '14px', left: '12px' }} />
                                    <Form.Control type="text" placeholder="John Doe" className="ps-5 py-2 bg-light border-0 shadow-none rounded-3" required />
                                </div>
                            </Form.Group>
                        )}

                        <Form.Group className="mb-4 position-relative">
                            <Form.Label className="fw-semibold">Email Address</Form.Label>
                            <div className="position-relative">
                                <FaEnvelope className="position-absolute text-muted" style={{ top: '14px', left: '12px' }} />
                                <Form.Control type="email" placeholder="name@example.com" className="ps-5 py-2 bg-light border-0 shadow-none rounded-3" required />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-4 position-relative">
                            <div className="d-flex justify-content-between align-items-center">
                                <Form.Label className="fw-semibold mb-0">Password</Form.Label>
                                {isLogin && <a href="#forgot" className="text-decoration-none small text-primary fw-semibold">Forgot Password?</a>}
                            </div>
                            <div className="position-relative mt-2">
                                <FaLock className="position-absolute text-muted" style={{ top: '14px', left: '12px' }} />
                                <Form.Control type="password" placeholder="••••••••" className="ps-5 py-2 bg-light border-0 shadow-none rounded-3" required minLength="6" />
                            </div>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 py-3 mt-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2">
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </Form>

                    <div className="text-center mt-4 pt-3 border-top">
                        <span className="text-muted">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                        </span>
                        <Button variant="link" className="p-0 text-decoration-none fw-bold" onClick={toggleMode}>
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;

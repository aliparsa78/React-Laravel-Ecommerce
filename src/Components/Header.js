import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom' 
const Header = () => {
    return (
        <div className="main">
            
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                    <Nav className="me-auto navbar_wrap">
                        <Link to="add-product">Add Product</Link>
                        <Link to="update-product">Update Product</Link>
                        <Link to="register">Register</Link>
                        <Link to="login">Login</Link>
                    </Nav>
                </Container>
            </Navbar>

            <br />
            
        </div>
    );
}

export default Header;
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect >
        <Container>
          <Navbar.Brand href="/">eShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fa-solid fa-user"></i> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
import Link from 'next/link';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import { Container, Navbar, Nav, NavDropdown, Dropdown, Row, Col, FontAwesomeIcon } from 'react-bootstrap';

export const NavLink = (props) => {
  let className = classNames({
    "nav-link": true,
    "is-active": props.pathname
  });
  return <Link href={props.path}><a className={className}>{props.label}</a></Link>
};

const Header = ({ router: { pathname } }) => (
  <header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand href="/">Project Asuna</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLink path="/about" label="About Us" pathname/>
          <NavLink path="/account" label="New Account" pathname/>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default withRouter(Header);

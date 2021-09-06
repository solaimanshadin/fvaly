import logo from 'assets/images/fvaly.png';
import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { BsPhone } from 'react-icons/bs';
import { FaRegEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { BiSearch, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { logout } from 'redux/actionCreators/authActionCreators';
const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);
  const { data } = useSelector((state: AppState) => state.auth);

  return (
    <div className="header__component">
      <div className="top-header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall /> <a href="tel:09638111666">09638111666</a>
            </li>
            <li>
              <FaRegEnvelope />
              <a href="mail-to:support@fvaly.com">support@fvaly.com</a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="https://play.google.com/store/apps/details?id=bd.com.fvaly.fvalyshop">
              Save big on our app!
            </a>
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <Link to="/">
              <img className="branding" src={logo} alt="Fvaly" />
            </Link>
            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Search Here.."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <Link to="/checkout">
                  <FiShoppingBag />
                  <span className="badge bg-primary">{cart.length}</span>
                </Link>
              </li>

              <li>
                <Link to="/login">
                  <BiUser />
                </Link>
              </li>
              {data && (
                <li className="btn">
                  <FaSignOutAlt onClick={() => dispatch(logout())} />
                </li>
              )}
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News feed</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              {' '}
              {data?.role === 'admin' ? 'Dashboard' : 'Merchant Zone'}
            </Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

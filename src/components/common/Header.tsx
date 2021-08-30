import logo from 'assets/images/fvaly.png';
import Categories from 'components/Categories/Categories';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { IoChevronDownOutline } from 'react-icons/all';
import { BiSearch, BiUser } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { FaBars, FaRegEnvelope } from 'react-icons/fa';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from 'redux/store';

const Header = () => {
  const cart = useSelector((state: AppState) => state.cart);

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
            </ul>
          </div>
        </Container>
      </div>

      <nav className="navbar navbar-expand-md navbar-2">
        <div className="container">
          <ul className="navbar-nav navbar-nav-1">
            <div className="dropdown">
              <button className="btn-style" id="toggler-btn">
                <FaBars className="toggler-btn" />
              </button>
              <li className="nav-item">
                <span
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Catagories</span>
                  <IoChevronDownOutline className="ms-5" />
                </span>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ marginTop: '2px' }}
                >
                  <Categories />
                </div>
              </li>
            </div>
          </ul>
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item ml-5  pl-5">
              <a className="nav-link " href="#">
                Giftcard{' '}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Catagories
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                NewsFeed
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MerchantZone
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

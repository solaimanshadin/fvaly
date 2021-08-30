import logo from 'assets/images/fvaly.png';
import { useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const SideMenu = () => {
  useEffect(() => {
    const toggle: HTMLElement = document.getElementById('toggler-btn')!;
    const sideMenuOverlay: HTMLElement =
      document.querySelector('.side-menu-overlay')!;
    const crossBtn: HTMLElement = document.getElementById('times-icon')!;
    const toggleMobile: HTMLElement =
      document.querySelector('.mobile-nav-button')!;

    toggle?.addEventListener('click', () => {
      sideMenuOverlay.style.display = 'block';
    });

    toggleMobile?.addEventListener('click', () => {
      sideMenuOverlay.style.display = 'block';
    });

    crossBtn?.addEventListener('click', () => {
      sideMenuOverlay.style.display = 'none';
    });
  }, []);
  return (
    <div className="side-menu-overlay">
      <div className="side-menu">
        <div className="side-menu-top  ">
          <img
            className="navbar-brand-icon img-fluid"
            src={logo}
            style={{ width: '100px' }}
            alt=""
          />
          <span id="times-icon" className="times-icon d-inline-block">
            {' '}
            &times;
          </span>
        </div>

        <div className="side-menu-login">
          <div className="side-menu-img">
            <span>Account</span>
          </div>
          <div className="side-menu-login-btn">
            <a href="/" className="btn btn-outline-danger w-100">
              {' '}
              login{' '}
            </a>
          </div>
        </div>

        <div className="side-menu-link">
          <a href="/" className="side-menu-link-item">
            <span className="side-menu-text">Categories</span>
            <span className="side-menu-arrow">
              <FiChevronRight />
            </span>
          </a>
          <a href="/" className="side-menu-link-item">
            <span className="side-menu-text">Products</span>
            <span className="side-menu-arrow">
              <FiChevronRight />
            </span>
          </a>
          <a href="/" className="side-menu-link-item">
            <span className="side-menu-text">Orders</span>
            <span className="side-menu-arrow">
              <FiChevronRight />
            </span>
          </a>
          <a href="/" className="side-menu-link-item">
            <span className="side-menu-text">Giftcard</span>
            <span className="side-menu-arrow">
              <FiChevronRight />
            </span>
          </a>
        </div>

        <div className="side-menu-links">
          <a href="/">. About Us </a>
          <a href="/">. Contact us </a>
          <a href="/">. Privacy Policy</a>
          <a href="/">. Purchasing Policy</a>
        </div>
        <p className="ps-4">© f-valy.com 2021</p>
      </div>
    </div>
  );
};

export default SideMenu;

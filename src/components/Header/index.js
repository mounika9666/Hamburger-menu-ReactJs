// Write your code here

import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="navbarHeader">
    <div className="navContent">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="websiteLogo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            data-testid="hamburgerIconButton"
            className="hamburger-button"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modalContainer">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul className="list-container">
              <li className="list-item">
                <Link to="/" className="nav-link" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="item">Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" className="nav-link" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <p className="item">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default withRouter(Header)

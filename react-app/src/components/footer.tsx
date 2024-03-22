import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
type Props = {}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className='footer bg-dark text-white pt-4'>
      <div className='container'>
        <div className='row footer-content'>
          <div className='col-md-6'>
            <h5>About Us</h5>
            <p>phuongbmph30949</p>
          </div>
          <div className='col-md-6'>
            <h5>Contact Us</h5>
            <p>
              Email: phuongbui2580@gmail.com
              <br />
              Phone: +1234567890
            </p>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-6'>
            <p>&copy; 2024 BMP Company</p>
          </div>
          <div className='col-md-6 text-md-end social-icons'>
            <a href='#' className='px-1'>
              <FaFacebook />
            </a>
            <a href='#' className='px-1'>
              <FaTwitter />
            </a>
            <a href='#' className='px-1'>
              <FaInstagram />
            </a>
            <a href='#' className='px-1'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

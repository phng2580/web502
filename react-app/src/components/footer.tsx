import React from 'react'
import { IonIcon } from '@ionic/react'
type Props = {}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className='footer bg-dark text-white pt-4'>
      <div className='container'>
        <div className='row footer-content'>
          <div className='col-md-6'>
            <h5>About Us</h5>
            <p>abcxyzbcd</p>
          </div>
          <div className='col-md-6'>
            <h5>Contact Us</h5>
            <p>
              Email: info@example.com
              <br />
              Phone: +1234567890
            </p>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-6'>
            <p>&copy; 2024 Your Company</p>
          </div>
          <div className='col-md-6 text-md-end social-icons'>
            <a href='#'>
              <IonIcon icon='logo-facebook' />
            </a>
            <a href='#'>
              <IonIcon icon='logo-twitter' />
            </a>
            <a href='#'>
              <IonIcon icon='logo-instagram' />
            </a>
            <a href='#'>
              <IonIcon icon='logo-linkedin' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

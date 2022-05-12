import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className='footer-container'>

      <section className='social-media'>
        <div className='social-media-wrap'>
          
          <small className='website-rights'> Toyota © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/https://www.facebook.com/Toyota'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/https://www.instagrem.com/Toyota'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/https://www.youtube.com/Toyota'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/https://www.Twitter.com/Toyota'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link linkendin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react'


function Footer() {
  return (
    <div className='footer flex'>
          <div className='footer-form'>
            <p className="footer-text">Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
            <input placeholder='Enter Your Email' type="text contact form" />
            <button className='black-button'>Remind</button>
          </div>
          <div className='footer-list'>
            <h1 className='sub-heading'>Contact Us</h1>
            <div>
              <h2 className='sub-heading'>Address</h2>
              <p> 15/4 Khreshchatyk Street, Kyiv</p>
            </div>
            <div>
            <h2 className='sub-heading'>Phone</h2>
              <p> +380980099777</p>
            </div>
            <div>
            <h2 className='sub-heading'>General Enquiry:
</h2>
              <p> Kiev.Florist.Studio@gmail.com</p>
            </div>
           
          </div>
          <div className='footer-list'>
          <h1 className='sub-heading'>Contact Us</h1>
          <p>All Products</p>
            <p>Fresh Flowers</p>
            <p>Dried Flowers </p>
            <p>Plants</p>
            <p>Designer Vases</p>
          </div>
          <div className='footer-list'>
          <h1 className='sub-heading'>About Us</h1>
          <p>Our Story</p>
            <p>Blogs</p>
            <p>Shipping and Returns </p>
            <p>Terms and Conditions</p>
            <p>Pricacy policy</p>
          </div>
        </div>
  )
}

export default Footer
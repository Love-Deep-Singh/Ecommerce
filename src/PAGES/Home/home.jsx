import React from 'react'
import Navbar from '../components/Navbar'
import "../../index.css"
import heroImg from "../../assets/img-hero.png"
import cardimg1 from "../../assets/card-img1.png"
import cardimg2 from "../../assets/card-img2.png"

import cardimg3 from "../../assets/card-img3.png"

import cardimg4 from "../../assets/card-img4.png"

import cardimg5 from "../../assets/card-img5.png"
import contactImg from "../../assets/contact-img.png"
import Instagram from "../../assets/Instagram.png"
import Twitter from "../../assets/Twitter.png"
import Telegram from "../../assets/Telegram.png"
import Facebook from "../../assets/Facebook.png"
import Pinterest from "../../assets/Pinterest.png"
import Footer from '../components/Footer'

function home() {
  return (
    <>
    <Navbar></Navbar>
    <div className='hero'>
          <div className='hero-title-container'>
            <div className='hero-text'>
            <h1><span>Kyiv</span>LuxeBouqets</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum perferendis quaerat.</p>
            </div>

            <div className='hero-image'>
              <img src={heroImg} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nam ratione, ipsum quam ipsa tempora.</p>
            </div>
          </div>
         <div className='hero-card-container'>
          <div className="card">
            <div className="card-text">Fresh Flowers</div>
          <div className="card-img"><img src={cardimg1} alt="" /></div>
          
          </div>
          <div className="card">
          <div className="card-img"><img src={cardimg2} alt="" /></div>
            <div className="card-text">Fresh Flowers</div>
          
          </div>
          <div className="card">
            <div className="card-text">Fresh Flowers</div>
          <div className="card-img"><img src={cardimg3} alt="" /></div>
          
          </div>
          <div className="card">
          <div className="card-img"><img src={cardimg4} alt="" /></div>
            <div className="card-text">Fresh Flowers</div>
          
          </div>
          <div className="card">
            <div className="card-text">Fresh Flowers</div>
          <div className="card-img"><img src={cardimg5} alt="" /></div>
          
          </div>
          </div>
        </div>
        <div className="about ">
          <div className='about-text flex'>
            <div className='about-title'>
              <h1>About Us</h1>
            </div>
              <div className="about-info">
                <span className='flow'>Our Story</span>
                <h2 className='flow'>Kyiv LuxeBouquets</h2>
                <p className='flow'>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
                <button className='button-white flow'>LEARN MORE</button>
              </div>
          </div>
          <div className='about-text flex'>
            <div className='about-title'>
              <h1>Why choose us ?</h1>
            </div>
            <div className='about-info-container'>
              <div className="about-info">
                
                <h2 className='flow'>On-time delivery</h2>
                <p className='flow'>Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</p>
               
              </div>
              <div className="about-info">
                
                <h2 className='flow'>Safe payment</h2>
                <p className='flow'>You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</p>
               
              </div>
              <div className="about-info">
                
                <h2 className='flow'>Subscription by your needs</h2>
                <p className='flow'>WWith our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.</p>
               
              </div>
              </div>
          </div>
        </div>
        <div className="contact flex">
          <div className="contact-left">
            <div className='contact-left-top'>
            <h1>To Contact Us</h1>
            <p>We will call you back</p>
            <form action="" className='flex contact-form' method="post">
              <input type="text" />
            <button className='black-button'>Submit</button>
            </form>
            

            </div>
            <div className="contact-left-bottom">
              <div className='contact-table flex'>
              <div>
                <h1>Phone</h1>
              </div>
              <div>
                <h1>Address</h1>
                </div>
               
              </div>
              <div className='contact-table contact-table-info flex'>
              <div className='contact-table-text'>
                <p>+380980099777</p>
                <p>+380980099111</p>
              </div>
              <div className='contact-table-text'>
              <p>OPENING HOURS: 8 TO 11 P.M.</p>
                <p>15/4 Khreshchatyk Street, Kyiv</p>
                </div>
               
              </div>
            </div>
          </div>
          <div className='contact-right'>
            <img src={contactImg} alt="" />
            <div className='contact-bottom-right flex'>
            <div className='contact-bottom-right-text'>
            <h1>FOLLOW US</h1>
              </div>
             <div className='social-links flex'>
                  
                    <a href=''><img src={Instagram}alt="" /></a>
                    <a href=''><img src={Twitter}  alt=''/></a>
                    <a href='' ><img src={Telegram} alt="" /></a>
                    <a href='' ><img src={Facebook} alt="" /></a>
                    <a href='' ><img src={Pinterest} alt="" /></a>
                  
             </div>
             
            </div>
          </div>
          
        </div>

    <Footer></Footer>
    </>
  )
}

export default home
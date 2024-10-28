import React from 'react'
import "./Footer.css"
import nan from '../images/nan.webp'

const Footer = () => {
  return (
    <div>
        <section class="bottom">
          <div>
              <img class="zomoo"  src={nan} alt=""/>
          </div>
          <div>
              <table>
                  <thead>
                      <th>ABOUT ZOMATO</th>
                      <th>ZOMAVERSE</th>
                      <th>FOR RESTAURANTS</th>
                      <th>LEARN MORE</th>
                      <th>SOCIAL LINKS</th>
                  </thead>
                  <tr>
                      <td>Who we are</td>
                      <td>Zomato</td>
                      <td>Partner with us</td>
                      <td>privacy</td>
                      <td><i class='bx bxl-linkedin-square'></i><i class='bx bxl-instagram-alt' ></i><i class='bx bxl-twitter' ></i><i class='bx bxl-youtube' ></i><i class='bx bxl-facebook-square' ></i></td>
                  </tr>
                  <tr>
                      <td>Blog</td>
                      <td>Blink it</td>
                      <td>Apps for you</td>
                      <td>Security</td>
                  </tr>
                  <tr>
                      <td>Work with us</td>
                      <td>Feeding India</td>
                      <td></td>
                      <td>Terms</td>
                  </tr>
                  <tr>
                      <td>Investor Relations</td>
                      <td>Hyperpure</td>
                      <td></td>
                      <td>Sitemap</td>
                  </tr>
                  <tr>
                      <td>Report Fraud</td>
                      <td>Zoomaland</td>
                  </tr>
                  <tr>
                      <td>Presskit</td>
                      <td>Weather Union</td>
                  </tr>
                  <tr>
                      <td>Contact Us</td>
                  </tr>
              </table>
              <hr className='line' /> 
          <p className='line'>
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
          </p>
          </div> 
        </section>

    </div>
  )
}

export default Footer
import React from 'react'
import './Navbar.css'
import Img1 from '../images/Img1.webp'
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className='main'>
         <section className="first">
        <div className="first-menu">
            <ul>
                <li><Link to='get' className='lin'>Get the App</Link></li>
            </ul>
            <ul className="flex">
                <li><Link to="/veg" className='lin'>Veg</Link></li>
                <li><Link to="/nonveg" className='lin'>Non-Veg</Link></li> 
                <li><Link to="/login" className='lin'>Log in</Link></li>
                <li><Link to="/signup" className='lin'>Sign in</Link></li>
                <li><Link to='/admin' className='lin'>Admin</Link></li>
                <li>
                <Link class="nav-link ln" to="/cart">
                  <HiOutlineShoppingCart  /> Cart 
                  </Link>
                </li>
            </ul>   
            
        </div>
        <img className="zomato" src={Img1} alt=""/>
        <ul>
        <li class="coimbatore">Discover the best food & drinks in Coimbatore</li>
    </ul>
    <div className="search">
        <div className="location">
            <i class='bx bxs-map' ></i>
            <input type="text" placeholder="Coimbatore"/>
            <MdArrowDropDown className='dropdown'/>
        </div>
        <input type="text" placeholder="Search for restaurant, cuisine or a dish" class="search-input"/>
    </div>
    </section>

    </div>
  )
}

export default Navbar
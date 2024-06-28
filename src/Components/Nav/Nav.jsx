import '../Nav/Nav.css';
import SiteLogo from '../../assets/Images/Frame.png';
import InstaLogo from '../../assets/Images/ant-design_instagram-filled.png';
import Facebook from '../../assets/Images/Group.png';
import SearchIcon from '../../assets/Images/icon_search.png';
import Savat from '../../assets/Images/icon_cart_simple.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Nav = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="BigNav">
                <div className="navCont">
                    <img onClick={()=> navigate("/")} src={SiteLogo} alt="" />

                    <menu className='navContMainMenu'>
                        <NavLink className='navContMainMenuLink'>ALL PRODUCTS</NavLink>
                        <NavLink to={"/aboutUs"} className='navContMainMenuLink' href="">ABOUT SEEDRA</NavLink>
                        <NavLink to={"/blog"} className='navContMainMenuLink' href="">OUR BLOG</NavLink>
                        <NavLink to={"/contact"} className='navContMainMenuLink' href="">CONTACTS</NavLink>
                    </menu>

                    <div className="socialMediaIconsBox">
                        <img className='socialMediaImg' src={InstaLogo} alt="" />
                        <img className='socialMediaImg' src={Facebook} alt="" />
                    </div>

                    <div className="searchBox">
                        <img className='searchImage' src={SearchIcon} alt="" />
                        <input className='searchBoxInput' type="text" placeholder='Search' />
                    </div>

                    <div className="Cartbox">
                        <FavoriteBorderIcon sx={{ color: "#359740" }}></FavoriteBorderIcon>
                        <img onClick={() => navigate("/cart")} className='cartBoxImage' src={Savat} alt="" />
                    </div>
                </div>
            </div >

        </>
    )
}
export default Nav;
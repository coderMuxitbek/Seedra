import '../Nav/Nav.scss';
import SiteLogo from '../../assets/Images/Frame.png';
import InstaLogo from '../../assets/Images/ant-design_instagram-filled.png';
import Facebook from '../../assets/Images/akar-icons_facebook-fill.png';
import SearchIcon from '../../assets/Images/icon_search.png';
import Savat from '../../assets/Images/icon_cart_simple.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { prodTypes } from '../../data';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSelector } from 'react-redux';

const Nav = ({ InputHandler, FilterHandler, openMenu, setOpenMenu }) => {
    const lala = useSelector((state) => state.SeedsSlice.userDetails)
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const navMenuRef = useRef();
    const navBar = useRef()

    const BeDispatcher = ()=> {
        if(lala.name && lala.email){
            navigate("/contact")
        }else{
            navigate("/myProfile")
        }
    }

    const GetCartNav = async () => {
        const { data } = await axios.get("http://localhost:3000/cart");
        setCart(data)
    }

    const closeWithCartIcon = () => {
        navigate("/cart")
        setOpenMenu(false)
    }

    const closeWithMyProfile = () => {
        navigate("/myProfile/account")
        setOpenMenu(false)
    }

    useEffect(() => {
        GetCartNav()
    }, [])

    const CloseModal = (e) => {
        if (!navMenuRef.current.contains(e.target) && !navBar.current.contains(e.target)) {
            setOpenMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", CloseModal)
    }, [])

    return (
        <>
            <div className="BigNav">
                <div ref={navBar} className="navCont">
                    <img onClick={() => navigate("/")} src={SiteLogo} alt="" />

                    <menu className='navContMainMenu'>
                        <NavLink to={"/allSeeds"} className='navContMainMenuLink'>ALL PRODUCTS</NavLink>
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
                        <div className="navCart">
                            <ShoppingCartOutlinedIcon style={{ cursor: 'pointer' }} sx={{ fontSize: 30, color: "#359740" }} onClick={closeWithCartIcon}></ShoppingCartOutlinedIcon>
                            <p className='cartBoxItemQry'>{cart.length}</p>
                        </div>
                        <AccountCircleIcon style={{ cursor: 'pointer' }} onClick={closeWithMyProfile} sx={{ fontSize: 30, color: "#359740" }}></AccountCircleIcon>
                        <p onClick={() => setOpenMenu((prev) => !prev)} className='menuIcon'><MenuIcon></MenuIcon></p>
                    </div>


                </div>

                <div ref={navMenuRef} className={openMenu ? "navMenuMedia openedMenu" : "navMenuMedia"} >
                    <div className="navMenuMedia-types">
                        {prodTypes.map((item, i) => {
                            return <p style={{ cursor: "pointer" }} key={i} onClick={() => InputHandler('typeOfPlant', item.name)} className='navMenuMedia-types-type'>{item.name}</p>
                        })}
                    </div>

                    <div className="navMenuMedia-navLinksSocial">
                        <div className="navMenuMedia-navLinksSocial-navLinks">
                            <div onClick={() => setOpenMenu(false)} className="navMenuMedia-navLinksSocial-navLinks-link">
                                <NavLink to={"/blog"} className="">OUR BLOG</NavLink>
                                <p className='navMenuMedia-navLinksSocial-navLinks-link-right'>   <NavigateNextIcon sx={{ fontSize: 18, color: "#FFFFFF" }}></NavigateNextIcon></p>
                            </div>

                            <div onClick={() => setOpenMenu(false)} className="navMenuMedia-navLinksSocial-navLinks-link">
                                <NavLink to={"/aboutUs"} className='navMenuMedia-navLinksSocial-navLinks-link' href="">ABOUT SEEDRA</NavLink>
                                <p className='navMenuMedia-navLinksSocial-navLinks-link-right'> <NavigateNextIcon sx={{ fontSize: 18, color: "#FFFFFF" }}></NavigateNextIcon></p>
                            </div>

                        </div>

                        <div className="navMenuMedia-navLinksSocial-socialMedia">
                            <img src={InstaLogo} alt="" />
                            <img src={Facebook} alt="" />
                        </div>
                    </div>


                </div>
                {/* <div className={openMenu ? 'opacitied' : 'opac'} ></div> */}
            </div >

        </>
    )
}
export default Nav;
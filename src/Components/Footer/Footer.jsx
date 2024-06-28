import '../Footer/Footer.scss';
import { NavLink } from 'react-router-dom';
import SiteLogo from '../../assets/Images/Frame.png';
import FaceBookGreen from '../../assets/Images/GreenMedia/Group (1).png';
import InstaGreen from '../../assets/Images/GreenMedia/Vector (4).png';

const Footer = () => {
    return (
        <div className="BigFooter">
            <div className='footerNavBox'>
                <div className="greenMediaBox">
                    <img src={InstaGreen} alt="" />
                    <img src={FaceBookGreen} alt="" />
                </div>

                <div className='footerNav1 footerNav'>
                    <NavLink to={"/allProductsCode"}>ALL PRODUCTS</NavLink>
                    <NavLink to={"/aboutUs"}>ABOUT SEEDRA</NavLink>
                    <NavLink to={"/blog"}>OUR BLOG</NavLink>
                </div>

                <img className='siteLogoFooter' src={SiteLogo} alt="" />

                <div className='footerNav2 footerNav'>
                    <NavLink>Terms&Conditions</NavLink>
                    <NavLink>Privacy Policy</NavLink>
                </div>

                <p className='aboutRights'>All rights reserved</p>
            </div>
        </div>

     

    )
};

export default Footer;
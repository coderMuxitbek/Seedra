import { useEffect, useState } from 'react';
import '../MyProfile/MyProfile.scss';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { color } from 'framer-motion';
import AccountDetails from '../../Components/AccountDetails/AccountDetails';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const MyProfile = () => {
    const navigate = useNavigate()
    const [logOut, setLogOut] = useState(false);
    const [haveAcc, setHaveAcc] = useState(false)

    useEffect(() => {
        const exp = localStorage.getItem("userName");
        const exp2 = localStorage.getItem("userEmail");

        if (exp, exp2) {
            setHaveAcc(true)
        }

    }, [])



    const LogOutLast = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPhone");
        localStorage.removeItem("userAddress");
        localStorage.removeItem("userCountry");
        localStorage.removeItem("userCity");
        navigate("/")
    }

    return (
        <div className='myProfile'>
            <div className="profileNav">
                <div className="profileNav2">
                    <NavLink to={"/myProfile/account"} className="profileLink">
                        <p className='myProfileLinkImg'><PersonIcon></PersonIcon></p>
                        <p className='myProfileLink'>Account Details</p>
                    </NavLink>

                    <NavLink to={"/myProfile/orderHistory"} className="profileLink">
                        <p className='myProfileLinkImg'><ShoppingCartIcon></ShoppingCartIcon></p>
                        <p className='myProfileLink'>Order History</p>
                    </NavLink>

                    <NavLink to={"/myProfile/account"} className="profileLink">
                        <p className='myProfileLinkImg'><PersonIcon></PersonIcon></p>
                        <p className='myProfileLink'>Purchase</p>
                    </NavLink>

                    <NavLink to={"/myProfile/account"} className="profileLink">
                        <p className='myProfileLinkImg'><PersonIcon></PersonIcon></p>
                        <p className='myProfileLink'>Account Details</p>
                    </NavLink>
                </div>

                {haveAcc && <p style={{ cursor: 'pointer' }} onClick={() => setLogOut(true)} className="logOutBox">
                    <p><LogoutIcon></LogoutIcon></p>
                    <span className='logOutBox-text'>Log out</span>
                </p>}

                <div className={logOut ? "logOutModal logOutActive" : "logOutModal"}>
                    <div className="logOutModal-textBox">
                        <p className='logOutModal-textBox-text'>By logging out all your account details will be removed</p>
                        <p className="logOutModal-textBox-log">Log out ?</p>
                    </div>
                    <div className="logOutModal-btns">
                        <button onClick={() => setLogOut(false)} className='logOutModal-btns-btn'>Cancel</button>
                        <button onClick={() => LogOutLast()} className='logOutModal-btns-btn'>OK</button>
                    </div>
                </div>
                {logOut && <div className='overlayLogOut'></div>}
            </div>

            <Outlet context={haveAcc}></Outlet>
        </div>
    )
};

export default MyProfile;
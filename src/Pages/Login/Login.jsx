import '../Login/Login.css';
import SiteLogo from '../../assets/Images/Frame.png';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="loginCont">
            <img className='siteLogoLogin' src={SiteLogo} alt="" />
            <div className="signInCont">
                <p className='signInMention'>Sign in</p>
                <div className="signInBoxWithBtn">
                    <div className="inputBoxSignIn">
                        <p className='emailBeforeInput' htmlFor="">Email</p>
                        <input className='signInput' type="text" />
                    </div>
                    <button className='signContinue'>Continue</button>
                </div>
                <p className='LoginPrivacyMention'>By filling the form you agree our Conditions of Use and Privacy Policy</p>
            </div>

            <div className="loginLineBetween">
                <div className='lineLogin'></div>
                <p className='newToSeedra'>New to Seedra?</p>
                <div className='lineLogin'></div>
            </div>

            <button onClick={()=>navigate('/register')} className="createAccountMainBtn">Create Seedra account</button>
        </div>
    )
};

export default Login;
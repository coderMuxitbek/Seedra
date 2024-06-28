import '../Register/Register.css';
import SiteLogo from '../../assets/Images/Frame.png';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import RegisterInputs from '../../Components/RegisterInputs/RegisterInputs';

const Register = () => {
    const navigate = useNavigate();

    const btnNavigate = () => {
        navigate("/login")
    }

    return (
        <>
            <div className="registerCont">
                <img className='siteLogoLogin' src={SiteLogo} alt="" />
                <div className="registerBox">
                    <p className='registerMention'>Create account</p>

                    <RegisterInputs />

                    <p className='registerPrivacyMention'>By filling the form you agree our Conditions of Use and Privacy Policy</p>

                    <div className="haveAccBox">
                        <p className='haveAccMention'>Already have an account?</p>
                        <p onClick={btnNavigate} className='backToSignIn'>Sign In</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Register;
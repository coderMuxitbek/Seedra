import { useState } from 'react';
import '../RegisterInputs/RegisterInputs.css';
import { useNavigate } from 'react-router-dom';

const RegisterInputs = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: '',
    })

    const InputRegister = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const [pro, setPro] = useState({})

    const RegisterButton = () => {
        setPro(CheckInputValue(state))
        localStorage.setItem("obj", JSON.stringify(state))
        navigate("/myProfile")
    }

    const CheckInputValue = (obj) => {
        const err = {};
        const chechingConst = {
            name: /^\w{2,}$/,
            email: /^\w+@\w{4,5}\.\w{2,3}$/,
            password: /^\w{6,}$/,
            rePassword: /^\w{8,}$/
        }

        if (!chechingConst.name.test(obj.name)) {
            err.name = 'wrong name';
        }

        if (!chechingConst.email.test(obj.email)) {
            err.email = 'wrong email';
        }

        if (!chechingConst.password.test(obj.password)) {
            err.password = 'wrong password';
        }

        if (obj.rePassword !== obj.password) {
            err.rePassword = 'wrong rePassword';
        }

        return err;
    }

    return (
        <div className='RegInputCont'>
            <div className="registerInputsBox">
                <div className="registerInput">
                    <p>Your name</p>
                    <input onChange={InputRegister} name='name' type="text" />
                    {pro.name && <p className='error-text'>not correct name</p>}
                </div>

                <div className="registerInput">
                    <p>Email</p>
                    <input onChange={InputRegister} name='email' type="text" />
                    {pro.email && <p className='error-text'>not correct email</p>}
                </div>

                <div className="registerInput">
                    <p>Password</p>
                    <input onChange={InputRegister} name='password' type="text" placeholder='At least 6 characters' />
                    {pro.password ? <p className='error-text'>not correct password</p> : <p id='mentionCharacters'>Passwords must be at least 6 characters</p>}

                </div>

                <div className="registerInput">
                    <p>Re-enter password</p>
                    <input onChange={InputRegister} name='rePassword' type="text" />
                    {pro.rePassword && <p className='error-text'>Passwords did not match</p>}
                </div>
            </div>

            <button onClick={RegisterButton} className='registerContinueBtn'>Continue</button>
        </div>
    )
};

export default RegisterInputs;
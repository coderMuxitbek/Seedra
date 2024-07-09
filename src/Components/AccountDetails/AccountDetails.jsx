import '../AccountDetails/AccountDetails.scss';
import { useState, useEffect } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { useOutletContext } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const AccountDetails = () => {
    const context = useOutletContext();
    console.log(context);
    // const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    // const [userMessage, setUserMessage] = useState("")

    const [user, setUser] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
        country: "",
        city: "",
        address: "",
    });

    useEffect(() => {
        const userName = localStorage.getItem("userName");
        const userEmail = localStorage.getItem("userEmail");
        const userMessage = localStorage.getItem("userMessage");
        const userPhone = localStorage.getItem("userPhone");
        const userCountry = localStorage.getItem("userCountry");
        const userAddress = localStorage.getItem("userAddress");
        const userCity = localStorage.getItem("userCity");

        if (userName) setUser((prev) => {
            return { ...prev, name: userName }
        });

        if (userEmail) {
            setUser((prev) => {
                return { ...prev, email: userEmail }
            })
            setUserEmail(userEmail)
        }

        if (userMessage) setUser((prev) => {
            return { ...prev, message: userMessage }
        })

        if (userPhone) setUser((prev) => {
            return { ...prev, phone: userPhone }
        })

        if (userCountry) setUser((prev) => {
            return { ...prev, country: userCountry }
        })

        if (userAddress) setUser((prev) => {
            return { ...prev, address: userAddress }
        })

        if (userCity) setUser((prev) => {
            return { ...prev, city: userCity }
        })

    }, [])

    const EditOnchange = (e) => {
        const { name, value } = e.target;

        setUser((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const SaveChanges = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userMessage");

        if (user.name) localStorage.setItem("userName", user.name);
        if (user.email) {
            localStorage.setItem("userEmail", user.email);
            setUserEmail(localStorage.getItem("userEmail"))
        }
        if (user.message) localStorage.setItem("userMessage", user.message);
        if (user.country) localStorage.setItem("userCountry", user.country)
        if (user.phone) localStorage.setItem("userPhone", user.phone);
        if (user.city) localStorage.setItem("userCity", user.city);
        if (user.address) localStorage.setItem("userAddress", user.address);
    }


    return (
        <div className="personFirstContainer">
            {context ? <div className="personInfoAddressBox">
                <div className="personInfoBox">
                    <p className='personInfoBox-mention'>Personal info</p>

                    <div className="personInfoBox-inputs">
                        <div className="personInfoBox-inputs-nameBox">
                            <label className='personInfoBox-inputs-nameBox-label' htmlFor="">Name</label>
                            <input value={user.name} onChange={EditOnchange} name='name' className='personInfoBox-inputs-nameBox-input' type="text" placeholder='Your name' />
                        </div>

                        <div className="personInfoBox-inputs-numberBox">
                            <label className='personInfoBox-inputs-numberBox-label' htmlFor="">Email Address</label>
                            <input value={user.email} onChange={EditOnchange} name='email' className='personInfoBox-inputs-numberBox-input' type="email" placeholder='Your number' />
                        </div>
                    </div>
                </div>

                <div className="personAddressBox">
                    <p className='personAddressBox-mention'>Address</p>

                    <div className="personAddressBox-inputs">
                        <div className="personAddressBox-inputs-stateCity">
                            <div className="personAddressBox-inputs-stateCity-state">
                                <label className='personAddressBox-inputs-stateCity-state-label' htmlFor="">Country</label>
                                <input value={user.country} onChange={EditOnchange} name='country' className='personAddressBox-inputs-stateCity-state-input' type="text" placeholder='Name of country' />
                            </div>

                            <div className="personAddressBox-inputs-stateCity-city">
                                <label className='personAddressBox-inputs-stateCity-city-label' htmlFor="">City</label>
                                <input value={user.city} onChange={EditOnchange} name='city' className='personAddressBox-inputs-stateCity-city-input' type="text" placeholder='Name of city' />
                            </div>
                        </div>

                        <div className="personAddressBox-inputs-streetZIP">
                            <div className="personAddressBox-inputs-streetZIP-street">
                                <label htmlFor="">Address</label>
                                <input value={user.address} onChange={EditOnchange} name='address' type="text" placeholder='Street and home number' />
                            </div>

                            <div className="personAddressBox-inputs-streetZIP-ZIP">
                                <label htmlFor="">Phone Number</label>
                                <input value={user.phone} onChange={EditOnchange} name='phone' type="text" placeholder='Enter your phone number' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="myEmail">
                    <div className="myEmail-myEmail2">
                        <p className='myEmail-myEmail2-mention'>My Email Address</p>

                        <div className="myEmail-myEmail2-emailImgBox">
                            <div className="myEmail-myEmail2-emailImgBox-imgBox">
                                <p><MailIcon sx={{ color: "#359740" }}></MailIcon></p>
                            </div>

                            <div className="myEmai-myEmail2l-emailImgBox-emailBox">
                                <p className='myEmail-myEmail2-emailImgBox-emailBox-email'>{userEmail}</p>
                                <p className='myEmail-myEmail2-emailImgBox-emailBox-date'>1 month ago</p>
                            </div>
                        </div>
                    </div>

                    <button onClick={SaveChanges} className='myEmail-changeBtn'>Save changes</button>
                </div>

            </div> : <div className='NoProfileDetails'>
                <p className='NoProfileDetails-text'>We don't have any profile details of you</p>
                <NavLink to={"/contact"} className='NoProfileDetails-link'>Want to have a profile</NavLink>
            </div>}

        </div>

    )
};

export default AccountDetails;
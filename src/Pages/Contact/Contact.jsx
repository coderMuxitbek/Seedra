import '../Contact/Contact.scss';
import PhoneIcon from '../../assets/Images/contactImages/Frame 187.png';
import MailIcon from '../../assets/Images/contactImages/Frame 188.png';
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className='contactCont'>
            <div className="mainMail">
                <div className="mainMail-mention">
                    <p className='mainMail-mention-main'>Contact us</p>
                    <p className='mainMail-mention-text'>Send for us your request and we will get in touch with you as soon as possible</p>
                </div>

                <div className="mainMail-phoneAndMailBox">
                    <div className="mainMail-phoneAndMailBox-phoneBox">
                        <img className='mainMail-phoneAndMailBox-phoneBox-img' src={PhoneIcon} alt="" />
                        <p className='mainMail-phoneAndMailBox-phoneBox-number'>+998 33 232 34 34</p>
                    </div>

                    <div className="mainMail-phoneAndMailBox-mailBox">
                        <img className='mainMail-phoneAndMailBox-mailBox-img' src={MailIcon} alt="" />
                        <p className='mainMail-phoneAndMailBox-mailBox-mail'>mailmail@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="mainRequests">
                <div className="mainRequests-inputs">
                    <div className="mainRequests-inputs-nameBox">
                        <label className='mainRequests-inputs-nameBox-label' htmlFor="">Name</label>
                        <input className='mainRequests-inputs-nameBox-input' type="text" placeholder='Your name' />
                    </div>

                    <div className="mainRequests-inputs-nameBox">
                        <label className='mainRequests-inputs-nameBox-label' htmlFor="">E-mail</label>
                        <input className='mainRequests-inputs-nameBox-input' type="text" placeholder='Your email' />
                    </div>

                    <div className="mainRequests-inputs-messageBox">
                        <label className='mainRequests-inputs-messageBox-label' htmlFor="">Message</label>
                        <input className='mainRequests-inputs-messageBox-input' type="text" placeholder='Your message' />
                    </div>
                </div>

                <div className="mainRequests-confirmBox">
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ y: -2 }} transition={{ duration: 1, times: [0] }}   className='mainRequests-confirmBox-button'>Send request</motion.button>
                    <p className='mainRequests-confirmBox-privacyText'>By sending request you agree to out Pivacy&Policy</p>
                </div>
            </div>
        </div>
    )
};

export default Contact; 
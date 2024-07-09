import './CheckoutPersonal.scss';

const CheckoutPersonal = ({PersonOnchange}) => {
    return (
        <div className="personInfoAddressBox">
            <div className="personInfoBox">
                <p className='personInfoBox-mention'>Personal info</p>

                <div className="personInfoBox-inputs">
                    <div className="personInfoBox-inputs-nameBox">
                        <label className='personInfoBox-inputs-nameBox-label' htmlFor="">Name</label>
                        <input name='name' onChange={PersonOnchange} className='personInfoBox-inputs-nameBox-input' type="text" placeholder='Your name' />
                    </div>

                    <div className="personInfoBox-inputs-numberBox">
                        <label className='personInfoBox-inputs-numberBox-label' htmlFor="">Phone number</label>
                        <input name='phone' onChange={PersonOnchange} className='personInfoBox-inputs-numberBox-input' type="text" placeholder='Your number' />
                    </div>
                </div>
            </div>

            <div className="personAddressBox">
                <p className='personAddressBox-mention'>Address</p>

                <div className="personAddressBox-inputs">
                    <div className="personAddressBox-inputs-stateCity">
                        <div className="personAddressBox-inputs-stateCity-state">
                            <label className='personAddressBox-inputs-stateCity-state-label' htmlFor="">State</label>
                            <input name='country' onChange={PersonOnchange} className='personAddressBox-inputs-stateCity-state-input' type="text" placeholder='Name of state' />
                        </div>

                        <div className="personAddressBox-inputs-stateCity-city">
                            <label className='personAddressBox-inputs-stateCity-city-label' htmlFor="">City</label>
                            <input name='city' onChange={PersonOnchange} className='personAddressBox-inputs-stateCity-city-input' type="text" placeholder='Name of city' />
                        </div>
                    </div>

                    <div className="personAddressBox-inputs-streetZIP">
                        <div className="personAddressBox-inputs-streetZIP-street">
                            <label htmlFor="">Address</label>
                            <input name='address' onChange={PersonOnchange} type="text" placeholder='Street and home number' />
                        </div>

                        <div className="personAddressBox-inputs-streetZIP-ZIP">
                            <label htmlFor="">ZIP code</label>
                            <input type="text" placeholder='ZIP code' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CheckoutPersonal;
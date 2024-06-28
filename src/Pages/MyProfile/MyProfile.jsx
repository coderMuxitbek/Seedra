import { useEffect, useState } from 'react';
import '../MyProfile/MyProfile.scss';

const MyProfile = () => {
    const [obj, setObj] = useState({
        name: "",
        email: "",
    });

    const GetObj = () => {
        const yyy = localStorage.getItem("obj")
        if (yyy) {
            setObj((prev) => yyy)
        } else {
            console.log('not working');
        }
    }

    useEffect(() => {
        GetObj()
    }, [])

    console.log(obj);

    return (
        <div className='myProfile'>
            <div className="accEditBox">
                <div className="accEditBox-accBox">
                    <img className='accEditBox-accBox-img' src="" alt="accImage" />
                    {obj.name ? <div className="nameAcc">
                        <p>{obj.name}</p>
                        <p>{obj.email}lala</p>
                    </div>: <p>try again</p>}
                </div>
            </div>
        </div>
    )
};

export default MyProfile;
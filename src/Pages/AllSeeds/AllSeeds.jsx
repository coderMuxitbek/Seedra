import '../AllSeeds/AllSeeds.scss';
import SearchIcon from '../../assets/Images/icon_search.png';
import MainNavBtn from '../../Components/MainNavBtn/MainNavBtn';
import HeadProducts from '../../Components/HeadProducts/HeadProducts';
import { useEffect, useState } from 'react';
import { useGetAllDataQuery } from '../../toolkit/Seeds/SeedsApi';
import { saveDataToState, updateFilteredData } from '../../toolkit/Seeds/SeedsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../Components/Filter/Filter';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Star from '../../assets/Images/Vector (3).png';
import { useNavigate } from 'react-router-dom';


const AllSeeds = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { data, isLoading } = useGetAllDataQuery();
    const { filteredData, originalData } = useSelector((state) => state.SeedsSlice);
    const [openFilter, setOpenFilter] = useState(false)

    useEffect(() => {
        if (!isLoading) {
            dispatch(saveDataToState(data))
        }
    }, [data]);

    const [inputData, setInputData] = useState({
        typeOfPlant: 'ALL',
        price: [0, 100],
    });

    const handleChange = (event, newValue) => {
        setInputData((prev) => ({ ...prev, price: newValue }));
    };

    const InputHandler = (type, name) => {
        setInputData((prev) => {
            return { ...prev, [type]: name }
        });

        setOpenFilter(true)
    }

    const FilterHandler = () => {
        let tempData = [...originalData];

        tempData = originalData.filter((product) => Number(product.price) >= inputData.price[0] && Number(product.price) <= inputData.price[1])

        if (inputData.typeOfPlant !== 'ALL') {
            tempData = originalData.filter((item) => item.typeOfPlant === inputData.typeOfPlant)
        }
        dispatch(updateFilteredData(tempData));
    };

    useEffect(() => {
        FilterHandler()
    }, [inputData.typeOfPlant]);
    return (
        <div className='AllSeeds'>
            {/* <div className="allSeedsSearch">
                <img className='allSeedsSearch-img' src={SearchIcon} alt="" />
                <input className='allSeedsSearch-input' type="text" placeholder='Search' />
            </div> */}

            <div className="filterBtn">
                <MainNavBtn FilterHandler={FilterHandler} InputHandler={InputHandler} />
            </div>

            <div className="productsTwinBox">
                {/* <Filter openFilter={openFilter} inputData={inputData} handleChange={handleChange} /> */}
                <div className="filterProducts">
                    {filteredData.map((item, i) => {
                        return <div key={i} className='filterProducts-prod'>
                            <img onClick={() => navigate(`/eachProduct/${item.id}`)} className='filterProducts-prod-image' src={item.image} alt="" />
                            <div className="filterProducts-prod-aboutItem">
                                <div className="filterProducts-prod-aboutItem-textStars">
                                    <div className="filterProducts-prod-aboutItem-textStars-stars">
                                        <div className="filterProducts-prod-aboutItem-textStars-starsBox">
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                            <img src={Star} alt="" />
                                        </div>
                                        <p>(135)</p>
                                    </div>
                                    <p style={{ cursor: 'pointer' }} onClick={() => navigate(`/eachProduct/${item.id}`)} className='filterProducts-prod-aboutItem-text'>{item.text}</p>

                                </div>

                                <div className="filterProducts-prod-aboutItem-btnBox">
                                    <p className='filterProducts-prod-aboutItem-btnBox-price'>${item.price}</p>
                                    <p className='filterProducts-prod-aboutItem-btnBox-cartImg'>  <ShoppingCartOutlinedIcon sx={{ color: "#359740" }}></ShoppingCartOutlinedIcon></p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
};

export default AllSeeds;
import '../AllSeeds/AllSeeds.scss';
import SearchIcon from '../../assets/Images/icon_search.png';
import MainNavBtn from '../../Components/MainNavBtn/MainNavBtn';
import HeadProducts from '../../Components/HeadProducts/HeadProducts';
import { useEffect, useState } from 'react';
// import { useGetAllDataQuery } from '../../toolkit/Seeds/SeedsApi';
import { saveDataToState, updateFilteredData, putCart } from '../../toolkit/Seeds/SeedsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../Components/Filter/Filter';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Star from '../../assets/Images/Vector (3).png';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const AllSeeds = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // const { data, isLoading } = useGetAllDataQuery();
    const { filteredData, originalData } = useSelector((state) => state.SeedsSlice);
    const cartData = useSelector((state) => state.SeedsSlice.cart)
    console.log(cartData);
    const [openFilter, setOpenFilter] = useState(false);
    const [boxPlan, setBoxPlan] = useState(false);
    const [noMatchedProducts, setNoMatchedProducts] = useState(false);

    // useEffect(() => {
    //     if (!isLoading) {
    //         dispatch(saveDataToState(data))
    //     }
    // }, [data]);

    const [inputData, setInputData] = useState({
        typeOfPlant: 'ALL',
        seedType: "",
        mainFeatures: "",
        sunlight: "",
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

        tempData = tempData.filter((product) => Number(product.price) >= inputData.price[0] && Number(product.price) <= inputData.price[1])

        if (inputData.typeOfPlant !== 'ALL') {
            tempData = tempData.filter((item) => item.typeOfPlant === inputData.typeOfPlant)
        }

        if (inputData.seedType) {
            tempData = tempData.filter((item) => item.seedType === inputData.seedType)
        }

        if (inputData.mainFeatures) {
            tempData = tempData.filter((item) => item.mainFeatures === inputData.mainFeatures)
        }

        if (inputData.sunlight) {
            tempData = tempData.filter((item) => item.sunlight === inputData.sunlight)
        }

        dispatch(updateFilteredData(tempData));

    };

    useEffect(() => {
        FilterHandler()
    }, [inputData.seedType, inputData.mainFeatures, inputData.typeOfPlant, inputData.sunlight, inputData.price]);

    const [cartItem, setCartItem] = useState([]);
    const [doneCart, setDoneCart] = useState(false);

    const AddCart = async (product) => {
        const existing = cartItem.find((item) => item.id === product.id)

        if (existing) {
            // const itemExist = cartData.find((item) => item.id === product.id);
            dispatch(putCart({...existing, qty: existing.qty + 1}));
            // await axios.patch(`http://localhost:3000/cart/${existing.id}`, { ...existing, qty: existing.qty + 1 });
            const newItem = cartItem.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
            setCartItem((prev) => [...prev, newItem])
        } else {
            dispatch(putCart({ ...product, qty: 1 }))
            // await axios.post("http://localhost:3000/cart", { ...product, qty: 1 });
            setCartItem((prev) => {
                return [...prev, { ...product, qty: 1 }]
            });
        }

        // const { data } = await axios.get("http://localhost:3000/cart");

        // if (data.find((item) => item.id === product.id)) {
        //     setDoneCart(true)
        // } else {
        //     setDoneCart(false)
        // }
    }

    // pagination
    const [page, setPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    const ChangePagination = (event, value) => {
        setPage(value);
    };

    const lastIndex = page * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    const pages = Math.ceil(filteredData.length / postsPerPage);

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
                {!boxPlan && <div className="filterBoxPlan">
                    <Filter openFilter={openFilter} inputData={inputData} handleChange={handleChange} InputHandler={InputHandler} />
                </div>}

                <div onClick={() => setBoxPlan((prev) => !prev)} className="OpenFilterBtn">
                    <p className='OpenFilterBtn-mention'>FILTERS</p>
                    <p className='OpenFilterBtn-img'><KeyboardArrowDownIcon></KeyboardArrowDownIcon></p>
                </div>

                <div className="filterWhenPag">
                    <div className="filterProducts">
                        {filteredData.slice(firstIndex, lastIndex).map((item, i) => {
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

                                    <p>{item.mainFeatures}</p>
                                    <p>{item.seedType}</p>
                                    <p>{item.sunlight}</p>

                                    <div className="filterProducts-prod-aboutItem-btnBox">
                                        <p className='filterProducts-prod-aboutItem-btnBox-price'>${item.price}</p>
                                        <p className='filterProducts-prod-aboutItem-btnBox-cartImg'>  <ShoppingCartOutlinedIcon onClick={() => AddCart(item)} sx={{ color: "#359740" }}></ShoppingCartOutlinedIcon></p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>




                    <div className="pagProducts">
                        <Stack spacing={2}>
                            <Typography>Page: {page}</Typography>
                            <Pagination size='large' count={pages} page={page} onChange={ChangePagination} />
                        </Stack>
                    </div>


                </div>



            </div>
        </div>
    )
};

export default AllSeeds;
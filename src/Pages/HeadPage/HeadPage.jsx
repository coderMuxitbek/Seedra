import '../HeadPage/HeadPage.scss';
import Nav from '../../Components/Nav/Nav';
import Head from '../../Components/Head/Head';
import ProdTypes from '../../Components/ProdTypes/ProdTypes';
import HeadProducts from '../../Components/HeadProducts/HeadProducts';
import { useEffect, useState } from 'react';
// import { useGetAllDataQuery } from '../../toolkit/Seeds/SeedsApi';
import { saveDataToState, updateFilteredData } from '../../toolkit/Seeds/SeedsSlice';
import { useDispatch, useSelector } from 'react-redux';

const HeadPage = () => {
    const dispatch = useDispatch();
    // const { data, isLoading } = useGetAllDataQuery();
    const { filteredData, originalData } = useSelector((state) => state.SeedsSlice);
    const [openFilter, setOpenFilter] = useState(false)

    // useEffect(() => {
    //     if (!isLoading) {
    //         dispatch(saveDataToState(data))
    //     }
    // }, [data]);

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
        <>
            <Head />
            <HeadProducts openFilter={openFilter} inputData={inputData} handleChange={handleChange} InputHandler={InputHandler} FilterHandler={FilterHandler} filteredData={filteredData} />
        </>
    )
};

export default HeadPage;
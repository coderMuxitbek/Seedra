import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import HeadPage from './Pages/HeadPage/HeadPage';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';
import { useGetAllDataQuery } from './toolkit/Seeds/SeedsApi';
import { saveDataToState, updateFilteredData } from './toolkit/Seeds/SeedsSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
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
    navigate("/allSeeds")
    setOpenMenu((prev)=> !prev)
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
      <Nav setOpenMenu={setOpenMenu} openMenu={openMenu} InputHandler={InputHandler}  FilterHandler={FilterHandler}/>
      <div className="BiggestParent">
        <div className="appCont">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

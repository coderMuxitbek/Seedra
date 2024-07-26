import '../ProdTypes/ProdTypes.scss';
import { prodTypes } from '../../data';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const ProdTypes = ({ InputHandler, handleChange, FilterHandler, inputData }) => {

    return (
        <>
            <div className="prodTypesBiggest">
                <div className="prods" >
                    <div className="priceShowBtns">
                        <p className='priceShowBtn'>${inputData.price[0]}</p>
                        <span>-</span>
                        <p className='priceShowBtn'>${inputData.price[1]}</p>
                    </div>

                    <div className="sliderPriceBox">
                        <div className="sliderIt">
                            <Box sx={{ width: 185 }}>
                                <Slider
                                    color="success"
                                    getAriaLabel={() => 'Temperature range'}
                                    value={inputData.price}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto" />
                            </Box>
                        </div>

                        <button onClick={FilterHandler} className='GoBtn'>Go</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProdTypes;
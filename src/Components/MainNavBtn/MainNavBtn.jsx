import React, { useState } from 'react';
import "../MainNavBtn/MainNavBtn.css";
import { prodTypes } from '../../data';
import { useEffect } from 'react';

const MainNavBtn = ({ inputData, InputHandler, filteredData, FilterOpen }) => {

    return (
        <div className='MainNavBtn'>
            {prodTypes.map((prodType) => {
                return <button
                    className='productChooseCont'
                    key={prodType.name}
                    onClick={() => InputHandler('typeOfPlant', prodType.name)}>
                    <img className='productChooseImage' src={prodType.image} alt="" />
                    <span className='productChooseBtn' >{prodType.name}</span>
                </button>
            })}
        </div>
    )
}

export default MainNavBtn;
import '../Filter/Filter.scss';
import { useState } from 'react';
import ProdTypes from "../ProdTypes/ProdTypes";

const Filter = ({openFilter, inputData, handleChange, FilterHandler}) => {
    const [openSeed, setOpenSeed] = useState(false);
    const [openFeatues, setOpenFeatues] = useState(false);
    const [sun, setSun] = useState(false);
    
    return (
        <div className={openFilter ? "productFilters prodTypesActive" : "productFilters"}>
            <p className="productFilters-mention">FILTERS</p>

            <div className="productFilters-seedTypes">
                <p style={{ cursor: "pointer" }} onClick={() => setOpenSeed((prev) => !prev)} className="productFilters-seedTypes-mention">Seed type</p>
                <div className={openSeed ? "productFilters-seedTypes-options optionsOpen" : "productFilters-seedTypes-options"}>
                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Hybrid</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Open Pollinated</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Organic Seeds, Plants, and Supplies</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Pelleted See</label>
                    </div>

                </div>
            </div>

            <div className="productFilters-seedTypes">
                <p style={{ cursor: "pointer" }} onClick={() => setOpenFeatues((prev) => !prev)} className="productFilters-seedTypes-mention">Features</p>
                <div className={openFeatues ? "productFilters-seedTypes-options optionsOpen" : "productFilters-seedTypes-options"}>
                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Air Purification</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Attracts Pollinators</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Drought Tolerant</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Extended Bloom Time</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">High Germination Rate</label>
                    </div>

                </div>
            </div>

            <div className="productFilters-seedTypes">
                <p style={{ cursor: "pointer" }} onClick={() => setSun((prev) => !prev)} className="productFilters-seedTypes-mention">Sunlight Exposure</p>
                <div className={sun ? "productFilters-seedTypes-options optionsOpen" : "productFilters-seedTypes-options"}>
                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Full Shade</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Full Sun</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Partial Shade</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input type="radio" name="seedType" />
                        <label htmlFor="">Partial Sun</label>
                    </div>

                </div>
            </div>

            <ProdTypes openFilter={openFilter} inputData={inputData} handleChange={handleChange} FilterHandler={FilterHandler} />
        </div>
    )
};

export default Filter;
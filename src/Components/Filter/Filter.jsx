import '../Filter/Filter.scss';
import { useState } from 'react';
import ProdTypes from "../ProdTypes/ProdTypes";

const Filter = ({ inputData, handleChange, FilterHandler, InputHandler }) => {
    const [openSeed, setOpenSeed] = useState(false);
    const [openFeatues, setOpenFeatues] = useState(false);
    const [sun, setSun] = useState(false);

    return (
        <div className="productFilters">
            <p className="productFilters-mention">FILTERS</p>

            <div className="productFilters-seedTypes">
                <p style={{ cursor: "pointer" }} onClick={() => setOpenSeed((prev) => !prev)} className="productFilters-seedTypes-mention">Seed type</p>

                <div className={openSeed ? "productFilters-seedTypes-options optionsOpen" : "productFilters-seedTypes-options"}>
                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("seedType", e.target.value)} value="Hybrid" type="radio" name="seedType" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Hybrid</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("seedType", e.target.value)} value="Open Pollinated" type="radio" name="seedType" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Open Pollinated</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("seedType", e.target.value)} value="Organic" type="radio" name="seedType" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Organic Seeds, Plants, and Supplies</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("seedType", e.target.value)} value="Pelleted" type="radio" name="seedType" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Pelleted Seeds</label>
                    </div>

                </div>
            </div>

            <div className="productFilters-seedTypes">
                <p style={{ cursor: "pointer" }} onClick={() => setOpenFeatues((prev) => !prev)} className="productFilters-seedTypes-mention">Features</p>
                <div className={openFeatues ? "productFilters-seedTypes-options optionsOpen" : "productFilters-seedTypes-options"}>
                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("mainFeatures", e.target.value)} value="Air Purification" type="radio" name="mainFeatures" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Air Purification</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("mainFeatures", e.target.value)} value="Attracts Pollinators" type="radio" name="mainFeatures" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Attracts Pollinators</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("mainFeatures", e.target.value)} value="Drought Tolerant" type="radio" name="mainFeatures" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Drought Tolerant</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("mainFeatures", e.target.value)} value="Extended Bloom Time" type="radio" name="mainFeatures" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Extended Bloom Time</label>
                    </div>
                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("mainFeatures", e.target.value)} value="High Germination Rate" type="radio" name="mainFeatures" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">High Germination Rate</label>
                    </div>
                </div>
            </div>

            <div className="productFilters-seedTypes">
                <p style={{ cursor: "pointer" }} onClick={() => setSun((prev) => !prev)} className="productFilters-seedTypes-mention">Sunlight Exposure</p>
                <div className={sun ? "productFilters-seedTypes-options optionsOpen" : "productFilters-seedTypes-options"}>
                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("sunlight", e.target.value)} value="Full Shade" type="radio" name="sunlight" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Full Shade</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("sunlight", e.target.value)} value="Full Sun" type="radio" name="sunlight" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Full Sun</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("sunlight", e.target.value)} value="Partial Shade" type="radio" name="sunlight" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Partial Shade</label>
                    </div>

                    <div className="productFilters-seedTypes-options-optionRadio">
                        <input onClick={(e) => InputHandler("sunlight", e.target.value)} value="Partial Sun" type="radio" name="sunlight" />
                        <label className='productFilters-seedTypes-options-optionRadio-label' htmlFor="">Partial Sun</label>
                    </div>
                </div>
            </div>

            <ProdTypes inputData={inputData} handleChange={handleChange} FilterHandler={FilterHandler} />
        </div>
    )
};

export default Filter;
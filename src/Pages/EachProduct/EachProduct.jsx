import '../EachProduct/EachProduct.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import Round from '../../assets/Images/Ellipse 6.png';
import { prodTypes } from '../../data';
import { useSelector } from 'react-redux';

const EachProduct = () => {
    const data = useSelector((state) => state.SeedsSlice.originalData)
    const [mainData, setMainData] = useState(data)
    let { productId } = useParams();
    // const [cartData, setCartData] = useState([]);

    // const AddCart = async (product) => {
    //     const existing = cartData.find((item) => item.id === product.id);
    //     await axios.patch(`http://localhost:3000/cart/${existing.id}`, { ...existing, qty: product.qty + 1 });
    //     setCartData((prev) => [...prev, { ...existing, qty: product.qty + 1 }])
    //     console.log("working");
    //     fetchdata()
    // }

    // const RemoveCart = async (product) => {
    //     const existing = cartData.find((item) => item.id === product.id);
    //     await axios.patch(`http://localhost:3000/cart/${existing.id}`, { ...existing, qty: product.qty - 1 });
    //     setCartData((prev) => [...prev, { ...existing, qty: product.qty + 1 }])
    //     fetchdata()
    // }

    // const fetchdata = async () => {
    //     const { data } = await axios.get("http://localhost:3000/cart");
    //     setCartData(data)
    // }
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = () => {
            const matching = mainData.find((item) => item.id === productId);
            setProduct(matching);
        };

        fetchProductDetails();
    }, [productId, mainData]);

    useEffect(() => {
        console.log('Updated product:', product);
    }, [product]);

    return (
        <div className='eachProductPage'>
            {product && <div className="productBox">
                <div className="productBox-imgBox">
                    <img className='productBox-imgBox-img' src={product.image} alt="" />
                </div>

                <div className="productBox-packsBox">
                    <div className="productBox-packsBox-mainTextBox">
                        <p className='productBox-packsBox-mainTextBox-mainText'>{product.text}</p>
                        <div className="productBox-packsBox-mainTextBox-btns">
                            <button className='productBox-packsBox-mainTextBox-btns-available'>   <DoneIcon></DoneIcon> <span>AVAILABLE</span></button>
                            <button className='productBox-packsBox-mainTextBox-btns-typePlant'>
                                {/* <img src={} alt="" /> */}
                                <span>{product.typeOfPlant}</span>
                            </button>
                        </div>
                    </div>

                    <div className="allPacks">
                        <div className="allPacks-sizeQty">
                            <div className="allPacks-sizeQty-size">
                                <p className='allPacks-sizeQty-size-mention'>Size</p>
                                <p className='allPacks-sizeQty-size-text'>{product.qty} PACK</p>
                            </div>

                            <div className="allPacks-sizeQty-btnBox">
                                <span className='allPacks-sizeQty-btnBox-minus'>-</span>
                                <p className='allPacks-sizeQty-btnBox-number'>2</p>
                                <span style={{ cursor: 'pointer' }} onClick={() => AddCart(product)} className='allPacks-sizeQty-btnBox-plus'>+</span>
                            </div>
                        </div>

                        <div className="allPacks-addCartBox">
                            <div className="allPacks-addCartBox-price">
                                <p className='allPacks-addCartBox-price-old'>$15.56</p>
                                <p className='allPacks-addCartBox-price-new'>$12.56</p>
                            </div>

                            <button className="allPacks-addCartBox-btn">Add to cart</button>
                        </div>

                        {/* <div className="allPacks-numberOfPacks">
                            <div className='allPacks-numberOfPacks-packDiv'>
                                <div className="allPacks-numberOfPacks-packDiv-numberDiv">
                                    <input name='packs' className="allPacks-numberOfPacks-packDiv-numberDiv-img" type='radio' alt="" />
                                    <p className='allPacks-numberOfPacks-packDiv-numberDiv-number'>1 pack</p>
                                </div>

                                <p className="allPacks-numberOfPacks-packDiv-startFrom">start from $12.56</p>
                            </div>

                            <div className='allPacks-numberOfPacks-packDiv'>
                                <div className="allPacks-numberOfPacks-packDiv-numberDiv">
                                    <input name='packs' className="allPacks-numberOfPacks-packDiv-numberDiv-img" type='radio' alt="" />
                                    <p className='allPacks-numberOfPacks-packDiv-numberDiv-number'>2 pack</p>
                                </div>

                                <p className="allPacks-numberOfPacks-packDiv-startFrom">start from $12.56</p>
                            </div>

                            <div className='allPacks-numberOfPacks-packDiv'>
                                <div className="allPacks-numberOfPacks-packDiv-numberDiv">
                                    <input name='packs' className="allPacks-numberOfPacks-packDiv-numberDiv-img" type='radio' alt="" />
                                    <p className='allPacks-numberOfPacks-packDiv-numberDiv-number'>3 pack</p>
                                </div>

                                <p className="allPacks-numberOfPacks-packDiv-startFrom">start from $12.56</p>
                            </div>

                            <div className='allPacks-numberOfPacks-packDiv'>
                                <div className="allPacks-numberOfPacks-packDiv-numberDiv">
                                    <input name='packs' className="allPacks-numberOfPacks-packDiv-numberDiv-img" type='radio' alt="" />
                                    <p className='allPacks-numberOfPacks-packDiv-numberDiv-number'>4 pack</p>
                                </div>

                                <p className="allPacks-numberOfPacks-packDiv-startFrom">start from $12.56</p>
                            </div>

                            <div className='allPacks-numberOfPacks-packDiv'>
                                <div className="allPacks-numberOfPacks-packDiv-numberDiv">
                                    <input name='packs' className="allPacks-numberOfPacks-packDiv-numberDiv-img" type='radio' alt="" />
                                    <p className='allPacks-numberOfPacks-packDiv-numberDiv-number'>5 pack</p>
                                </div>

                                <p className="allPacks-numberOfPacks-packDiv-startFrom">start from $12.56</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>}

            {product && <div className="productInfoBox">
                <p className='productInfoBox-mention'>Product information.</p>

                <div className="textDimensions">
                    <p className='textDimensions-text'>{product.text}-
                        <span> contains 300 seeds in 1 Pack and professional instructions created by PhD Helga George</span> <br />
                        <span className='spoPoint'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee </span> <br />
                        <span className='spoPoint'>Cilantro common culinary uses: salsa, guacamole, pesto, salads, chutney, baked breads, pad thai, pico de gallo, rice, grilled shrimp skewers, falafel, and more</span>  <br />
                        <span className='spoPoint'> Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product </span><br />
                        <span className='spoPoint'> SEEDRA customer service - please contact us directly through Amazon with any questions or concerns about our products. We care about each customer and do our best to provide you with 100% satisfaction</span>
                    </p>

                    <div className="textDimensions-dimensionsBox">
                        <div className="textDimensions-dimensionsBox-packageDimensions">
                            <p className='textDimensions-dimensionsBox-packageDimensions-text'>Package Dimensions</p>
                            <p className='textDimensions-dimensionsBox-packageDimensions-result'>5.51 x 3.5 x 0.35 inches</p>
                        </div>

                        <div className="textDimensions-dimensionsBox-packageDimensions middo">
                            <p className='textDimensions-dimensionsBox-packageDimensions-text'>Item Weight</p>
                            <p className='textDimensions-dimensionsBox-packageDimensions-result'>0.317 ounces</p>
                        </div>

                        <div className="textDimensions-dimensionsBox-packageDimensions">
                            <p className='textDimensions-dimensionsBox-packageDimensions-text'>ASIN</p>
                            <p className='textDimensions-dimensionsBox-packageDimensions-result'>B{product.id}MP</p>
                        </div>
                    </div>
                </div>

            </div>}


        </div>
    );
}

export default EachProduct;

import '../EachProduct/EachProduct.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import Round from '../../assets/Images/Ellipse 6.png';
import { prodTypes } from '../../data';
import axios from "axios";

const EachProduct = () => {
    let { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        fetchProductDetails();
        fetchdata();
    }, [productId]);

    const AddCart = async (product) => {
        const existing = cartData.find((item) => item.id === product.id);
        await axios.patch(`http://localhost:3000/cart/${existing.id}`, { ...existing, qty: product.qty + 1 });
        setCartData((prev) => [...prev, { ...existing, qty: product.qty + 1 }])
        console.log("working");
        fetchdata()
    }

    const RemoveCart = async (product) => {
        const existing = cartData.find((item) => item.id === product.id);

        await axios.patch(`http://localhost:3000/cart/${existing.id}`, { ...existing, qty: product.qty - 1 });
        setCartData((prev) => [...prev, { ...existing, qty: product.qty + 1 }])

        fetchdata()
    }

    const fetchdata = async () => {
        const { data } = await axios.get("http://localhost:3000/cart");
        setCartData(data)
    }

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:3000/seeds/${productId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            const productData = await response.json();
            setProduct(productData);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className='eachProductPage'>
            <div className="productBox">
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
                                <span style={{cursor: 'pointer'}} onClick={()=> AddCart(product)} className='allPacks-sizeQty-btnBox-plus'>+</span>
                            </div>
                        </div>

                        <div className="allPacks-numberOfPacks">
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
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EachProduct;

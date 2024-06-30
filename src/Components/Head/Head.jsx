import '../Head/Head.scss';
import { useNavigate } from 'react-router-dom';
import SeedPacket from '../../assets/Images/image 2.png';
import Fire from '../../assets/Images/ant-design_fire-filled.png';
import GreenLives from '../../assets/./Images/close-up-fresh-green-basil-herb-leaves-isolated-white-background 1.png';
import FreshLeaves from '../../assets/Images/fresh-sweet-basil-leaves-isolated-white-background 3.png';
import FreshIsolated from '../../assets/Images/fresh-sweet-basil-leaves-isolated-white-background 2.png';
import MediaGroupLeaves from '../../assets/Images/MediaLeaves/close-up-fresh-green-basil-herb-leaves-isolated-white-background 1 (1).png';
import MediaBottomLeaf from '../../assets/Images/MediaLeaves/fresh-sweet-basil-leaves-isolated-white-background 4.png';
import MediaBiggerLeaf from '../../assets/Images/MediaLeaves/fresh-sweet-basil-leaves-isolated-white-background 1.png';
import MediaMiddleLeaf from '../../assets/Images/MediaLeaves/fresh-sweet-basil-leaves-isolated-white-background 2 (1).png'
import MediaUpperLeaf from '../../assets/Images/MediaLeaves/fresh-sweet-basil-leaves-isolated-white-background 3 (1).png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Head = () => {
    const navigate = useNavigate();

    return (
        <>

            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay, Pagination, Navigation]} className="mySwiper" >
                {/* <SwiperSlide className="headCont">
                    <div className="headCont-twoMainText">
                        <h2 className='headCont-twoMainText-h2'>SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting</h2>
                        <h3 className='headCont-twoMainText-h3'>Be sure of our quality - the freshest batches of this season. Non-GMO,<br /> Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee</h3>
                    </div>

                    <div className="headImages">
                        <img className='seedPacket' src={SeedPacket} alt="" />
                        <img src={GreenLives} alt="" className="greenLives" />
                        <img src={FreshLeaves} alt="" className="freshLeaves" />
                        <img src={FreshIsolated} alt="" className="freshIsolated" />
                    </div>

                    <div className="headCont-pricesAndAddCartBox">
                        <div className="headCont-pricesAndAddCartBox-priceBox">
                            <img className='headCont-pricesAndAddCartBox-priceBox-fireImg' src={Fire} alt="" />
                            <h3 className='headCont-pricesAndAddCartBox-priceBox-newPrice'>$12.56</h3>
                            <h3 className='headCont-pricesAndAddCartBox-priceBox-oldPrice'>$15.56</h3>
                        </div>
                        <div className="headCont-pricesAndAddCartBox-buttonBox">
                            <button onClick={() => navigate("/cart")} className='headCont-pricesAndAddCartBox-buttonBox-add'>Add to card</button>
                            <button className='headCont-pricesAndAddCartBox-buttonBox-discover'>Discover</button>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide className="headCont">
                    <img className='MediaGroupLeaves' src={MediaGroupLeaves} alt="" />
                    <img className='SeedPacket' src={SeedPacket} alt="" />
                    <div className="headCont-priceBox">
                        <img className='headCont-priceBox-fireImg' src={Fire} alt="" />
                        <p className='headCont-priceBox-newPrice'>$12.56</p>
                        <p className='headCont-priceBox-oldPrice'>$15.56</p>
                    </div>

                    <div className="headCont-twoMainText">
                        <h2 className='headCont-twoMainText-h2'>SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting</h2>
                        <h3 className='headCont-twoMainText-h3'>Be sure of our quality - the freshest batches of this season. Non-GMO,<br /> Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee</h3>
                    </div>

                    <div className="headImages">
                        <img className='seedPacket' src={SeedPacket} alt="" />
                        <img src={GreenLives} alt="" className="greenLives" />
                        <img src={FreshLeaves} alt="" className="freshLeaves" />
                        <img src={FreshIsolated} alt="" className="freshIsolated" />
                    </div>

                    <div className="headCont-pricesAndAddCartBox">
                        <div className="headCont-pricesAndAddCartBox-priceBox">
                            <img className='headCont-pricesAndAddCartBox-priceBox-fireImg' src={Fire} alt="" />
                            <h3 className='headCont-pricesAndAddCartBox-priceBox-newPrice'>$12.56</h3>
                            <h3 className='headCont-pricesAndAddCartBox-priceBox-oldPrice'>$15.56</h3>
                        </div>
                        <div className="headCont-pricesAndAddCartBox-buttonBox">
                            <button onClick={() => navigate("/cart")} className='headCont-pricesAndAddCartBox-buttonBox-add'>Add to card</button>
                            <button className='headCont-pricesAndAddCartBox-buttonBox-discover'>Discover</button>
                        </div>
                    </div>

                    <div className="headCont-mediaButtons">
                        <button onClick={() => navigate("/cart")} className='headCont-mediaButtons-add'>Add to card</button>
                        <button className='headCont-mediaButtons-discover'>Discover</button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="inHead">
                <p className="inHead-sell">We sell seeds</p>
                <p className="inHead-sprout">that always sprout and gardening supplies which never break</p>
            </div>
        </>
    )
}
export default Head;
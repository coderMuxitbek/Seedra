import React, { useState } from 'react';
import '../OurBlog/OurBlog.scss';
import LeftLeaf from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 4 (1).png'
import LeftTop from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 2 (2).png'
import RightLeaf from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 1 (1).png'
import RightTop from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 3 (2).png';
import TopRightMedia from '../../assets/Images/fresh-sweet-basil-leaves-isolated-white-background 3 (3).png';
import BottomRightMedia from '../../assets/Images/fresh-sweet-basil-leaves-isolated-white-background 4 (2).png';
import BottomLeftMedia from '../../assets/Images/fresh-sweet-basil-leaves-isolated-white-background 2 (3).png';
import SearchIcon from '../../assets/Images/icon_search.png';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Clock from '../../assets/Images/clock-three.png';
import Herb from '../../assets/Images/image 2 (1).png';
import Strawberry from '../../assets/Images/Ellipse 1.png';
import Girl from '../../assets/Images/female-gardener-holding-wicker-basket-with-strawberries 1.png';
import BlackGirl from '../../assets/Images/BlogMedia/pretty-arab-woman-smiling-happily-with-hand-hip-confident-holding-potted-cactus 1.png';
import CanolaLikeImage from '../../assets/Images/BlogMedia/Ellipse 1 (2).png';
import Granate from '../../assets/Images/BlogMedia/Ellipse 1 (1).png';
import ThreeStrawberry from '../../assets/Images/BlogMedia/image 2 (3).png';

const OurBlog = () => {
    return (
        <div className='ourBlogCont'>
            <div className="welcomeBlog">
                {/* <img className='welcomeBlog-left' src={LeftLeaf} alt="" />
                <img className='welcomeBlog-leftTop' src={LeftTop} alt="" />
                <img className='welcomeBlog-right' src={RightLeaf} alt="" />
                <img className='welcomeBlog-rightTop' src={RightTop} alt="" /> */}
                <img className='welcomeBlog-TopRightMedia' src={TopRightMedia} alt="" />
                <img className='welcomeBlog-BottomRightMedia' src={BottomRightMedia} alt="" />
                <img className='welcomeBlog-BottomLeftMedia' src={BottomLeftMedia} alt="" />
                <p className='welcomeBlog-welcome'>Welcome to our blog</p>
                <p className='welcomeBlog-here'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
            </div>

            <div className="inputSearchBlog">
                <img src={SearchIcon} alt="" />
                <input className='inputSearchBlog-input' type="text" placeholder='Search' />
                <FilterAltIcon></FilterAltIcon>
            </div>

            <div className="herbalBlog">
                <div className="herbalBlog-timeText">
                    <div className="herbalBlog-timeText-timeBox">
                        <img className='herbalBlog-timeText-timeBox-image' src={Clock} alt="" />
                        <p className='herbalBlog-timeText-timeBox-time'>12.09.2021</p>
                    </div>

                    <div className="herbalBlog-timeText-textBox">
                        <p className='herbalBlog-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                        <p className='herbalBlog-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                    </div>
                </div>

                <button className='herbalBlog-btn'>Read</button>
                <img className='herbalBlog-herbImg' src={Herb} alt="" />
            </div>

            <div className="herbalBlog">
                <div className="herbalBlog-timeText">
                    <div className="herbalBlog-timeText-timeBox">
                        <img className='herbalBlog-timeText-timeBox-image' src={Clock} alt="" />
                        <p className='herbalBlog-timeText-timeBox-time'>12.06.2021</p>
                    </div>

                    <div className="herbalBlog-timeText-textBox">
                        <p className='herbalBlog-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                        <p className='herbalBlog-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                    </div>
                </div>

                <button className="herbalBlog-btn">Read</button>
                <img className='girlImgHerb' src={Girl} alt="" />
            </div>

            <div className="herbalBlog">
                <div className="herbalBlog-timeText">
                    <div className="herbalBlog-timeText-timeBox">
                        <img className='herbalBlog-timeText-timeBox-image' src={Clock} alt="" />
                        <p className='herbalBlog-timeText-timeBox-time'>12.06.2021</p>
                    </div>

                    <div className="herbalBlog-timeText-textBox">
                        <p className='herbalBlog-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                        <p className='herbalBlog-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                    </div>
                </div>

                <button className="herbalBlog-btn">Read</button>
                <img className='strawberryImgHerb' src={Strawberry} alt="" />
            </div>

            <div className="herbalBlog">
                <div className="herbalBlog-timeText">
                    <div className="herbalBlog-timeText-timeBox">
                        <img className='herbalBlog-timeText-timeBox-image' src={Clock} alt="" />
                        <p className='herbalBlog-timeText-timeBox-time'>12.06.2021</p>
                    </div>

                    <div className="herbalBlog-timeText-textBox">
                        <p className='herbalBlog-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                        <p className='herbalBlog-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                    </div>
                </div>

                <button className="herbalBlog-btn">Read</button>
                <img className='granateImgHerb' src={Granate} alt="" />
            </div>

            <div className="herbalBlog">
                <div className="herbalBlog-timeText">
                    <div className="herbalBlog-timeText-timeBox">
                        <img className='herbalBlog-timeText-timeBox-image' src={Clock} alt="" />
                        <p className='herbalBlog-timeText-timeBox-time'>12.06.2021</p>
                    </div>

                    <div className="herbalBlog-timeText-textBox">
                        <p className='herbalBlog-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                        <p className='herbalBlog-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                    </div>
                </div>

                <button className="herbalBlog-btn">Read</button>
                <img className='tripleImgHerb' src={ThreeStrawberry} alt="" />
            </div>

            <div className="herbalBlog">
                <div className="herbalBlog-timeText">
                    <div className="herbalBlog-timeText-timeBox">
                        <img className='herbalBlog-timeText-timeBox-image' src={Clock} alt="" />
                        <p className='herbalBlog-timeText-timeBox-time'>12.06.2021</p>
                    </div>

                    <div className="herbalBlog-timeText-textBox">
                        <p className='herbalBlog-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                        <p className='herbalBlog-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                    </div>
                </div>

                <button className="herbalBlog-btn">Read</button>
                <img className='granateImgHerb' src={CanolaLikeImage} alt="" />
            </div>

            <div className="herbalBlog">
                <div className="herbalBlog-timeText">
                    <div className="herbalBlog-timeText-timeBox">
                        <img className='herbalBlog-timeText-timeBox-image' src={Clock} alt="" />
                        <p className='herbalBlog-timeText-timeBox-time'>12.06.2021</p>
                    </div>

                    <div className="herbalBlog-timeText-textBox">
                        <p className='herbalBlog-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                        <p className='herbalBlog-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                    </div>
                </div>

                <button className="herbalBlog-btn">Read</button>
                <img className='blackImgGirl' src={BlackGirl} alt="" />
            </div>
        </div>
    )
};

export default OurBlog;
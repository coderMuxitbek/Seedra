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
import SunglassesGirl from '../../assets/Images/young-pretty-woman-feeling-happy-surprised-realizing-solution-idea-with-straw-hat-holding-cactus 1.png'
import DifferentGrapes from '../../assets/Images/image 8.png';

const OurBlog = () => {
    return (
        <div className='ourBlogCont'>
            <div className="welcomeBlog">
                <img className='welcomeBlog-TopRightMedia' src={TopRightMedia} alt="" />
                <img className='welcomeBlog-BottomRightMedia' src={BottomRightMedia} alt="" />
                <img className='welcomeBlog-BottomLeftMedia' src={BottomLeftMedia} alt="" />
                <p className='welcomeBlog-welcome'>Welcome to our blog</p>
                <p className='welcomeBlog-here'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
            </div>

            <div className="welcomeBlogBig">
                <img className='welcomeBlogBig-left' src={LeftLeaf} alt="" />
                <img className='welcomeBlogBig-leftTop' src={LeftTop} alt="" />
                <img className='welcomeBlogBig-right' src={RightLeaf} alt="" />
                <img className='welcomeBlogBig-rightTop' src={RightTop} alt="" />
                <p className='welcomeBlogBig-welcome'>Welcome to our blog</p>
                <p className='welcomeBlogBig-here'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
            </div>


            <div className="inputSearchBlog">
                <img src={SearchIcon} alt="" />
                <input className='inputSearchBlog-input' type="text" placeholder='Search' />
                <p className='filterIconAlt'> <FilterAltIcon></FilterAltIcon></p>
               
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

            <div className="ourBlogs">
                <div className="ourBlogHeadBlogs">
                    <div className="plants">
                        <div className="plants-herbBlog">
                            <div className="plants-herbBlog-timeText">
                                <div className="plants-herbBlog-timeText-timeBox">
                                    <img className='plants-herbBlog-timeText-timeBox-image' src={Clock} alt="" />
                                    <p className='plants-herbBlog-timeText-timeBox-time'>12.09.2021</p>
                                </div>

                                <div className="plants-herbBlog-timeText-textBox">
                                    <p className='plants-herbBlog-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                                    <p className='plants-herbBlog-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                                </div>
                            </div>

                            <button className='plants-herbBlog-btn'>Read</button>
                            <img className='plants-herbBlog-herbImg' src={Herb} alt="" />
                        </div>

                        <div className="plants-twoBox">
                            <div className="plants-twoBox-redBox">
                                <div className="plants-twoBox-redBox-timeText">
                                    <div className="plants-twoBox-redBox-timeText-timeBox">
                                        <img src={Clock} alt="" className="plants-twoBox-redBox-timeText-timeBox-image" />
                                        <p className='plants-twoBox-redBox-timeText-timeBox-time'>12.06.2021</p>
                                    </div>

                                    <p className="plants-twoBox-redBox-timeText-text">How to plant spinach correctly in winter</p>
                                </div>

                                <button className="plants-twoBox-redBox-btn">Read</button>
                                <img className='plants-twoBox-redBox-strawberryImg' src={Strawberry} alt="" />
                            </div>
                            <div className="plants-twoBox-redBox">
                                <div className="plants-twoBox-redBox-timeText">
                                    <div className="plants-twoBox-redBox-timeText-timeBox">
                                        <img src={Clock} alt="" className="plants-twoBox-redBox-timeText-timeBox-image" />
                                        <p className='plants-twoBox-redBox-timeText-timeBox-time'>12.06.2021</p>
                                    </div>

                                    <p className="plants-twoBox-redBox-timeText-text">How to plant spinach correctly in winter</p>
                                </div>

                                <button className="plants-twoBox-redBox-btn">Read</button>
                                <img className='plants-twoBox-redBox-strawberryImg' src={Strawberry} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="girlStrawberryCarrying">
                        <div className="girlStrawberryCarrying-timeText">
                            <div className="girlStrawberryCarrying-timeText-timeBox">
                                <img className='girlStrawberryCarrying-timeText-timeBox-image' src={Clock} alt="" />
                                <p className='girlStrawberryCarrying-timeText-timeBox-time'>12.06.2021</p>
                            </div>

                            <div className="girlStrawberryCarrying-timeText-textBox">
                                <p className='"girlStrawberryCarrying-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                                <p className='girlStrawberryCarrying-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            </div>
                        </div>

                        <button className="girlStrawberryCarrying-btn">Read</button>
                        <img className='girlStrawberryCarrying-imgOfGirl' src={Girl} alt="" />
                    </div>
                </div>
            </div>

            <div className="ourBlogs2">
                <div className="twoBlog2">
                    <div className="twoBlog2-threeFruit">
                        <div className="twoBlog2-threeFruit-timeText">
                            <div className="twoBlog2-threeFruit-timeText-timeBox">
                                <img className='twoBlog2-threeFruit-timeText-timeBox-image' src={Clock} alt="" />
                                <p className='twoBlog2-threeFruit-timeText-timeBox-text'>12.09.2021</p>
                            </div>
                            <div className="twoBlog2-threeFruit-timeText-textBox">
                                <p className='twoBlog2-threeFruit-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                                <p className='twoBlog2-threeFruit-timeText-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            </div>
                        </div>

                        <button className='twoBlog2-threeFruit-btn'>Read</button>
                        <img className='twoBlog2-threeFruit-mainImg' src={ThreeStrawberry} alt="" />
                    </div>

                    <div className="twoBlog2-canolaBox">
                        <div className="twoBlog2-canolaBox-timeText">
                            <div className="twoBlog2-canolaBox-timeText-timeBox">
                                <img className='twoBlog2-canolaBox-timeText-timeBox-image' src={Clock} alt="" />
                                <p className='twoBlog2-canolaBox-timeText-timeBox-text'>12.09.2021</p>
                            </div>
                            <div className="twoBlog2-canolaBox-timeText-textBox">
                                <p className='twoBlog2-canolaBox-timeText-textBox-how'>How to plant spinach correctly in winter</p>
                            </div>
                        </div>

                        <button className='twoBlog2-canolaBox-btn'>Read</button>
                        <img className='twoBlog2-canolaBox-mainImg' src={CanolaLikeImage} alt="" />
                    </div>
                </div>

                <div className="threeBlogs">
                    <div className="threeBlogs-blogBox threeBlogs-blogBoxMain1">
                        <div className="threeBlogs-blogBox-timeTextBox">
                            <div className="threeBlogs-blogBox-timeTextBox-timebox">
                                <img className="threeBlogs-blogBox-timeTextBox-timebox-image" src={Clock} alt="" />
                                <p className="threeBlogs-blogBox-timeTextBox-timebox-text">12.09.2021</p>
                            </div>

                            <div className="threeBlogs-blogBox-timeTextBox-textBox">
                                <p className='threeBlogs-blogBox-timeTextBox-textBox-how'>How to plant spinach correctly in winter</p>
                                <p className='threeBlogs-blogBox-timeTextBox-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            </div>
                        </div>

                        <button className='threeBlogs-blogBox-btn'>Read</button>
                        <img className='threeBlogs-blogBox-BigImage BigImageBlack' src={BlackGirl} alt="" />
                    </div>

                    <div className="threeBlogs-blogBox threeBlogs-blogBoxMain2">
                        <div className="threeBlogs-blogBox-timeTextBox">
                            <div className="threeBlogs-blogBox-timeTextBox-timebox">
                                <img className="threeBlogs-blogBox-timeTextBox-timebox-image" src={Clock} alt="" />
                                <p className="threeBlogs-blogBox-timeTextBox-timebox-text">12.09.2021</p>
                            </div>

                            <div className="threeBlogs-blogBox-timeTextBox-textBox">
                                <p className='threeBlogs-blogBox-timeTextBox-textBox-how'>How to plant spinach correctly in winter</p>
                                <p className='threeBlogs-blogBox-timeTextBox-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            </div>
                        </div>

                        <button className='threeBlogs-blogBox-btn'>Read</button>
                        <img className='threeBlogs-blogBox-BigImage BigImageGrapes' src={DifferentGrapes} alt="" />
                    </div>

                    <div className="threeBlogs-blogBox threeBlogs-blogBoxMain3">
                        <div className="threeBlogs-blogBox-timeTextBox">
                            <div className="threeBlogs-blogBox-timeTextBox-timebox">
                                <img className="threeBlogs-blogBox-timeTextBox-timebox-image" src={Clock} alt="" />
                                <p className="threeBlogs-blogBox-timeTextBox-timebox-text">12.09.2021</p>
                            </div>

                            <div className="threeBlogs-blogBox-timeTextBox-textBox">
                                <p className='threeBlogs-blogBox-timeTextBox-textBox-how'>How to plant spinach correctly in winter</p>
                                <p className='threeBlogs-blogBox-timeTextBox-textBox-in'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            </div>
                        </div>

                        <button className='threeBlogs-blogBox-btn'>Read</button>
                        <img className='threeBlogs-blogBox-BigImage BigImageSunglasses' src={SunglassesGirl} alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
};

export default OurBlog;
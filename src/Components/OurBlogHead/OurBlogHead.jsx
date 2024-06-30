import '../OurBlogHead/OurBlogHead.scss';
import Clock from '../../assets/Images/clock-three.png';
import Herb from '../../assets/Images/image 2 (1).png';
import Strawberry from '../../assets/Images/Ellipse 1.png';
import Girl from '../../assets/Images/female-gardener-holding-wicker-basket-with-strawberries 1.png';

const OurBlogHead = () => {
    return (
        <div className='ourBlogHead'>
            <div className="ourBlogHeadNav">
                <p className='ourBlogHeadNav-text'>Our blog.</p>
                <button className='ourBlogHeadNav-btn'>Go to our blog</button>
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
        </div>
    )
};

export default OurBlogHead;
import React, { useState } from 'react';
import '../OurBlog/OurBlog.scss';
import LeftLeaf from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 4 (1).png'
import LeftTop from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 2 (2).png'
import RightLeaf from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 1 (1).png'
import RightTop from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 3 (2).png'


const OurBlog = () => {
    return (
        <div className='ourBlogCont'>
            <div className="welcomeBlog">
                <img className='welcomeBlog-left' src={LeftLeaf} alt="" />
                <img className='welcomeBlog-leftTop' src={LeftTop} alt="" />
                <img className='welcomeBlog-right' src={RightLeaf} alt="" />
                <img className='welcomeBlog-rightTop' src={RightTop} alt="" />
            </div>
        </div>
    )
};

export default OurBlog;
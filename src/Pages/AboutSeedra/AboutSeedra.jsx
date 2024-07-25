import '../AboutSeedra/AboutSeedra.scss';
import LeftLeaf from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 4 (1).png'
import LeftTop from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 2 (2).png'
import RightLeaf from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 1 (1).png'
import RightTop from '../../assets/Images/WelcomeImages/fresh-sweet-basil-leaves-isolated-white-background 3 (2).png';
import TopRightMedia from '../../assets/Images/fresh-sweet-basil-leaves-isolated-white-background 3 (3).png';
import BottomRightMedia from '../../assets/Images/fresh-sweet-basil-leaves-isolated-white-background 4 (2).png';
import BottomLeftMedia from '../../assets/Images/fresh-sweet-basil-leaves-isolated-white-background 2 (3).png';

const AboutSeedra = () => {
    return (
        <div className='aboutSeedraCont'>

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

            <div className="aboutBoxes">
                <div className="seedraEfficientBox">
                    <div className="seedraEfficientBox-textBox">
                        <p className="seedraEfficientBox-textBox-mainTitle">Seedra helps to grow fast and efficiant</p>
                        <div className="seedraEfficientBox-textBox-text">
                            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George </p>
                            <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee  Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                            <p>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>

                        </div>
                    </div>

                    <img className='seedraEfficientBox-img' src="" alt="girl" />
                </div>

                <div className="seedraEfficientBox seedraEfficientBoxPro">
                    <img className='seedraEfficientBox-img2' src="" alt="girl" />

                    <div className="seedraEfficientBox-textBox">
                        <p className="seedraEfficientBox-textBox-mainTitle">Our story</p>
                        <div className="seedraEfficientBox-textBox-text">
                            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George </p>
                            <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee  Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                            <p>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>

                        </div>
                    </div>
                </div>

                <div className="seedraEfficientBox seedraEfficientBoxBig">
                    <div className="seedraEfficientBox-textBox">
                        <p className="seedraEfficientBox-textBox-mainTitle">Our story</p>
                        <div className="seedraEfficientBox-textBox-text">
                            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George </p>
                            <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee  Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                            <p>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>

                        </div>
                    </div>

                    <img className='seedraEfficientBox-img2' src="" alt="girl" />
                </div>


            </div>

            <div className="teamBox">
                <p className='teamMeet'>Meet our team</p>

                <div className="teamMembers">
                    <div className="teamMembers-member">
                        <img className='teamMembers-member-memberImg' src="" alt="" />

                        <div className="teamMembers-member-about">
                            <p className='teamMembers-member-about-name'>Leslie Alexander</p>
                            <p className='teamMembers-member-about-who'>Nursing Assistant</p>
                        </div>
                    </div>

                    <div className="teamMembers-member">
                        <img className='teamMembers-member-memberImg' src="" alt="" />

                        <div className="teamMembers-member-about">
                            <p className='teamMembers-member-about-name'>Leslie Alexander</p>
                            <p className='teamMembers-member-about-who'>Nursing Assistant</p>
                        </div>
                    </div>

                    <div className="teamMembers-member">
                        <img className='teamMembers-member-memberImg' src="" alt="" />

                        <div className="teamMembers-member-about">
                            <p className='teamMembers-member-about-name'>Leslie Alexander</p>
                            <p className='teamMembers-member-about-who'>Nursing Assistant</p>
                        </div>
                    </div>

                    <div className="teamMembers-member">
                        <img className='teamMembers-member-memberImg' src="" alt="" />

                        <div className="teamMembers-member-about">
                            <p className='teamMembers-member-about-name'>Leslie Alexander</p>
                            <p className='teamMembers-member-about-who'>Nursing Assistant</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default AboutSeedra;
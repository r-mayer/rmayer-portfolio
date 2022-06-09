import LightButton from "../LightButton";
import Navbar from "../Navbar";
import './index.css'

function Header() {
    return ( 
        <div className="header-container">
            <Navbar />
            <div className="hero-container container">
                <div className="content">
                    <div className="left-content">
                        <i class="fa-solid fa-skull"></i>
                        <p className="intro">Hi, <span className="bold">I'm Rodrigo</span></p>
                        <h1 className="title">Desenvolvedor Front End &amp; <span className="thin">UI Designer</span></h1>
                    </div>
                    <div className="right-content">
                        <img src="./images/flame.png" alt="bg" className="profile-bg" />
                        <img src="./images/profile.jpg" alt="profile" className="profile-pic"/>
                    </div>
                </div>
                <div className="stacks">
                    <p className="small-title">Habilidades:</p>
                    <p className="stack">&lt;React.js&gt;</p>
                    <p className="stack">&lt;Next.js&gt;</p>
                    <p className="stack">&lt;CSS&gt;</p>
                    <p className="stack">&lt;Javascript&gt;</p>
                    {/* <p className="stack">&lt;Styled Components&gt;</p> */}
                    <p className="stack">&lt;Git&gt;</p>
                </div>
                <div className="button-container">
                    <LightButton>sobre mim <i class="fa-solid fa-angle-down"></i></LightButton>
                </div>
            </div>
        </div>
     );
}

export default Header;
import "./header.scss";
import logo from "../../images/logo.png";
import logo1 from "../../images/logo-bbc.png";
import logo2 from "../../images/logo-forbes.png";
import logo3 from "../../images/logo-techcrunch.png";
import logo4 from "../../images/logo-bi.png";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <h3 className="heading-3">your own home</h3>
            <h1 className="heading-1">The ultimate personal freedom</h1>
            <button className="btn header__btn">view our properties</button>
            <div className="header__seenOn-text">Seen on</div>
            <div className="header__seenOn-logos">
                <img src={logo1} alt="seen on logo" />
                <img src={logo2} alt="seen on logo" />
                <img src={logo3} alt="seen on logo" />
                <img src={logo4} alt="seen on logo" />
            </div>
        </div>
    );
};

export default Header;

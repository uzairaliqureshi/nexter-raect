import "./homes.scss";
import img1 from "../../images/house-1.jpeg";
import img2 from "../../images/house-2.jpeg";
import img3 from "../../images/house-3.jpeg";
import img4 from "../../images/house-4.jpeg";
import img5 from "../../images/house-5.jpeg";
import img6 from "../../images/house-6.jpeg";

const Homes = () => {
    const Home = ({ img, name, loc, room, area, price }) => (
        <div className="home">
            <img src={img} alt="home image" />
            <h5 className="home__name">{name}</h5>
            <p className="home__location">{loc}</p>
            <p className="home__rome">{room} rooms</p>
            <p className="home__area">{area} m<sup>2</sup></p>
            <p className="home__price">${price}</p>
            <button className="home__btn btn">contact realtor</button>
        </div>
    );

    return (
        <div className="homes">
            <Home img={img1} loc='USA' name='Beautiful Family House' room='5' area='325' price='1,200,000' />
            <Home img={img2} loc='Canada' name='Modern Glass Villa' room='6' area='450' price='2,750,000' />
            <Home img={img3} loc='UK' name='Cozy Country House' room='4' area='250' price='850,000' />
            <Home img={img4} loc='Portugal' name='Large Rustical Villa' room='6' area='480' price='1,95000' />
            <Home img={img5} loc='Germany' name='Majestic Palace House' room='18' area='423' price='9,5000' />
            <Home img={img6} loc='Italy' name='Modern Family Apartment' room='3' area='180' price='600,000' />
        </div>
    );
};

export default Homes;







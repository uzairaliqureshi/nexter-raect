import "./realtors.scss";
import img1 from "../../images/realtor-1.jpeg";
import img2 from "../../images/realtor-2.jpeg";
import img3 from "../../images/realtor-3.jpeg";

const Realtors = () => {
    const Realtor = ({ src, name, sold }) => (
        <>
            <img src={src} alt="realtor image" />
            <div className="realtors__details">
                <h4 className="heading-4 heading-4--light">{name}</h4>
                <p className="realtors__sold">{sold} houses sold</p>
            </div>
        </>
    );

    return (
        <div className="realtors">
            <h3 className="heading-3">top 3 realtors</h3>
            <div className="realtors__list">
                <Realtor src={img1} name={"Erik Fenian"} sold={245} />
                <Realtor src={img2} name={"Kim Brown"} sold={212} />
                <Realtor src={img3} name={"Toby Ramsey"} sold={198} />
            </div>
        </div>
    );
};

export default Realtors;

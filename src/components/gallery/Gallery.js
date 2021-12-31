import "./gallery.scss";
import img1 from "../../images/gal-1.jpeg";
import img2 from "../../images/gal-2.jpeg";
import img3 from "../../images/gal-3.jpeg";
import img4 from "../../images/gal-4.jpeg";
import img5 from "../../images/gal-5.jpeg";
import img6 from "../../images/gal-6.jpeg";
import img7 from "../../images/gal-7.jpeg";
import img8 from "../../images/gal-8.jpeg";
import img9 from "../../images/gal-9.jpeg";
import img10 from "../../images/gal-10.jpeg";
import img11 from "../../images/gal-11.jpeg";
import img12 from "../../images/gal-12.jpeg";
import img13 from "../../images/gal-13.jpeg";
import img14 from "../../images/gal-14.jpeg";

const Gallery = () => {
    const Image = ({ src }) => (
        <figure className={`gallery__image--${src.slice(src.indexOf('-') + 1, src.indexOf('.'))}`}>
            <img src={src} alt="gallery image" className={`gallery__image`} />
        </figure>
    );

    return (
        <div className="gallery">
            <Image src={img1} />
            <Image src={img2} />
            <Image src={img3} />
            <Image src={img4} />
            <Image src={img5} />
            <Image src={img6} />
            <Image src={img7} />
            <Image src={img8} />
            <Image src={img9} />
            <Image src={img10} />
            <Image src={img11} />
            <Image src={img12} />
            <Image src={img13} />
            <Image src={img14} />
        </div>
    );
};

export default Gallery;

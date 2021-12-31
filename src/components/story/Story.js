import "./story.scss";
import storyImage1 from "../../images/story-1.jpeg";
import storyImage2 from "../../images/story-2.jpeg";

const Story = () => {
    return (
        <>
            <div className="story__picture">
                <img src={storyImage1} alt="story image1" className="story__picture__img-1" />
                <img src={storyImage2} alt="story image2" className="story__picture__img-2" />
            </div>
            <div className="story__content">
                <h3 className="heading-3 mb-sm">Happy Customers</h3>
                <h2 className="heading-2 heading-2--dark mb-lg">&ldquo;The best decision of our lives&rdquo;</h2>
                <p className="story__text mb-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
                    voluptatibus. Quidem consequatur harum voluptas!
                </p>
                <button className="btn">find yor own home</button>
            </div>
        </>
    );
};

export default Story;

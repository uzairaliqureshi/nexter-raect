import "./features.scss";

const Features = () => {
    const Feature = ({ head }) => (
        <div className="feature">
            <h4 className="heading-4 heading-4--dark">{head}</h4>
            <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>
    );

    return (
        <div className="features">
            <Feature head="World's best luxury homes" />
            <Feature head="Only the best properties" />
            <Feature head="All homes in in top locations" />
            <Feature head="New home in one week" />
            <Feature head="Top 1% realtors" />
            <Feature head="Secure payments on nexter" />
        </div>
    );
};

export default Features;

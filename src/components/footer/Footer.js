import "./footer.scss";

const Footer = () => {
    const Li = ({ text }) => (<li className="nav__item"><a className="nav__link" href="#">{text}</a></li>);

    return (
        <div className="footer">
            <ul className="nav">
                <Li text="Find your dream home" />
                <Li text="Request proposal" />
                <Li text="Download home planner" />
                <Li text="Contact us" />
                <Li text="Submit your property" />
                <Li text="Come work with us!" />
            </ul>
            <p className="copyright">
                &copy; Copyright 2021 by Jonas Schmedtmann. Feel free to use this project for your own purposes. This
                does
                NOT apply if you plan to produce your own course or tutorials based on this project.
            </p>
        </div>
    );
};

export default Footer;

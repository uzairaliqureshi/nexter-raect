import "./App.scss";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Homes from "./components/homes/Homes";
import Realtors from "./components/realtors/Realtors";
import Sidebar from "./components/sidebar/Sidebar";
import Story from "./components/story/Story";

const App = () => {
    return (
        <div className="container">
            <Sidebar />
            <Header />
            <Realtors />
            <Features />
            <Story />
            <Homes />
            <Gallery />
            <Footer />
        </div>
    );
};

export default App;

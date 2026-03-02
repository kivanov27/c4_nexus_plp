import logo from "../../assets/logo.png";
import NavBar from "./NavBar";

const Header = ({ categories }) => {
    return (
        <div className="flex flex-row justify-around">
            <img src={logo} alt="logo" width="40" height="40" />
            <NavBar categories={categories} />
        </div>
    );
};

export default Header;

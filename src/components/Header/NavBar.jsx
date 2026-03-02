const NavBar = ({ categories }) => {
    return (
        <div className="flex flex-row gap-x-2">
            {categories.map((category, i) => 
                <button key={i}>{category}</button>
            )}
        </div>
    );
};

export default NavBar;

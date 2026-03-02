const NavBar = ({ categories, setCategory }) => {
    return (
        <div className="navbar">
            {categories.map((category, i) => 
                <a 
                    key={i}
                    onClick={() => setCategory(category)}
                >
                    {category}
                </a>
            )}
        </div>
    );
};

export default NavBar;

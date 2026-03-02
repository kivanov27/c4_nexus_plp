const NavBar = ({ categories, selectedCategory, setCategory }) => {
    return (
        <div className="navbar">
            {categories.map((category, i) => 
                <a 
                    key={i}
                    onClick={() => setCategory(category)}
                    className={`${selectedCategory == category ? "selected" : "" }`}
                >
                    {category}
                </a>
            )}
        </div>
    );
};

export default NavBar;

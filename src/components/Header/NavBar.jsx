const NavBar = ({ categories, selectedCategory, setCategory }) => {
    return (
        <div className="navbar flex gap-x-8">
            {categories.map((category, i) => 
                <a 
                    key={i}
                    onClick={() => setCategory(category)}
                    className={`${selectedCategory == category ? "selected" : "" } cursor-pointer`}
                >
                    {category}
                </a>
            )}
        </div>
    );
};

export default NavBar;

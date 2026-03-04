const NavBar = ({ categories, selectedCategory, setCategory }) => {
    return (
        <div className="navbar flex gap-x-8">
            {categories.map((category, i) => (
                <div
                    key={i}
                    onClick={() => setCategory(category)}
                    className={`
                        ${selectedCategory == category ? "text-(--accent-color)" : ""} 
                        cursor-pointer font-medium hover:text-(--accent-color)
                    `}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default NavBar;

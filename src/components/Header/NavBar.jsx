const NavBar = ({ categories, selectedCategory, setCategory, setRows }) => {
    return (
        <div className="navbar flex gap-x-8">
            {categories.map((category, i) => (
                <div
                    key={i}
                    onClick={() => {
                        setCategory(category);
                        setRows(5);
                    }}
                    className={`
                        ${selectedCategory == category ? "text-(--accent-color)" : ""} 
                        cursor-pointer font-medium hover:text-(--accent-color)
                        transition-colors duration-200 ease-in
                    `}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default NavBar;

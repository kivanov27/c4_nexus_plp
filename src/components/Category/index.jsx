const Category = ({ category }) => {
    const descriptions = {
        groceries: "Everyday essentials and pantry staples.",
        "home-decoration": "Stylish pieces to elevate your space.",
        "kitchen-accessories": "Tools and accessories for easier cooking.",
        laptops: "Powerful laptops for work and play.",
        "mens-shirts": "Comfortable and stylish shirts for men."
    };

    return (
        <div className="flex flex-col md:flex-row gap-x-4 items-center">
            <span className="text-xl capitalize font-medium">{category}</span>
            <span className="text-sm">
                {descriptions[category] || ""}
            </span>
        </div>
    );
};

export default Category;

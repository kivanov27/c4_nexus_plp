const Category = ({ category }) => {
    const getDesc = () => {
        switch (category) {
            case "groceries":
                return "groceries description";
            case "home-decoration":
                return "home-decoration description";
            case "kitchen-accessories":
                return "kitchen-accessories description";
            case "laptops":
                return "laptops description";
            case "mens-shirts":
                return "mens-shirts description";
        }
    };

    return (
        <div className="flex gap-x-4 items-center">
            <span className="text-xl capitalize font-medium">{category}</span>
            <span className="text-sm">
                {getDesc()}
            </span>
        </div>
    );
};

export default Category;

const Category = ({ category }) => {
    return (
        <div className="flex gap-x-4 items-center">
            <span className="text-xl capitalize font-medium">{category}</span>
            <span className="text-sm"></span>
        </div>
    );
};

export default Category;

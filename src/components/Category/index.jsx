import "./index.css";

const Category = ({ category }) => {
    return (
        <div className="category">
            <span className="category-name">{category}</span>
            <span className="category-description"></span>
        </div>
    );
};

export default Category;

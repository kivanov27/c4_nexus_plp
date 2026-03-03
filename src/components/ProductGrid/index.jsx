import "./index.css";
import StarRating from "./StarRating";

const ProductGrid = ({ products }) => {
    return (
        <div className="product-grid">
            {products.map(product =>
                <div 
                    key={product.id}
                    className="product-card"
                >
                    <img 
                        src={product.thumbnail} 
                        alt={product.description} 
                        className="product-img"
                    />
                    <span className="product-title">
                        {product.title}
                    </span>
                    <p className="product-description">
                        {product.description}
                    </p>
                    <span className="product-price">
                        Price: € {(product.price - product.price * product.discountPercentage / 100).toFixed(2)}
                    </span>
                    <span className="product-rating">
                        <StarRating rating={product.rating} />
                    </span>
                    <button>
                        Add to cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;

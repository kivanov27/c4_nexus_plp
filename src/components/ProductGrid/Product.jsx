import StarRating from "./StarRating";

const Product = ({ product }) => {
    const handleAddToCart = () => {
        alert("Product added to cart");
    }

    return (
        <div className="h-112.5 p-4 bg-white rounded-md flex flex-col items-center justify-between gap-y-2">
            <img 
                src={product.thumbnail} 
                alt={product.description} 
                width={150}
                height={150}
                className="rounded-md"
            />
            <span className="font-medium text-center">
                {product.title}
            </span>
            <p className="text-xs overflow-y-scroll">
                {product.description}
            </p>
            <span className="product-price">
                Price: € {(product.price - product.price * product.discountPercentage / 100).toFixed(2)}
            </span>
            <span className="product-rating">
                <StarRating rating={product.rating} />
            </span>
            <button onClick={handleAddToCart}>
                Add to cart
            </button>
        </div>
    );
};

export default Product;

import StarRating from "../StarRating";

const Product = ({ product }) => {
    const handleAddToCart = () => {
        alert("Product added to cart");
    }

    return (
        <div 
            className="h-112.5 p-4 bg-white rounded-md flex flex-col items-center justify-between 
            gap-y-2 xl:hover:shadow-lg shadow-gray-500 transition-shadow duration-200 ease-in"
        >
            <img 
                src={product.thumbnail} 
                alt={product.description} 
                width={150}
                height={150}
                className="rounded-md select-none"
                draggable="false"
            />
            <span className="font-medium text-center">
                {product.title}
            </span>
            <p className="text-xs overflow-y-scroll">
                {product.description}
            </p>
            <span>
                Price: € {(product.price - product.price * product.discountPercentage / 100).toFixed(2)}
            </span>
            <span className="flex gap-x-2">
                <StarRating rating={product.rating} />
                <span className="text-xs text-gray-600">
                    ({product.rating})
                </span>
            </span>
            <button 
                onClick={handleAddToCart}
                className="btn-cart"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Product;

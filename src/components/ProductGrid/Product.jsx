import StarRating from "../StarRating";

const Product = ({ product }) => {
    const handleAddToCart = () => {
        alert("Product added to cart");
    }

    return (
        <div 
            className="relative h-112.5 p-4 bg-white rounded-md flex flex-col items-center justify-between 
            gap-y-2 xl:hover:shadow-lg shadow-gray-500 transition-shadow duration-200 ease-in z-0"
        >
            <div className="absolute top-6 left-6 p-1 bg-red-600 text-white text-sm font-medium">
                {product.discountPercentage}%
            </div>

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
                {product.discountPercentage !== 0 ?
                    <div className="flex flex-col items-center">
                        <span>Price:</span> 
                        <div className="flex flex-col sm:flex-row gap-x-2">
                            <span className="line-through text-gray-400">
                                € {product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                            <span className="text-red-600">
                                € {(product.price - product.price * product.discountPercentage / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    </div>
                    :
                    <span>Price: € {product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                }
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

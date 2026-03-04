import Product from "./Product";

const ProductGrid = ({ products, totalProductsLength, setRows }) => {
    return (
        <div className="w-full flex flex-col items-center gap-y-4">
            <p className="text-sm">
                {products.length} out of {totalProductsLength} products displayed
            </p>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {products.map(product =>
                    <Product 
                        key={product.id} 
                        product={product} 
                    />
                )}
            </div>

            {products.length < totalProductsLength && (
                <button 
                    onClick={() => setRows(prev => prev + 5)}
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default ProductGrid;

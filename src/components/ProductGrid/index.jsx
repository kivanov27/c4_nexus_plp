import Product from "./Product";

const ProductGrid = ({ products }) => {
    return (
        <div className="product-grid w-full grid grid-cols-4 gap-8 p-4 border border-(--border-color)">
            {products.map(product =>
                <Product 
                    key={product.id} 
                    product={product} 
                />
            )}
        </div>
    );
};

export default ProductGrid;

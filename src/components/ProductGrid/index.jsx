import "./index.css";
import Product from "./Product";

const ProductGrid = ({ products }) => {
    return (
        <div className="product-grid">
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

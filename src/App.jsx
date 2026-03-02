import { useEffect, useState } from "react";
import Header from "./components/Header";

const App = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products?limit=40');
                const data = await res.json();
                setProducts(data.products);
            }
            catch (error) {
                console.error("Failed to fetch products: ", error);
            }
        };

        fetchProducts();
    }, []);

    const categories = [...new Set(products.map(p => p.category))];

    return (
        <div>
            <Header 
                categories={categories} 
                setCategory={setCategory} 
            />
        </div>
    );
};

export default App;

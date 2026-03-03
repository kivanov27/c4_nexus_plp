import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Category from "./components/Category";
import Sort from "./components/Sort";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

const App = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products?limit=40');
                const data = await res.json();
                setProducts(data.products);
                setCategory(data.products[0].category);
            }
            catch (error) {
                console.error("Failed to fetch products: ", error);
            }
        };

        fetchProducts();
    }, []);

    const productsToDisplay = products.filter(
        p => p.category === category
    );

    const categories = [...new Set(products.map(p => p.category))];

    return (
        <div className="app">
            <Header 
                categories={categories} 
                selectedCategory={category}
                setCategory={setCategory} 
            />
            <div className="container">
                <Filter />
                <div className="main">
                    <div className="main-header">
                        <Category category={category} />
                        <Sort />
                    </div>
                    <ProductGrid products={productsToDisplay} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;

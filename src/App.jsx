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
        <div>
            <Header 
                categories={categories} 
                selectedCategory={category}
                setCategory={setCategory} 
            />
            <div className="w-7xl flex my-4 mx-auto gap-x-4">
                <Filter />
                <div className="w-[70%] flex flex-col gap-y-4">
                    <div className="w-full flex justify-between">
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

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
    const [minRating, setMinRating] = useState(0);
    const [priceRange, setPriceRange] = useState([0, Infinity]);
    const [sortOption, setSortOption] = useState("alphabetical-asc");
    const [rows, setRows] = useState(5);
    const [cols, setCols] = useState(window.innerWidth < 1280 ? 2 : 4);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products?limit=72&skip=15');
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

    useEffect(() => {
        const handleResize = () => {
            setCols(window.innerWidth < 1280 ? 2 : 4);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Extract categories
    const categories = [...new Set(products.map(p => p.category))];

    // Filter products based on category, rating, price
    const filteredProducts = products
        .filter(p => p.category === category)
        .filter(p => p.rating >= minRating)
        .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort products based on selected sorting option
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
            case "alph-asc":
                return a.title > b.title;
            case "alph-desc":
                return a.title < b.title;
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            default:
                return 0;
        }
    });

    // Calculate amount of products to display
    const amountOfItems = rows * cols;

    // Get products to display
    const productsToDisplay = sortedProducts.slice(0, amountOfItems);

    return (
        <div className="flex flex-col min-h-screen">
            <Header 
                categories={categories} 
                selectedCategory={category}
                setCategory={setCategory} 
                setRows={setRows}
            />
            <div 
                className="w-xs sm:w-xl md:w-2xl lg:w-4xl xl:w-6xl 2xl:w-7xl 
                flex-1 flex my-4 mx-auto gap-x-4"
            >
                <Filter 
                    minRating={minRating}
                    setMinRating={setMinRating} 
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                />
                <div className="w-full xl:w-[80%] flex flex-col gap-y-4">
                    <div className="w-full flex flex-col md:flex-row gap-y-4 justify-between items-center bg-white rounded-md p-4">
                        <Category category={category} />
                        <Sort setSortOption={setSortOption} />
                    </div>
                    <ProductGrid 
                        products={productsToDisplay} 
                        totalProductsLength={filteredProducts.length}
                        setRows={setRows}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;

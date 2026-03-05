import { useState } from "react";
import MobileFilterFloat from "./MobileFilterFloat";

const MobileFilter = ({ minRating, setMinRating, priceRange, setPriceRange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="block lg:hidden">
            <button 
                style={{ backgroundColor: "white", padding: "0.25rem", fontWeight: 400 }}
                onClick={() => setIsOpen(true)}
                className="btn-filter"
            >
                Filter +
            </button>

            <MobileFilterFloat
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                minRating={minRating}
                setMinRating={setMinRating}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />
        </div>
    );
};

export default MobileFilter;

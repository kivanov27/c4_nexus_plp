import { useEffect } from "react";
import { createPortal } from "react-dom";
import StarRating from "../StarRating";

const MobileFilterFloat = ({ isOpen, setIsOpen, minRating, setMinRating, priceRange, setPriceRange }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const ratings = [5, 4, 3, 2, 1];
    const priceRanges = [[0, 50], [50, 100], [100, 150], [150, Infinity]];

    return createPortal(
        <div
            className={`
                fixed inset-0 z-50 transition-opacity duration-200
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
        >
            <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`
                    absolute bottom-0 left-0 w-full bg-(--primary-bg-color) rounded-t-2xl
                    transition-transform duration-200 ease-out
                    ${isOpen ? "translate-y-0" : "translate-y-full"}
                `}
                style={{ height: "70vh" }}
            >
                <div className="p-6 overflow-y-auto h-full">
                    <div className="flex flex-col gap-y-4 items-center">
                        <div className="w-full sm:w-1/2 bg-white rounded-md p-4 flex flex-col gap-y-1">
                            <div className="w-fit mx-auto">
                                <div className="flex gap-x-4">
                                    <p>Rating above:</p>
                                    {minRating !== 0 &&
                                        <div 
                                            className="border border-red-500 text-red-500 px-2 rounded-md cursor-pointer"
                                            onClick={() => setMinRating(0)}
                                        >
                                            x
                                        </div>
                                    }
                                </div>
                                {ratings.map(rating => (
                                    <label
                                        key={`mobile-${rating}`}
                                        className="flex items-center w-fit gap-x-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="mobile-rating"
                                            value={rating}
                                            checked={minRating === rating}
                                            onChange={() => setMinRating(rating)}
                                        />
                                        <StarRating rating={rating} />
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 bg-white rounded-md p-4 flex flex-col gap-y-1">
                            <div className="w-fit mx-auto">

                                <div className="flex gap-x-4">
                                    <p>Price:</p>
                                    {(priceRange[0] !== 0 || priceRange[1] !== Infinity) &&
                                        <div 
                                            className="border border-red-500 text-red-500 px-2 rounded-md cursor-pointer"
                                            onClick={() => setPriceRange([0, Infinity])}
                                        >
                                            x
                                        </div>
                                    }
                                </div>
                                {priceRanges.map(pr => (
                                    <label
                                        key={`mobile-${pr}`}
                                        className="flex items-center w-fit gap-x-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="mobile-price-range"
                                            value={pr}
                                            checked={
                                                priceRange[0] === pr[0] &&
                                                    priceRange[1] === pr[1]
                                            }
                                            onChange={() => setPriceRange(pr)}
                                            className="cursor-pointer"
                                        />
                                        {pr[1] === Infinity ?
                                            <span>{pr[0]}+</span>
                                            :
                                            <span>{pr[0]} - {pr[1]}</span>
                                        }
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default MobileFilterFloat;

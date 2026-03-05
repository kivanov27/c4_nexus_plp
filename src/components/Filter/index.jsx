import StarRating from "../StarRating";

const Filter = ({ minRating, setMinRating, priceRange, setPriceRange }) => {
    const ratings = [5, 4, 3, 2, 1];
    const priceRanges = [[0, 50], [50, 100], [100, 150], [150, Infinity]];

    return (
        <div className="w-[20%] hidden lg:flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-4 flex flex-col gap-y-1">
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
                        key={rating}
                        className="flex items-center w-fit gap-x-2 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="rating"
                            value={rating}
                            checked={minRating === rating}
                            onChange={() => setMinRating(rating)}
                            className="cursor-pointer"
                        />
                        <StarRating rating={rating} />
                    </label>
                ))}
            </div>

            <div className="bg-white rounded-md p-4 flex flex-col gap-y-1">
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
                        key={pr}
                        className="flex items-center w-fit gap-x-2 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="price-range"
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
    );
};

export default Filter;

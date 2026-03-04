import StarRating from "../StarRating";

const Filter = ({ minRating, setMinRating }) => {
    const ratings = [5, 4, 3, 2, 1];

    return (
        <div className="w-[20%] flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-4 flex flex-col gap-y-1">
                <p>Rating above</p>

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

            <div className="bg-white rounded-md p-4">
                <p>Price</p>
            </div>
        </div>
    );
};

export default Filter;

const StarRating = ({ rating }) => {
    return (
        <div className="relative inline-block text-lg leading-none select-none">
            <div className="text-gray-300">★★★★★</div>
            <div
                className="text-amber-300 absolute top-0 left-0 overflow-hidden whitespace-nowrap"
                style={{ width: `${(rating / 5) * 100}%` }}
            >
                ★★★★★
            </div>
        </div>
    );
};

export default StarRating;

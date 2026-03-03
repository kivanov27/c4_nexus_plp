import "./StarRatings.css";

const StarRating = ({ rating }) => {
    return (
        <div className="stars">
            <div className="stars-back">★★★★★</div>
            <div
                className="stars-front"
                style={{ width: `${(rating / 5) * 100}%` }}
            >
                ★★★★★
            </div>
        </div>
    );
};

export default StarRating;

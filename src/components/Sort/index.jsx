const Sort = ({ setSortOption }) => {
    const options = [
        {
            value: "alph-asc",
            text: "Alphabetical (A-Z)"
        },
        {
            value: "alph-desc",
            text: "Alphabetical (Z-A)"
        },
        {
            value: "price-asc",
            text: "Price (Low to High)"
        },
        {
            value: "price-desc",
            text: "Price (High to Low)"
        },
    ];

    return (
        <select
            name="sort"
            defaultValue={options[0].value}
            onChange={({ target }) => setSortOption(target.value)}
            className="border border-(--accent-color) rounded-md p-1"
        >
            {options.map(opt =>
                <option key={opt.value} value={opt.value}>
                    {opt.text}
                </option>
            )}
        </select>
    );
};

export default Sort;

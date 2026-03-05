const Footer = () => {
    return (
        <div className="bg-(--accent-color) py-4 text-white font-medium">
            <ul className="w-fit mx-auto">
                <li className="list-disc list-inside">
                    <a href="_blank">
                        Terms & Conditions
                    </a>
                </li>
                <li className="list-disc list-inside">
                    <a href="_blank">
                        Privacy Policy
                    </a>
                </li>
                <li className="list-disc list-inside">
                    <a href="_blank">
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;

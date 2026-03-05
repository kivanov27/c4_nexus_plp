import { useEffect } from "react";
import { createPortal } from "react-dom";

const MobileMenu = ({ isOpen, setIsOpen, categories, setCategory, selectedCategory }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return createPortal(
        <div
            className={`
                fixed inset-0 z-50 bg-(--primary-bg-color) 
                transform transition-transform duration-200 ease-in
                ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
        >
            <div
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-3xl cursor-pointer"
            >
                x
            </div>

            <div className="h-full flex flex-col justify-center gap-y-6 text-xl">
                {categories.map(category =>
                    <div
                        key={category}
                        onClick={() => {
                            setCategory(category);
                            setIsOpen(false);
                        }}
                        className={`
                            ${selectedCategory == category ? "text-(--accent-color)" : ""} 
                            cursor-pointer font-medium text-center
                        `}
                    >
                        {category}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};

export default MobileMenu;

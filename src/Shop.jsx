import React, { useState } from 'react';
import images from './constant/images';
import products from './json/Proudact.json';

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name?.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory
            ? product.category?.toLowerCase() === selectedCategory.toLowerCase()
            : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <div
                className="top-title flex justify-center h-60 items-center"
                style={{
                    backgroundImage: `url(${images.banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h1 className="text-white text-[40px] font-[1000]">PRODUCTS</h1>
            </div>

            <div className="container mx-auto px-8 lg:px-16 py-12 flex flex-col md:flex-row gap-12">
                {/* Left Sidebar */}
                <div className="left w-full md:w-[250px] space-y-8">
                    <div className="categories">
                        <h3 className="text-[18px] font-bold text-black mb-4">Categories</h3>
                        <ul>
                            {['Best Seller', 'Featured', 'Men', 'Women'].map((category) => (
                                <li key={category}>
                                    <button
                                        onClick={() => handleCategoryClick(category)}
                                        className="text-left w-full text-[15px] text-gray-600 hover:text-black"
                                    >
                                        {category} (8 items)
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="price">
                        <h3 className="text-[18px] font-bold text-black mb-4">Price</h3>
                        <ul>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="0-20" className="form-checkbox" />
                                <label htmlFor="0-20" className="text-[15px] text-gray-600">0-20</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="20-40" className="form-checkbox" />
                                <label htmlFor="20-40" className="text-[15px] text-gray-600">20-40</label>
                            </li>
                        </ul>
                    </div>

                    <div className="size">
                        <h3 className="text-[18px] font-bold text-black mb-4">Size</h3>
                        {['L', 'M', 'S', 'XL'].map((size) => (
                            <div key={size} className="flex items-center gap-2">
                                <input type="checkbox" id={size} className="form-checkbox" />
                                <label htmlFor={size} className="text-[15px] text-gray-600">{size}</label>
                            </div>
                        ))}
                    </div>

                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={handleSearchChange}
                            className="w-[180px] px-4 py-2 text-[13px] text-gray-600 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="right flex-1">
                    <div className="top-filter flex justify-between items-center mb-8">
                        <div className="flex items-center gap-4">
                            <select className="px-3 py-1 border border-gray-300 rounded text-[13px] text-gray-600">
                                <option>Alphabetically, A-Z</option>
                                <option>Featured</option>
                                <option>Best Selling</option>
                                <option>Price, low to high</option>
                                <option>Price, high to low</option>
                            </select>
                            <select className="px-3 py-1 border border-gray-300 rounded text-[13px] text-gray-600">
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>All</option>
                            </select>
                        </div>
                        <div className="text-[13px] text-gray-600">
                            Showing 1 to {filteredProducts.length} of {products.length} items
                        </div>
                    </div>

                    <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="product-card group max-w-[380px] mx-auto w-full">
                                <div className="relative overflow-hidden mb-4">
                                    <img
                                        src={images[product.image] || ''}
                                        alt={product.name}
                                        className="w-full aspect-[3/4] object-cover mb-3"
                                    />
                                </div>
                                <div>
                                    <a href="#" className="text-[15px] text-gray-600 hover:text-black block text-left">
                                        {product.name}
                                    </a>
                                    <div className="flex gap-2 mt-1">
                                        {product.oldPrice && (
                                            <p className="text-[15px] text-gray-400 line-through">
                                                ${Number(product.oldPrice).toFixed(2)}
                                            </p>
                                        )}
                                        <p className="text-[15px] text-gray-600">
                                            ${Number(product.price).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;

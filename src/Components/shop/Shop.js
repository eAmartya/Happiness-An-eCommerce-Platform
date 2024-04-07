import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import './shop.css'
import ProductCard from '../productcard/ProductCard'

function Shop() {
    document.title = "Shop - Happiness"
    const Shopped_products = [
        {
            productImage: 'neckband-min.webp',
            productName: 'R2 Stero Wireless Neckband',
            originalPrice: 2199.00,
            discountedPrice: 699.00,
            discountPercentage: '54%',
            uploadTime: '',
            price: 2199.00,
            type: '"earphone", "wireless earplugs", "wireless neckband earphone"',

        },
        {
            productImage: 'buds.webp',
            productName: 'M5 Round Earplugs',
            originalPrice: 2500.00,
            discountedPrice: 0,
            discountPercentage: '54%',
            uploadTime: '',
            price: 2500.00,
            type: '"earphone", "wireless earplugs"',

        },
        {
            productImage: 'neck-025-min-2048x2048.webp',
            productName: 'R3 Stero Wireless Neckband',
            originalPrice: 1999.00,
            discountedPrice: 699.00,
            discountPercentage: '54%',
            uploadTime: '',
            price: 1999.00,
            type: '"earphone", "wireless earplugs", "wireless neckband earphone"',


        },
        {
            productImage: 'headphones.webp',
            productName: 'Ultra Bass Bluetooth Headphone',
            originalPrice: 2999.00,
            discountedPrice: 1599.00,
            discountPercentage: '54%',
            uploadTime: '',
            price: 2999.00,
            type: '"earphone", "wireless earplugs","headphone',

        },
        {
            productImage: 'budcase.webp',
            productName: '11i Earplugs',
            originalPrice: 2599.00,
            discountedPrice: 1199.00,
            discountPercentage: '54%',
            uploadTime: '',
            price: 2599.00,
            type: '"earphone", "wireless earplugs"',

        }, {
            productImage: 'ctoi2-min.webp',
            productName: 'USB To C VOOC Zeal Charging Cable',
            originalPrice: 799.00,
            discountedPrice: 449.00,
            discountPercentage: '54%',
            uploadTime: '',
            price: 799.00,
            type: '"aux cable"',

        }, {
            productImage: 'usbtomicro2-min.webp',
            productName: 'USB To Micro Zest Charging Cable',
            originalPrice: 399.00,
            discountedPrice: 199.00,
            discountPercentage: '54%',
            uploadTime: '',
            price: 399.00,
            type: '"aux cable"',

        }
    ]
    const [filters, setFilters] = useState('Sort by Latest')
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState(Shopped_products)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    // Calculate the total number of pages based on itemsPerPage and data length
    const totalPages = Math.ceil(products.length / itemsPerPage);
    // Calculate the range of items to display for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the current page's data
    products.slice(startIndex, endIndex);

    // Handle changing the current page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    function sortingProducts(event) {
        setFilters(event.target.value)
        if (event.target.value === 'l2h') {
            setProducts(products.sort((a, b) => a.price - b.price))
        }
        else if (event.target.value === 'h2l') {
            setProducts(products.sort((a, b) => -(a.price - b.price)))
        }
        else {
            setProducts(products.sort((a, b) => a.uploadTime - b.uploadTime))

        }
    }
    function toggleElement(array, element) {
        const index = array.indexOf(element);
        if (index !== -1) {
            // Element exists in the array, so create a new array without it
            const updatedArray = array.filter((ele) => ele !== element);
            return updatedArray;
        } else {
            // Element doesn't exist in the array, so add it
            return [...array, element];
        }
    }

    function handleCategoriesSwtich(event) {
        const updatedCategories = toggleElement(categories, event.target.value);
        setCategories(updatedCategories);
        setProducts(Shopped_products)
    }
    useEffect(() => {
        setProducts((prevProducts) => {
          const updatedProducts = prevProducts.filter((item) => {
            return !categories.length || categories.some((category) => item.type.toLowerCase().includes(category));
          });
          return updatedProducts;
        });
        setCurrentPage(1);
      }, [categories]);

    return (
        <>
            <Navbar />
            <section className='shop-section'>
                <aside className='options marg'>
                    <div className='categories-main'>
                        <div className='title-heading'><i className="fa-regular fa-gem"></i>
                            <span>CATEGORIES</span>
                            <hr />
                        </div>
                        <div className='categories-options'>
                            <ul>
                                <li><label htmlFor='aux-cable'>
                                    <input id='aux-cable' value='aux cable' type='checkbox' onClick={
                                        handleCategoriesSwtich
                                    } />
                                    Aux Cable
                                </label></li><hr />

                                <li><label htmlFor='charging-adapters'>
                                    <input type='checkbox' value='charging Adapters' id='charging-adapters' onClick={
                                        handleCategoriesSwtich
                                    } />
                                    Charging Adapters
                                </label></li><hr />

                                <li><label htmlFor='headphone'>
                                    <input type='checkbox' id='headphone' value='headphone' onClick={
                                        handleCategoriesSwtich
                                    } />
                                    Headphone
                                </label></li><hr />

                                <li><label htmlFor='mobile-cables'>
                                    <input type='checkbox' value='mobile cables' id='mobile-cables' onClick={
                                        handleCategoriesSwtich
                                    } />
                                    Mobile Cables

                                </label></li><hr />

                                <li><label htmlFor='watch-tempered'>
                                    <input type='checkbox' value='watch tempered' id='watch-tempered' onClick={
                                        handleCategoriesSwtich
                                    } />
                                    Watch Tempered

                                </label></li><hr />

                                <li><label htmlFor='wired-earphones'>
                                    <input type='checkbox' value='wired earphones' id='wired-earphones' onClick={
                                        handleCategoriesSwtich
                                    } />
                                    Wired Earphones

                                </label></li><hr />

                                <li><label htmlFor='wireless-earplugs'>

                                    <input type='checkbox' id='wireless-earplugs' value='wireless earplugs' onClick={
                                        handleCategoriesSwtich
                                    } />Wireless Earplugs


                                </label></li><hr />

                                <li><label htmlFor='wireless-neckband-earphone'>
                                    <input type='checkbox' id='wireless-neckband-earphone' value='wireless neckband earphone' onClick={
                                        handleCategoriesSwtich
                                    } />
                                    Wireless Neckband Earphone

                                </label></li><hr />

                            </ul>
                        </div>
                    </div>
                    <div className='priceFilter'>
                        <div className='title-heading'><i className="fa-regular fa-gem"></i>
                            <span>PRICE</span>
                            <hr />
                        </div>
                        <div className='price-filter'>

                        </div>
                    </div>
                    <div className='bestSeller'></div>
                </aside>
                <div className='main-content-div'>
                    <div className='shop-banner-img'>
                        <img className='discount-banner' src={require('../assets/exclusive-banner.jpg')} alt='banner' />
                    </div>
                    <div className='filter-control'>
                        <div className='view-box hide'>
                            {/* <div className='grid-view' title='Grid View'><i className="fa-sharp fa-solid fa-grid-2"></i></div> */}
                            <div className='list-view' title='List View' ><i className="fa-solid fa-list"></i></div>
                        </div>
                        <div className='sorting-div'>
                            <select className='sortBy' placeholder='Sort By' value={filters} onChange={sortingProducts}>
                                <option value='Sort by Latest'>Sort by Latest</option>
                                {/* <option value='Sort by Popularity'>Sort by Popularity</option>
                                <option value='Sort by Rating'>Sort by Rating </option> */}
                                <option value='l2h'>Sort by Price:Low to High</option>
                                <option value='h2l'>Sort by Price:High to Low</option>
                            </select>
                        </div>
                        <div className='pagination'><div>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <i class="fa-solid fa-angle-right"></i>
                            </button>
                        </div></div>
                    </div>
                    <div className='products-view-box'>
                        {products.length === 0 ? <p>No products found</p> :
                            products.slice(startIndex, endIndex).map((ele, indx) => {
                                return (
                                    <ProductCard key={indx + 'product'} productDetails={ele} />)

                            })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Shop
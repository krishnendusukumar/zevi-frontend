import React, { useEffect, useState } from "react";
import { ProductType } from "../../fakerData";
import ArrowUp from '../../assets/svg/angle-up-solid.svg'
import ArrowDown from '../../assets/svg/angle-down-solid.svg'
import ProductCard from '../ProductCard/ProductCard';
import './SearchResults.scss'

type SearchResultsProps = {
    productData: ProductType[],
    searchQuery: string,
}

type FilterType = {
    rating: boolean[],
    price: boolean[],
    brands: boolean[],
}

type ExpandFilterType = {
    rating: boolean,
    price: boolean,
    brands: boolean,
}

export default function SearchResults(props: SearchResultsProps) {
    const [filteredData, setFilteredData] = useState<ProductType[]>([]);
    const [filters, setFilters] = useState<FilterType>({
        rating: [false, false, false, false, false],
        price: [false, false, false],
        brands: [false, false],
    });
    const [displayData, setDisplayData] = useState<ProductType[]>(props.productData)
    const [expandFilter, setExpandFilter] = useState<ExpandFilterType>({ rating: true, price: true, brands: true })

    useEffect(() => {
        setFilteredData(props.productData);
        const newFilterData: ProductType[] = [];
        for (let i = 0; i < filters.rating.length; i++) {
            if (filters.rating[i]) {
                filteredData.forEach((element) => {
                    if (element.rating === i + 1) {
                        newFilterData.push(element);
                    }
                });
            }
        }


        //brands check
        if (filters.brands[0]) {
            filteredData.forEach((element) => {
                if (element.brands === true) newFilterData.push(element);
            })
        }
        if (filters.brands[1]) {
            filteredData.forEach((element) => {
                if (element.brands === false) newFilterData.push(element)
            })
        }


        // Price comparisons
        if (filters.price[0]) {
            filteredData.forEach((element) => {
                if (Number(element.discountedPrice) < 500) {
                    newFilterData.push(element);
                }
            });
        } else if (filters.price[1]) {
            filteredData.forEach((element) => {
                if (Number(element.discountedPrice) >= 500 && Number(element.discountedPrice) <= 2000) {
                    newFilterData.push(element);
                }
            });
        } else if (filters.price[2]) {
            filteredData.forEach((element) => {
                if (Number(element.discountedPrice) > 2000) {
                    newFilterData.push(element);
                }
            });
        }
        setDisplayData(newFilterData);
    }, [filters]);

    return (
        <div className="search-results-section">
            <h3>Search Results</h3>
            <div>
                <div className="filter-section">

                    <div className='filter-header'>
                        <div>BRANDS</div>
                        <img onClick={() => setExpandFilter({ ...expandFilter, brands: !expandFilter.brands })} src={expandFilter.brands ? ArrowUp : ArrowDown} alt='show/hide' />
                    </div>
                    <div className={!expandFilter.brands ? 'hide' : 'show'}>
                        <ul>

                            <li>
                                <input type='checkbox'
                                    onChange={() => {
                                        const newFilters = [...filters.brands];
                                        newFilters[0] = !newFilters[0];
                                        setFilters({ ...filters, brands: newFilters });
                                    }}
                                />
                                <div className='rating-div'>MANGO</div>
                            </li>
                            <li>
                                <input type='checkbox'
                                    onChange={() => {
                                        const newFilters = [...filters.brands];
                                        newFilters[1] = !newFilters[1];
                                        setFilters({ ...filters, brands: newFilters });
                                    }}
                                />
                                <div className='rating-div'>H&M</div>
                            </li>

                        </ul>
                    </div>


                    <hr />
                    <div className="filter-header">
                        <div>Price Range</div>
                        <img
                            onClick={() => setExpandFilter({ ...expandFilter, price: !expandFilter.price })}
                            src={expandFilter.price ? ArrowDown : ArrowUp} alt="connection error" />
                    </div>
                    <div
                        className={expandFilter.price ? 'show' : 'hide'}>
                        <ul>
                            <li>
                                <input type='checkbox'
                                    onChange={() => {
                                        const newFilters = [...filters.price];
                                        newFilters[0] = !newFilters[0];
                                        setFilters({ ...filters, price: newFilters });
                                    }}
                                />
                                <div className='content'>Under 500</div>
                            </li>
                            <li>
                                <input type='checkbox'
                                    onChange={() => {
                                        const newFilters = [...filters.price];
                                        newFilters[1] = !newFilters[1];
                                        setFilters({ ...filters, price: newFilters });
                                    }}
                                />
                                <div className='content'>500 to 2000</div>
                            </li>
                            <li>
                                <input type='checkbox'
                                    onChange={() => {
                                        const newFilters = [...filters.price];
                                        newFilters[2] = !newFilters[2];
                                        setFilters({ ...filters, price: newFilters });
                                    }}
                                />
                                <div className='content'>Above 2000</div>
                            </li>
                        </ul>
                    </div>

                    <hr />
                    <div className="filter-header">
                        <div>Ratings</div>
                        <img
                            onClick={
                                () => setExpandFilter({ ...expandFilter, rating: !expandFilter.rating })}
                            src={expandFilter.rating ? ArrowUp : ArrowDown} alt="no connection" />
                    </div>
                    <div className={expandFilter.rating ? "show" : "hide"}>
                        <ul>
                            <li>
                                <input type='checkbox'
                                    onChange={() => {
                                        const newFilters = [...filters.rating];
                                        newFilters[4] = !newFilters[4];
                                        setFilters({ ...filters, rating: newFilters });
                                    }}
                                />
                                <div className='rating-div'>★★★★★</div>
                            </li>
                            <li>
                                <input type="checkbox"
                                    onChange={() => {
                                        const newFilters = [...filters.rating]
                                        newFilters[3] = !newFilters[3];
                                        setFilters({ ...filters, rating: newFilters })
                                    }}
                                />
                                <div className='rating-div'>★★★★☆</div>
                            </li>
                            <li>
                                <input type='checkbox'
                                    onChange={() => {
                                        const newFilters = [...filters.rating];
                                        newFilters[2] = !newFilters[2];
                                        setFilters({ ...filters, rating: newFilters });
                                    }}
                                />
                                <div className='rating-div'>★★★☆☆</div>
                            </li>

                            <li>
                                <input type='checkbox'
                                    onChange={() => {
                                        const newFilters = [...filters.rating];
                                        newFilters[1] = !newFilters[1];
                                        setFilters({ ...filters, rating: newFilters });
                                    }}
                                />
                                <div className='rating-div'>★★☆☆☆</div>
                            </li>

                            <li>
                                <input type='checkbox'
                                    onChange={() => {
                                        const newFilters = [...filters.rating];
                                        newFilters[0] = !newFilters[0];
                                        setFilters({ ...filters, rating: newFilters });
                                    }}
                                />
                                <div className='rating-div'>★☆☆☆☆</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='product-section'>
                    {
                        displayData.length === 0 ? 'NO RESULTS FOUND. TRY CHANGING THE FILTERS.' :
                            [...displayData].map((element, index) => (element.setDisplayActive) ? <ProductCard key={index} product={element} /> : <div></div>)
                    }
                </div>
            </div>
        </div >
    )
}
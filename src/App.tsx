import React, { useState, useEffect } from 'react';
import './App.scss';
import ButtonClick from './component/ButtonClick/ButtonClick';
import {
  TrendDataType, TrendsData, SuggestionData,
  ProductData, ProductType,
} from './fakerData';
import Logo from './component/Logo/Logo';
import SearchResults from './component/SearchResultsSection/SearchResults'
import SearchBoxCard from './component/SearchBox/SearchBox';


const App: React.FunctionComponent = () => {
  const [productData, setProductData] = useState<ProductType[]>(ProductData);
  const [trendsData, setTrendsData] = useState<TrendDataType[]>([]);
  const [suggestionData, setSuggestionData] = useState<string[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);


  useEffect(() => {
    setTrendsData(TrendsData);
    setSuggestionData(SuggestionData);
    setProductData(ProductData);
  }, []);

  return (
    <div className="App">
      <Logo />
      <ButtonClick
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showResults={showResults}
        setShowResults={setShowResults}
      />

      {
        showResults ?
          <SearchResults
            productData={productData}
            searchQuery={searchQuery} /> :
          (searchQuery.length !== 0 || showSuggestions) ?
            <SearchBoxCard
              trendsData={trendsData} suggestionData={suggestionData}
              setSearchQuery={setSearchQuery}
            /> : null
      }
    </div>
  );
}

export default App;

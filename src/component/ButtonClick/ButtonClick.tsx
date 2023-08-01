import React from "react";
import SearchSVG from '../../assets/svg/magnifying-glass-solid.svg';

import './ButtonClick.scss'


type ButtonClicked = {
    showSuggestions: boolean,
    setShowSuggestions: Function,
    searchQuery: string,
    setSearchQuery: Function,
    showResults: boolean,
    setShowResults: Function,
}

const ButtonClick = (props: ButtonClicked) => {
    return (
        <div className="search-box-container"
            onClick={() => props.setShowSuggestions(!props.showSuggestions)}>
            <input placeholder="search"
                value={props.searchQuery}
                onClick={(e) => props.setSearchQuery(e.currentTarget.value)}
                type="text" />
            <button
                onClick={() => props.setShowResults(!props.showResults)}

            >
                <img
                    src={SearchSVG}
                    alt="search" />
            </button>
        </div>
    )

}

export default ButtonClick
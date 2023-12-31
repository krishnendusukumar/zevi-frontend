
import TrendCard from '../TrendCard/TrendCard';
import { TrendDataType } from '../../fakerData';
import './SearchBox.scss';

type SearchBoxPropsType = {
    trendsData: TrendDataType[],
    suggestionData: string[],
    setSearchQuery: Function,
};

const SearchBoxCard = (props: SearchBoxPropsType) => {
    return (
        <div className='search-box-card'>
            <div>
                <h3> Latest trends</h3>
                <div className='trends-card-view'>
                    {
                        [...props.trendsData].map(
                            (element, index) => <TrendCard key={index}
                                setSearchQuery={props.setSearchQuery}
                                imgUrl={element.imgUrl} description={element.description} />)
                    }
                </div>
            </div>

            <div>
                <h3> Popular Suggestions</h3>
                <div>
                    {
                        [...props.suggestionData].map(
                            (element, index) => <div className='suggestions' key={index}
                                onClick={() => props.setSearchQuery(element)}>
                                {element}</div>,
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchBoxCard;

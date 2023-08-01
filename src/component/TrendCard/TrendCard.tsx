
import React from 'react';
import './TrendCard.scss';

type TrendCardProps = {

    imgUrl: string,
    description: String,
    setSearchQuery: Function,
};

const TrendCard = (props: TrendCardProps) => {
    return (
        <div className='trends-card-container'
            onClick={() => props.setSearchQuery(props.description)}>
            <img src={props.imgUrl} alt="Loading Image" />
            <div >{props.description}</div>
        </div>
    );
};

export default TrendCard;

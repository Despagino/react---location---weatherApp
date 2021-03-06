import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'It is chilly, need a jacket',
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer'
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            
            <i className={`${iconName} icon-left massive icon`} />
            <h1 className="seasonH1" >{text}</h1>
            <i className={`${iconName} icon-right massive icon`} />
        </div >
    )
}

export default SeasonDisplay;


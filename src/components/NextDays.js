import React from 'react';
import NextDayItem from './NextDayItem';

function NextDays({ nextDays }) {
    return (
        <center className="scroll-box py-2 my-5">
            {nextDays.map((nextDay,i) => <NextDayItem day={nextDay} key={i}/>)}
        </center>
    )
}

export default NextDays;

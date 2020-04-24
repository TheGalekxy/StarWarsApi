import React from 'react';

const Card = ({name = 'unknown', gender = 'n/a', weight = 'unknown', species = 'unknown' }) => {
    
    return (
        <div className='tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${species}2?200x200`} alt='species'/> {/* Added the '2' after the species variable in-case there is no species and hence an empty array */}
            <div>
                <h2> {name} </h2>
                <p> Gender: {gender} </p>
                <p> Weight: {weight} </p>
            </div>
        </div>
    );
}
 
export default Card
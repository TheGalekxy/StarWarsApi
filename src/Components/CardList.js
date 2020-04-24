import React from 'react';
import { people } from '../people'; // redundant because we destructure it below in the "const Cardlist"
import Card from './Card';

const CardList = ({ people }) => {
    return (
        <div>
            {
                people.map((user, i) => { // second part of a map is always the index (i)
                    return ( 
                        <Card 
                        key={people[i].url || '1'} 
                        species={ people[i].species || 'unknown'} 
                        name={people[i].name || 'Adam'} 
                        gender={people[i].gender || 'Male'} 
                        weight={people[i].mass || 'Too Much'}
                        />
                        );
                    })
}
            
        </div>
    );
    
}

// Card.defaultProps = {
//     key: '1', 
//     species: '1', 
//     name: 'Adam',
//     gender: 'Male',  
//     weight: 'Too Much'
// }

export default CardList;
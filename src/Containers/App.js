import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { people } from './people';
import Scroll from '../Components/Scroll';
import './App.css';

function App() {

    // React Hooks to handle the state
    const [people, setPeople] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    // const [count, setCount] = useState(0);
    
    useEffect(() => {

        const urls = [
                    'https://swapi.py4e.com/api/people/',
                    'https://swapi.py4e.com/api/people/?page=2',
                    'https://swapi.py4e.com/api/people/?page=3',
                    'https://swapi.py4e.com/api/people/?page=4',
                    'https://swapi.py4e.com/api/people/?page=5',
                    'https://swapi.py4e.com/api/people/?page=6',
                    'https://swapi.py4e.com/api/people/?page=7',
                    'https://swapi.py4e.com/api/people/?page=8',
                    'https://swapi.py4e.com/api/people/?page=9'
                  ]
        
        const getData = async () => {
            try {
            const [ page1, page2, page3, page4, page5, page6, page7, page8, page9 ] = await Promise.all(urls.map(async function(url) {
                const response = await fetch(url);
                const json = await response.json();
                return json
            }));
            // const peopleResults = Object.assign(page1.results, page2.results, page3.results);  // This didn't work because page3 would overide the previous pages because they had the same keys as previous pages
            // const peopleResults = page1.results.concat(page2.results, page3.results) // HELLLLLL YEAH! Got it working!! In order to get all them working I needed to concatenate all of the arrays together that are accessed through the page.results
            const peopleResults = [...page1.results, ...page2.results, ...page3.results, ...page4.results, ...page5.results, ...page6.results, ...page7.results, ...page8.results, ...page9.results,]    // updated to spread syntax to be more up-to-date
            //this.setState({ people: peopleResults}); // Had to remove the "set state to outside the second async function"
            setPeople(peopleResults) // Setting the state
            console.log('page1', page1.results);
            console.log('page2', page2.results);
            console.log('page3', page3.results);
            // console.log(count);
            } catch (error) {
                console.log(error);
            }
        }

        getData()
        
    }, []) // Adding the empty array prevents the hook from running repeatedly, only run once

    const onSearchChange = (event) => {
        setSearchfield(event.target.value) // Setting the search field to be equal to whatever is being typed in the search bar
    }

    const filteredPeople = people.filter(person => {
        return person.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !people.length ?  // if people.length is equal to 0
        <h1> Loading.... </h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Star Wars Api Project</h1>
                {/* <button onClick={()=>setCount(count+1)}> Click Me!</button> */}
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList people={filteredPeople} />
                </Scroll>
                    
            </div>


                // This ^^^ is the same as this below

        //    if (!people.length) { // if people.length is equal to 0
        //     return <h1> Loading.... </h1>
        // } else {
        //     return (
        //         <div className='tc'>
        //             <h1 className='f1'>Star Wars Api Project</h1>
        //             <SearchBox searchChange={this.onSearchChange} />
        //             <Scroll>
        //                 <CardList people={filteredPeople} />
        //             </Scroll>
                     
        //         </div>
            );
    }

export default App
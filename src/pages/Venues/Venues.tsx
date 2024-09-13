import './Venues.css'

import { useState, useEffect } from 'react';



const Venues = () => {

  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search])


  return(
    <div className='venues' >
      <div>
        <input
          type="text"
          placeholder="Search..."
          onKeyDown={(event) => {
            if(event.key === 'Enter') {
              setSearch(event.target.value);
            }}
          }
        />
        <button
        onClick={(event) => {
          event.preventDefault();
          setSearch(event.target.parentElement.querySelector('input').value);
        }}>Search</button>
      </div>
      <div>
        {

        }
      </div>
    </div>
  );
}

export default Venues;
import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input type="search" className="pa3 ba b--green bg-lightest-blue br3"
                placeholder="Search Robots" onChange={searchChange} />
        </div>
    );
};

export default SearchBox;   
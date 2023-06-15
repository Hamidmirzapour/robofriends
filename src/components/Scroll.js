import React from 'react';

const Scroll = (props) => {
    return (
        <div className="pa2 ma3" style={{ overflowY: 'scroll', border: '5px solid rgba(0, 50, 150, 0.1)', height: '700px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;
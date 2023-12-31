import React from "react";

const Card = ({ id, name, email }) => {
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="{email}" />
            <div>
                <h3>{name}</h3>
                <h3>{email}</h3>
            </div>
        </div>
    );
};

export default Card;
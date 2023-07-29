import React from 'react';

const Card = ({ name, email, id}) => {
    return (
            <div className='bg-light-blue outline w-6 pa2 mr4'>
            <img alt='robot' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            </div>
    );
}

export default Card;
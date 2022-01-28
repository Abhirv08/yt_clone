import React from 'react';

export default function NavItem(props) {
    return (
        <div className='navItem'>
            <img src={props.src} alt={props.name} />
            <div className='name'>{props.name}</div>
        </div>
    )
}
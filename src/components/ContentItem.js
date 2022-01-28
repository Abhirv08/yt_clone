import React from 'react';

export default function ContentItem(props) {
    return (
        <div className='contentItem'>
            <div className='thumbnail'>
                <img className='mainImage' src={props.thumbnail} alt='' />
                <div className='channelDP'>
                    <div>Live</div>
                    <img src={props.dp} alt='' />
                </div>
                <div className='viewers'>{props.viewer}</div>
            </div>
            <div className='titleAndMenu'>
                <div className='title'>{props.title}</div>
                <img src='./images/menu.png' alt='' />
            </div>
            <div className='channelName'> {props.channelName} </div>
            <div className='duration'>
                <img src="./images/timer.png" alt='' />
                <div>{props.duration}</div>
            </div>
        </div>
    )
}

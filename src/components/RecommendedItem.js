import React from 'react';



function RecommendedItem(props) {

    var isbutton
    if (props.isButton) {
        isbutton = <button>{props.buttonContent}</button>
    } else {
        isbutton = <div></div>
    }

    return (
        <div className='recommendedPartItem'>
            <div className='titleAndDp'>
                <div className='dp'>
                    <img src={props.src} alt={props.name} />
                    <div className='dot'></div>
                </div>
                <div className='name'>{props.name}</div>
            </div>
            {isbutton}
        </div>
    )
}

export default RecommendedItem;
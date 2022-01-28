import React from 'react';
import NavItem from './NavItem';
import RecommendedItem from './RecommendedItem';

export default function Navsection() {
    return (
        <div className='navsection'>
            <div className='home'>
                <NavItem name='Home' src='./images/home.png' />
                <img className='exit' src='./images/exit.png' alt='exit' />
            </div>
            <NavItem name='Culture' src='./images/culture.png' />
            <NavItem name='Rooms' src='./images/rooms.png' />
            <NavItem name='Playlist' src='./images/playlist.png' />
            <div className='roomsAndCreators'>
                <div className='nav-title'>Recommended Rooms</div>
                <RecommendedItem src='./images/dp.png' name='CodeWithHarry' buttonContent="join" isButton="true" />
                <RecommendedItem src='./images/dp.png' name='Clever Programmer' buttonContent="join" isButton="true"/>
                <RecommendedItem src='./images/dp.png' name='WebDevSimplified' buttonContent="join"  isButton="true"/>
                <RecommendedItem src='./images/dp.png' name='Finlight' buttonContent="join"  isButton="true"/>
                <RecommendedItem src='./images/dp.png' name='Finlight' buttonContent="join"  isButton="true"/>
                <RecommendedItem src='./images/dp.png' name='Finlight' buttonContent="join"  isButton="true"/>
                <RecommendedItem src='./images/dp.png' name='Finlight' buttonContent="join"  isButton="true"/>
                <RecommendedItem src='./images/dp.png' name='Finlight' buttonContent="join"  isButton="true"/>
            </div>
            <div className='seeMore'> see more </div>
            <div className='roomsAndCreators'>
                <div className='nav-title'>Recommended Creators</div>
                <RecommendedItem src='./images/dp.png' name='Finlight' buttonContent='Room' isButton="true"/>
                <RecommendedItem src='./images/dp.png' name='Finlight' />
                <RecommendedItem src='./images/dp.png' name='Finlight' buttonContent='Room' isButton="true"/>
                <RecommendedItem src='./images/dp.png' name='Finlight' buttonContent='Room' isButton="true"/>
                <RecommendedItem src='./images/dp.png' name='Finlight' />
                <RecommendedItem src='./images/dp.png' name='Finlight' buttonContent='Room' isButton="true"/>
            </div>
            <div className='seeMore'> see more </div>
        </div>
    )
}
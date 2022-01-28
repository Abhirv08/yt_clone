import React from 'react';
import ContentItem from './ContentItem'

export default function Contents() {
    return (
        <div className='contents'>
            <div className='tracks'>
                <div className='event-title'>TOP <span>LIVE EVENTS</span> FROM <span className='event-name'>DATA SCIENCE</span> WORLD</div>
                <div className='container'>
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="123k Viewers"
                        title="Updated Skills For Data Science Based on Experience"
                        channelName="Krish Naik"
                        duration="01:20:00"
                    />
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="1.2k Viewers"
                        title="Learn Data Science Tutorial- Full course for Beginners"
                        channelName="FreeCodeCamp.Org.datalabcc"
                        duration="00:20:00"
                    />
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="14k Viewers"
                        title="What Really is Data Science? Told by a Data Scientist"
                        channelName="Joma Tech"
                        duration="02:20:00"
                    />
                </div>
                <div className='seeMore navitem-seemore'>SEE MORE</div>
            </div>
            <div className='tracks'>
                <div className='event-title'>TOP <span>LIVE EVENTS</span> FROM <span className='event-name'>SOCIAL ENGINEERING</span> WORLD</div>
                <div className='container'>
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="13k Viewers"
                        title="Stop Combining Strings The Old Way"
                        channelName="Web Dev Simplified"
                        duration="02:20:00"
                    />
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="129k Viewers"
                        title="🔴Build Modern Cryptopunk Clone With React.js & Web 3.0"
                        channelName="Clever Programmer"
                        duration="05:20:00"
                    />
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="145k Viewers"
                        title="🔴Metaverse WEB 3.0 React.js Challenge | Ultimate Course"
                        channelName="Sonny Sangha"
                        duration="05:20:00"
                    />
                </div>
                <div className='seeMore navitem-seemore' >SEE MORE</div>
            </div>
            <div className='tracks'>
                <div className='event-title'>TOP <span>LIVE EVENTS</span> FROM <span className='event-name'>FINANCE & INVESTMENT</span> WORLD</div>
                <div className='container'>
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="12k Viewers"
                        title="1 stock, 100% gains | Multibagger Stock Finding"
                        channelName="Aksht Shrivastava"
                        duration="00:50:30"
                    />
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="102k Viewers"
                        title="You can be a CROREPATI | Investing with 20,000 salary"
                        channelName="Let's make you rich"
                        duration="00:40:00"
                    />
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="1.2M Viewers"
                        title="Best Personal Finance Strategies for 2020 | How ..."
                        channelName="Sonny Sangha"
                        duration="05:20:00"
                    />
                </div>
                <div className='seeMore navitem-seemore'>SEE MORE</div>
            </div>
            <div className='tracks'>
                <div className='event-title'>TOP <span>LIVE EVENTS</span> FROM <span className='event-name'>ENTREPRENEURSHIP</span> WORLD</div>
                <div className='container'>
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="12M Viewers"
                        title="Limited Edition Empathy Wines and VeerFriends..."
                        channelName="GaryVee"
                        duration="04:26:30"
                    />
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="1.2k Viewers"
                        title="How To Start A MILLION DOLLAR Startup- Step..."
                        channelName="BeerBiceps"
                        duration="02:10:00"
                    />
                    <ContentItem
                        thumbnail="./images/thumbnail.jpg"
                        dp='./images/dp.png'
                        viewer="1.2k Viewers"
                        title="Joe Rogan Experience #1309 - Naval Ravikant"
                        channelName="PowerfulJRE"
                        duration="10:40:00"
                    />
                </div>
                <div className='seeMore navitem-seemore'>SEE MORE</div>
            </div>
        </div>
    )
}
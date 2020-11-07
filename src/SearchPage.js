import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';


function SearchPage() {
    return (
        <div className="searchPage">
          <div className="searchPage__filter">
            <TuneOutlinedIcon />          
            <h2>FILTER</h2>          
          </div>
          <hr />  

        <ChannelRow 
            image="//yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Clever Programmer"
            verified
            subs="820"
            noOfVideos={382}
            description="You can find awesome programming lessons"
        />

        <hr />

        <VideoRow 
            views="34K"
            subs="820K"
            description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript on"
            timestamp="Streamed 2 days ago"
            channel="Celver Programmer"
            title="🔴Let's build an app with REACT NATIVE!(Qazi and Sonny)"
            image="https://i.ytimg.com/vi/hggGvwA_tcc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDstmLBwCrcvhvHPfr8tS-jVjULow"
        />
        <VideoRow 
            views="34K"
            subs="820K"
            description="Do you want a FREE Training on How to Build the Netflix Clone? https://event.webinarjam.com/register/2/ow7o4fm."
            timestamp="Premiers 10/31/20, 1:00 AM"
            channel="Celver Programmer"
            title="🔴 Let’s Build Twitch Clone for Beginners with React by Clever Programmer No views"
            image="https://i.ytimg.com/vi/gLNIVdtaW3A/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCtzgdjrMXAZpWpOOzX38LqwxYnbg"
        />
        <VideoRow 
            views="1.2M"
            subs="820K"
            description="Here is the best free javascript programming course on the planet. Made with lots of ❤️. Take your web development skills to the ..."
            timestamp="11 months ago"
            channel="Celver Programmer"
            title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020] by Clever Programmer 11 months ago 7 hours, 57 minutes 1,240,620 views"
            image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC4E7lNmU8F0kwZ520ia5N7KsWbhg"
        />


        </div>
    );
}

export default SearchPage;

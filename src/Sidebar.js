import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SidebarRow from './SidebarRow';
import { Link } from 'react-router-dom';



import './Sidebar.css';




function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>
                <SidebarRow selected Icon={HomeIcon} title="Home" />         
            </Link>
            <Link to="/trending" style={{ textDecoration: 'none', color: 'black'}} tabindex="0" aria-disabled="false" aria-disabled="true">
                <SidebarRow Icon={WhatshotIcon} title="Trending" />
            </Link>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar;

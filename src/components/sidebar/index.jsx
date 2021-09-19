import React from 'react';
import './style.css';  
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ()=>{
    return (
        <>
            <div className="sidebar">
                <div className="menu_icon">
                    <MenuIcon />
                </div>
                <div className="icon_list">
                    <div className="icon">
                        <HomeIcon />
                    </div>
                    <div className="icon">
                        <AccountBoxIcon />
                    </div>
                    <div className="icon">
                        <InsertDriveFileIcon />
                    </div>
                    <div className="icon">
                        <AssignmentIcon />
                    </div>
                    <div className="icon">
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Sidebar;
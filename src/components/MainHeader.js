import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const MainHeader = () => {
    return (
        <header id='mainHeader'>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Redux-Todo
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
};

export default MainHeader;
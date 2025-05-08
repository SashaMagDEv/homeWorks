import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Link, useLocation} from 'react-router-dom';


const Header = () => {
    const location = useLocation();
    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Резюме';
            case '/todo':
                return 'TODO';
            default:
                return 'My Profile';
        }
    };
    return (
        <AppBar position="static" className={'mb-5'}>
            <Toolbar className={'flex justify-between'}>
                <Typography variant="h6">{getTitle()}</Typography>
                <div>
                    <Button color="inherit" component={Link} to="/">Головна</Button>
                    <Button color="inherit" component={Link} to="/todo">TODO</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Header;
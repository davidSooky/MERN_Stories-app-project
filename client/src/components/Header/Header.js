import React, { useState } from 'react';
import { AppBar, Typography, IconButton, Menu, MenuItem, Fade } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "../../styles";

const Header = ({ setOpen }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = () => {
        setAnchorEl(null);
        setOpen(true);
    };

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h3" align="center">Stories</Typography>
                <IconButton className={classes.menuBtn} aria-label="open menu" disableRipple onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <MenuIcon style={{color: green[100]}} size="medium" />
                </IconButton>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    TransitionComponent={Fade}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem>Login</MenuItem>
                    <MenuItem onClick={handleOpen}>Create story</MenuItem>
                </Menu>
        </AppBar>
    );
};

export default Header;
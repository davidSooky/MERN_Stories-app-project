import React, { useState } from 'react';
import { AppBar, Typography, IconButton, Menu, MenuItem, Fade, Toolbar, Avatar } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "../../styles";

const Header = ({ setOpen }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation().pathname;

    const user = null;
    const handleOpen = () => {
        setAnchorEl(null);
        setOpen(true);
    };

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">Stories</Typography>
            <IconButton className={classes.menuBtn} aria-label="open menu" disableRipple onClick={(e) => setAnchorEl(e.currentTarget)}>
                <MenuIcon style={{color: green[100]}} size="medium" />
            </IconButton>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar 
                            className={classes.purple}
                            alt={user.result.name}
                            src={user.result.imageUrl}
                        >
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    </div>
                ) : ""
                }
            </Toolbar>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                TransitionComponent={Fade}
                onClose={() => setAnchorEl(null)}
            >
                {user
                    ?  <MenuItem>Logout</MenuItem>
                    :  <MenuItem component={Link} to="/auth" onClick={() => setAnchorEl(null)}>Login</MenuItem>
                }
                {location === "/" ? <MenuItem onClick={handleOpen}>Create story</MenuItem> : ""}
            </Menu>
        </AppBar>
    );
};

export default Header;
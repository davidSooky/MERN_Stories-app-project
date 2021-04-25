import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, FormControlLabel, Switch } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post";
import useStyles from "../../styles";

const Posts = ({ setOpen }) => {
    const [myStories, setMyStories] = useState(false);
    const [user] = useState(JSON.parse(localStorage.getItem("profile")));
    const posts = useSelector((state) => state.posts);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        if(myStories) {
            setFilteredPosts(posts.filter(post => post.creator === user?.result?._id || post.creator === user?.result?.googleId));
        } else {
            setFilteredPosts([]);
        }
    }, [myStories, user, posts]);

    const renderPosts = array => {
        return array.map(el => (
            <Grid key={el._id} item xs={12} sm={4}>
                <Post post={el} setOpen={setOpen} />
            </Grid>
        ));
    };

    return (
        !posts.length ? <CircularProgress /> :
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {user && (<Grid item xs={12} sm={12} style={{textAlign: "center", color: "#fff"}}>
                    <FormControlLabel
                    control={
                    <Switch
                        checked={myStories}
                        onChange={(e) => setMyStories(e.target.checked)}
                        name="myStories"
                        color="primary"
                    />
                    }
                    label="My stories"
                    labelPlacement="top"
                    />
                </Grid>)}
                {myStories ? renderPosts(filteredPosts) : renderPosts(posts)}
            </Grid>
    );
};

export default Posts;
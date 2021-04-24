import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../actions/posts";
import { setCurrentID } from "../../actions/currentID";
import useStyles from "../../styles";

const Form = ({ setOpen }) => {
    const currentId = useSelector(state => state.id);
    const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem("profile"));
    const dispatch = useDispatch();
    
    const [postData, setPostData] = useState({
        title:"", message:"", tags:"", selectedFile:""
    });

    const classes = useStyles();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
        } else {
            dispatch(createPost({...postData, name: user?.result?.name}));
        }
        clear(e);
        setOpen(false);
    };

    const clear = (e) => {
        e.preventDefault();

        dispatch(setCurrentID(null));
        setPostData({title:"", message:"", tags:"", selectedFile:""});
    };
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h5" style={{color: "#2E4159"}}>{currentId ? "Editing" : "Creating"} a story</Typography>
                <TextField name="title" required variant="standard" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                <TextField name="message" variant="standard" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                <TextField name="tags" variant="standard" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(",")})} />
                <div className={classes.fileInput}>
                    <label className={classes.uploadLabel}>
                        <Button size="small" variant="contained">
                            <PermMediaIcon fontSize="medium" />
                            &nbsp;Select a picture...
                        </Button>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                        />
                    </label>
                </div>
                <Button className={classes.buttonSubmit} variant="outlined" color="primary" size="large" type="submit" fullWidth>Create</Button>
                <Button className={classes.buttonClear} variant="outlined" color="secondary" size="large" onClick={clear} type="submit" fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;
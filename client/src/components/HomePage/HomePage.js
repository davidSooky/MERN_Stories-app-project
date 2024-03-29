import React, { useEffect } from 'react';
import { Container, Grid, Grow, Modal, Backdrop, Fade } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "../../styles";

const HomePage = ({ setOpen, open }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxwidth="lg">
            <Grow in>
                <Container className={classes.secondaryContainer}>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                        >
                        <Fade in={open}>
                            <Form setOpen={setOpen} />
                        </Fade>
                    </Modal>
                    <Grid container justify="space-between" alignItems="center" spacing={3}>
                        <Grid item xs={12} sm={10} style={{margin: "0 auto"}}>
                            <Posts setOpen={setOpen} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow> 
        </Container>
    );
};

export default HomePage;
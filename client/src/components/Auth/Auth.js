import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";

import Input from "./Input";

import useStyles from "./styles";

const Auth = () => {
    const classes = useStyles();

    const isSignup = true;

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" type="text" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" type="text" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" autoComplete={"off"}/>
                        <Input name="password" label="Password" handleChange={handleChange} />
                        {isSignup && <Input name="confirmPassword" label="Confirm password" handleChange={handleChange} />}
                    </Grid>
                    <Button type="submit" className={classes.submit} fullWidth variant="contained" color="primary">
                        {isSignup ? "Sign Up" :"Sign In"}
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
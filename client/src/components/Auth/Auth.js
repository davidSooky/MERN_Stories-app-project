import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Input from "./Input";
import Icon from "./icon";
import { signin, signup } from "../../actions/auth";

import useStyles from "./styles";

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup) {
            dispatch(signup(formData, history));
        }else {
            dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: "AUTH", data: { result, token }});
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = () => {
        console.log("Sign in was unsuccessful. Try again later.");
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
                    {
                        !isSignup && (
                            <>
                            <Typography align="center" variant="body2" style={{marginBottom: "10px"}}>or</Typography>
                            <GoogleLogin
                                clientId="260849353642-csbtelruhda0e3dkjcnvolt3sakksdcl.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button
                                        className={classes.googleButton}
                                        color="primary"
                                        fullWidth
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        startIcon={<Icon />}
                                        variant="contained"
                                    >
                                        Sign in with Google
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy={"single_host_origin"}
                            />
                            </>
                        )
                    }
                    <Grid container justify="flex-end">
                        <Button onClick={() => setIsSignup(!isSignup)} disableRipple>
                            {isSignup
                                ? "Already have an account ? Sign in"
                                : "Does not own an account ? Sign up"
                             }
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
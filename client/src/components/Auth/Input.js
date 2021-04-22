import React, { useState } from 'react';
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({ half, label, name, type, handleChange, autoFocus, autoComplete }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
                name={name}
                type={type || showPassword ? "text" : "password"}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                InputProps={(name === "password" || name === "confirmPassword") ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }: null}
            />
        </Grid>
    );
};

export default Input;
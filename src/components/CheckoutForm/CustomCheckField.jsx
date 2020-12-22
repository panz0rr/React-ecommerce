import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {
    const { control } = useFormContext();
    return (
        <Grid item sx={12} sm={6}>
            <Controller 
            as={TextField} 
            control={control} 
            fullWidth
            name={name}
            label={label}
            required
            />
        </Grid>
    )
}

export default FormInput;

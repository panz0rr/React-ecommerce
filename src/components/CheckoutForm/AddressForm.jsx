import React, {useState} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, useTheme } from '@material-ui/core';
import {useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomCheckField';
import { commerce } from '../../lib/commerce';

const AddressForm = () => {
    const methods = useForm();
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState('');


    return (
        <>
        <Typography variant="h6" gutterBottom>
            Shipping Address
        </Typography>
        <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <FormInput required name='firstName' label='First name' />
                    <FormInput required name='lastName' label='Last name' />
                    <FormInput required name='address1' label='Address' />
                    <FormInput required name='email' label='Email' />
                    <FormInput required name='city' label='City' />
                    <FormInput required name='zip' label='Postal code' />

                    <Grid item sx={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select
                            </MenuItem>
                        </Select>
                    </Grid>

                    
                    <Grid item sx={12} sm={6}>
                        <InputLabel>Shipping Subdivisiob</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select
                            </MenuItem>
                        </Select>
                    </Grid>

                    
                    <Grid item sx={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select
                            </MenuItem>
                        </Select>
                    </Grid>
                    
                </Grid>
            </form>
        </FormProvider>
        </>
    )
}

export default AddressForm;

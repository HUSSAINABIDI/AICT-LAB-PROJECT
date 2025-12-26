import React from 'react'
import '../styles/Contact.css'

import { useForm } from "react-hook-form"

import { TextField, Radio, Select, RadioGroup, FormControlLabel, FormControl, FormLabel, InputLabel, MenuItem, Button, Typography } from '@mui/material'
import { useState } from "react"

const Contact = () => {
  const [Country, setCountry] = useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  console.log(watch("example"))

  return (
    <div className='container'>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="input-row">
          <div className="form-group">
            <TextField className='input' sx={{ margin: 2 }}
              required
              id="outlined-required"
              label="First Name"
              {...register("firstName", {
                required: "please filled this field", minLength: { value: 3, message: 'last name atleast contain 3 letters' }, maxLength: { value: 10, message: 'last name max value contain 10 letters' }, pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'First name should only contain alphabets'
                }
              })}
            />
            {errors.firstName && <Typography className='error'>{errors.firstName.message}</Typography>}
          </div>
          <div className="form-group">
            <TextField className='input' sx={{ margin: 2 }}
              required
              id="outlined-required"
              label="Last Name"
              {...register("LastName", {
                required: "please filled this field", minLength: { value: 3, message: 'last name atleast contain 3 letters' }, maxLength: { value: 10, message: 'last name max value contain 10 letters' }, pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Last name should only contain alphabets'
                }
              })}
            />
            {errors.LastName && <Typography className='error'>{errors.LastName.message}</Typography>}
          </div>
        </div>


        <div className="input-row">
          <div className="form-group">
            <TextField className='input' sx={{ margin: 2 }}
              required
              type='email'
              id="outlined-required"
              label="Email"
              {...register("Email", { required: true })}
            />
            {errors.Email && <Typography className='error'>This field is required</Typography>}
          </div>
          <div className="form-group">
            <TextField className='input' sx={{ margin: 2 }}
              required
              id="outlined-required"
              label="Password"
              {...register("password", { required: " This field is required", minLength: { value: 6, message: 'The password can be a minimum of 6 letters' }, maxLength: { value: 12, message: 'The password can be a maximum of 12 letters' } })}
            />
            {errors.password && <Typography className='error'>{errors.password.message}</Typography>}
          </div></div>


        <div className="input-row">
          <div className="form-group">
            <TextField className='input' sx={{ margin: 2 }}
              required
              id="outlined-required"
              type='number'
              label="Age"
              {...register("age", { required: " This field is required", min: { value: 12, message: 'The age can be a minimum of 12 years' }, max: { value: 80, message: 'The age can be a maximum of 80 years' } })}
            />
            {errors.age && <Typography className='error'>{errors.age.message}</Typography>}
          </div>
          <div className="form-group">
            <FormControl component="fieldset" sx={{ margin: 2 }} error={!!errors.Gender}>
              <FormLabel className='input' component="legend" id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio {...register("Gender", { required: 'This field is required' })} />} label="Female" />
                <FormControlLabel value="male" control={<Radio {...register("Gender", { required: 'This field is required' })} />} label="Male" />
                <FormControlLabel value="other" control={<Radio {...register("Gender", { required: 'This field is required' })} />} label="Other" />
              </RadioGroup>
              {errors.Gender && <Typography className='error'>{errors.Gender.message}</Typography>}
            </FormControl>
          </div></div>


        <div className="input-row">
          <div className="form-group">
            <TextField className='input' sx={{ margin: 2 }}
              required
              id="outlined-required"
              type='date'
              {...register("date", { required: true })}
            />
            {errors.date && <Typography className='error'>This field is required</Typography>}
          </div>
          <div className="form-group">
            <FormControl sx={{ margin: 2, width: 200 }}>
              <InputLabel className='input' id="demo-simple-select-label">Choose Country</InputLabel>
              <Select
                {...register("Country", { required: 'This field is required' })}
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Country}
                label="Choose Country"
                onChange={handleChange}

              >
                <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"America"}>America</MenuItem>
              </Select>
              {errors.Country && <Typography className='error'>{errors.Country.message}</Typography>}
            </FormControl>
          </div></div>
        <br />
        <Button className='button' size="large" sx={{ margin: 3 }} type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}

export default Contact

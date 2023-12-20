import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Link, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Register() {
  const paperStyle = { padding: 20, height: '65vh', width: 250, margin: '20px auto' };
  const butstyle = { margin: '25px 0' };
  const pwdstyle = { margin: 'auto' };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear password error when typing
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const handleSubmit = () => {
    // Validate password length and match
    if (formData.password.length < 8 || formData.password.length > 15) {
      setPasswordError('Password must be between 8 and 15 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Save form data to local storage or send to server
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect or perform other actions after successful registration
    window.location.href = 'http://localhost:5175/login';
  };

  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <h2>Sign Up</h2>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          variant="standard"
          style={pwdstyle}
          type="password"
          fullWidth
          required
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          variant="standard"
          style={pwdstyle}
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />}
          label="Remember Me"
        />
        {passwordError && (
          <Typography variant="body2" color="error">
            {passwordError}
          </Typography>
        )}
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={butstyle}
          sx={{ margin: '10px 0' }}
          fullWidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography component={RouterLink} to="/login" color="inherit">
          Do you have an account? Log In
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Register;

import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import { AppBar, Typography, Toolbar, Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const paperStyle = { padding: 20, height: '65vh', width: 250, margin: '20px auto' };
  const butstyle = { margin: '25px 0' };
  const pwdstyle = { margin: 'auto' };
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  useEffect(() => {
    // Check if user credentials are stored in local storage
    const storedCredentials = JSON.parse(localStorage.getItem('userCredentials'));
    if (storedCredentials) {
      setFormData({
        username: storedCredentials.username,
        password: storedCredentials.password,
        rememberMe: storedCredentials.rememberMe,
      });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    // Save user credentials to local storage
    localStorage.setItem('userCredentials', JSON.stringify(formData));

    // Add logic to handle user authentication
    // For example, you can send a request to a server to validate the credentials
    window.location.href = '/posts';
  };

  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <h2>SignIn</h2>
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
        <FormControlLabel
          control={<Checkbox name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />}
          label="Remember Me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={butstyle}
          sx={{ margin: '10px 0' }}
          fullwidth
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography component={RouterLink} to="/register" color="inherit">
          Do you have an account? Sign Up
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;

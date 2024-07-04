import axios from 'axios';
// import authHeader from './auth.header';
// import React, { Component } from 'react';
import config from 'environment/config'; // Import the central configuration

const API_URL = config.API_URL;

class AuthService {
  // Method to handle user login
  login(username, password) {
    return axios
      .post(`${API_URL}authenticate`, { username, password })
      .then(response => {
        if (response.data.token) {
          // Store the token and username in localStorage
          localStorage.setItem('user', JSON.stringify({
            token: response.data.token,
            username: username
          }));
        }
        return response.data;
      });
  }





  // login(username, password) {
  //   return axios
  //     .post(`${API_URL}authenticate`, { username, password })
  //     .then(response => {
  //       if (response.data.token) {
  //         localStorage.setItem('user', JSON.stringify(response.data));
  //       }
  //       return response.data;
  //     });
  // }

  // Method to handle user logout
  logout() {
    localStorage.removeItem('user');
  }

  // Method to retrieve the current user
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

// Create an instance of AuthService and export it
const authService = new AuthService();
export default authService;
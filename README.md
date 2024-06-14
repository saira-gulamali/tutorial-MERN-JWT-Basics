# JWT Basics API

Taken from Node Course - John Smilga - Section 8 - JWT Basics API

## Description

An API to demonstrate basic JSON web token functionality and implementation

## Tech Stack/Dependencies

- node
- dotenv
- express
- express-async-errors
- http-status-codes
- jsonwebtoken
- mongoose
- nodemon

## Usage

To start/run the app:

- npm install
- configure .env file with JWT_SECRET string
- npm start
- connect from the browser on localhost:3000
- to connect from Postman:
  - POST localhost:3000/api/v1/login
  - GET localhost:3000/api/v1/dashboard

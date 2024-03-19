# Chatvia

Chatvia is a MERN Stack real-time chat application that enables users to chat with each other and see who is online after signing up or logging in.

https://github.com/HebaHamdan2/Chatvia-MERN/assets/145803526/77f30daf-4ce6-48a0-ac8b-d5aef42811f4

## Demo
Here is a working live demo: [Chatvia](https://chatvia-mern.onrender.com/).

## Technologies Used

- Frontend:

   - React.js: Used for building the user interface and managing the application's state.
    - React Router: Used for routing within the application.
    - Axios: Used for making HTTP requests to the backend API.
    - Bootstrap: Used for styling and layout of the application.
    - Socket.IO Client: Used for real-time messaging with the server.
    - Zustand: Used for state management, particularly for managing user authentication and global application state.
    - React Toast: Used for displaying toast notifications.
    - React Helmet: Used for managing document head tags.
- Backend:
 
    - Node.js: Used as the backend server environment.
    - Express.js: Used as the backend web application framework for Node.js.
    - MongoDB: Used as the database to store application data.
    - Mongoose: Used as an Object Data Modeling (ODM) library for MongoDB and Node.js.
    - JWT (JSON Web Tokens): Used for user authentication and authorization.
    - bcrypt.js: Used for hashing passwords before storing them in the database.
    - Socket.IO: Used for real-time bidirectional event-based communication between clients and the server.
    - 
## Setup 
Clone this repo to your desktop and run npm install to install all the dependencies.

**.env file**
```
DB=...
SALT_ROUND=...
SECRET=...
NODE_ENV=...
```

## Usage
After you clone this repo to your desktop, go to its root directory and run npm install to install its dependencies.


### Build the app
```
npm run build
```
### Start the app
```
npm start
```

## Deployment
The website is deployed using the free hosting provided by render.




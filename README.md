# Chatvia💬
Chatvia is a real-time chat website built with the MERN stack. It features live messaging using Socket.IO, state management with Zustand, and notifications with React Toast. Users can send messages, see who's online, receive notifications, and enjoy a dynamic chat experience with a shake message effect. User accounts are personalized with unique usernames and avatars based on gender and name.

https://github.com/HebaHamdan2/Chatvia-MERN/assets/145803526/77f30daf-4ce6-48a0-ac8b-d5aef42811f4

## Demo
Here is a working live demo: [Chatvia](https://chatvia-mern.onrender.com/).

## Technologies Used

- Frontend:

    - React.js: Used for building the user interface and managing the application's state.
    - React Router: Used for routing within the application.
    - Axios: Used for making HTTP requests to the backend API.
    - Bootstrap: Used for styling and layout of the application.
    - Socket.IO Client: Used for real-time messaging and online user status with the server.
    - Zustand: Used for state management, particularly for managing user conversations.
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
  
## Learning Experience
This project taught me the intricacies of real-time chat applications using Socket.IO. I gained hands-on experience with Zustand for state management, learned to run the backend and frontend on the same port, and successfully deployed the application using Render.
  
## Deployment
The website is deployed using the free hosting provided by render.
## Inspired by
https://chatvia-node.themesbrand.website/. 

## Setup 
Clone this repo to your desktop and run npm install to install all the dependencies.

**.env file**
```
DB=...
SALT_ROUND=...
SECRET=...
NODE_ENV=...
```
### Build the app
```
npm run build
```
### Start the app
```
npm start
```
## Contributing
Feel free to reach out for more details or to collaborate!






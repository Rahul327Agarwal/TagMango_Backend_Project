# Tagmango Backend Project

A brief description of what this project does and who it's for

## Installation

Install my-project with npm

```bash
  git clone https://github.com/Rahul327Agarwal/TagMango_Backend_Project.git
  npm i 
  node server or nodemon server or npm start
```
## API Reference

#### Get all items

```http
  POST / https://tagmangobackendproject.herokuapp.com/
```    
#### POST Request body should look like below.

```bash
{
  “email”:’airiddha@tagmango.com’,
  “time”: “now”,
  “subject”:”test email ”,
  “body”:”hey this is test email”
},

{
“email”:”airiddha@tagmango.com”,
“time”:”1 hour later”,
“subject”:”1 hour later test email ${your name}”,
“body”:”hey this is test email”
},

{
“email”:”airiddha@tagmango.com”,
“Time”:”on a particular time( Ex- 21st march,2022,6:00 AM)”,
“Subject”:”particular time test email”,
“body”:”hey this is test email”
}
```

## 🚀 About Me
I'm a full stack developer...

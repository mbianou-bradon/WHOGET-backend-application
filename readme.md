# WhoGet Backend Server

This is a backend web service for the WhoGet mobile and web application. It exposes API endpoints where the mobile and web versions of the application can make CRUD operations to the application's database. The WhoGet backend server is developed with ExpressJS - a Nodejs Framework for writing application API's. The database management system is MongoDB and Mongoose is used as the object document mapper (ODM) for manipulating and querying the database.

## Installation

In order to setup this application on your local machine, you need to follow the steps below.

1. Clone the this repository to your local machine using the command below

```
git clone https://github.com/mbianou-bradon/WHOGET-backend-application.git
```

Navigate to the root directory with `cd whoget-backend-application` command.

2. In the root directory, run `npm install` command to install all dependencies needed for the app to run.
3. **Setup a connection to MongoDB**. Create a `.env` file at the root folder and assign credientials to the variables as folllows

```
MONGODB_URI=YOUR_MONGODB_URI
```

Then move create a folder, and give it the name `vars`. Move the `.env` file inside.

5. Run `npm run dev` start the development server.

## API endpoints

### Fetch all asks

Method: `GET`

```
http://localhost:4000/api/asks?category=&page=1&limit=3
```

Endpoint to fetch asks.
Query parameters; `category` is provided to filter the ask and return the asks that match the category passed. `page` and `limit` provide pagination parameters for which page to show and how many elements to display.

```
{
"error": false,
"result": 20,
"limit": 3,
"page": 1,
"category": [],
"asks": [
{
    "_id": "645fb86b2dcd957dda35416e",
    "message": "In need of an HP laptop with the following specs \nRAM : 8G\ngeneration: 5th \nprocessor speed : atleast 2Hz\nWebCam \nBluetooth ",
    "category": "Electronics",
    "image": [],
    "duration": 6,
    "visibility": true,
    "location": "Maroua",
    "report": 0,
    "userId": "645f9057f8bb8d52c3b607f4",
    "userName": "Mbianou Bradon",
    "userProfile": "",
    "userEmail": "mbianoubradon@gmail.com",
    "userPhone": "671242032",
    "createdAt": "2023-05-13T16:18:51.378Z",
    "updatedAt": "2023-05-13T16:18:51.378Z",
    "__v": 0
},
{
    "_id": "645fad862dcd957dda354150",
    "message": "Please in need of Gas stand at Bomaka Buea. Tight Budget.",
    "category": "Furniture",
    "image": [
    "pathto/images"
    ],
    "duration": 7,
    "visibility": true,
    "location": "Buea",
    "report": 0,
    "userId": "645f9057f8bb8d52c3b607f4",
    "userProfile": "",
    "userEmail": "mbianoubradon@gmail.com",
    "userPhone": "671242032",
    "createdAt": "2023-05-13T15:32:22.318Z",
    "updatedAt": "2023-05-13T15:32:22.318Z",
    "__v": 0
}
]
}
```

If no asks are found, the server returns an empty array.

```
{
    "error": false,
    "result": 20,
    "limit": 3,
    "page": 1,
    "asks": []
}
```

### Fetch one Ask by ID

Method: `GET`

```
localhost:4000/api/asks/645fb86b2dcd957dda35416e
```

Endpoint to fetch a single ask by ID. It takes the user ID as a request parameter and response with a JSON object which looks like below.

```
{
    
    "status": "OK",
    "data": {
        "_id": "645fb86b2dcd957dda35416e",
        "message": "In need of an HP laptop with the following specs \nRAM : 8G\ngeneration: 5th \nprocessor speed : atleast 2Hz\nWebCam \nBluetooth ",
        "category": "Electronics",
        "image": [],
        "duration": 6,
        "visibility": true,
        "location": "Maroua",
        "report": 0,
        "userId": "645f9057f8bb8d52c3b607f4",
        "userName": "Mbianou Bradon",
        "userProfile": "",
        "userEmail": "mbianoubradon@gmail.com",
        "userPhone": "671242032",
        "createdAt": "2023-05-13T16:18:51.378Z",
        "updatedAt": "2023-05-13T16:18:51.378Z",
        "__v": 0
    }
    
}
```

If the `ask` with given ID is not found it returns a `404` error response.

```
{
    "message": "Ask Doesn't exist! Not Found!"
}
```

### Create an Ask

Method: `POST`

```
localhost:4000/api/asks
```

This endpoint is used to create an Ask. It takes a payload (Ask object), use it to create an Ask document on the database and returns a new Ask ojbect
Example request body 👇

```
{
    "message": "I need a Full Stack Web developer. He should be based in Bamenda, has at least 2 years of experience in React, Redux, Express, MongoDB. Knowledge of PostGreSQL is a plus.",
    "category": "Web Development",
    "location": "Bamenda",
    "images": "https://firebasestorage.googleapis.com/v0/b/whoget-assets.appspot.com/o/images%2Feyong_vanisiah.jpg?alt=media&token=bcaa0792-e2f1-4d5b-b219-16bce322a1f3",
    "duration": 7,
    "visibility": true,
    "report" : 0,
	userId : "64378d001c6d5c18ddd79514",
	userName: "Mbianou Bradon" ,
	userProfile: "",
    userEmail: "mbianoubradon2000@gmail.com",
    userPhone:"671242032"
    userWhatsApp: "671242032"

}
```

This endpoint returns an object with a success massage and the newly created ask as below 👇

```
{
    
    "status": "OK",
    "data": {
        "_id": "645fb86b2dcd957dda35416e",
        "message": "I need a Full Stack Web developer. He should be based in Bamenda, has at least 2 years of experience in React, Redux, Express, MongoDB. Knowledge of PostGreSQL is a plus.",
        "category": "Web Development",
        "image": ["https://firebasestorage.googleapis.com/v0/b/whoget-assets.appspot.com/o/images%2Feyong_vanisiah.jpg?alt=media&token=bcaa0792-e2f1-4d5b-b219-16bce322a1f3"],
        "duration": 7,
        "visibility": true,
        "location": "Bamenda",
        "report": 0,
        "userId": "645f9057f8bb8d52c3b607f4",
        "userName": "Mbianou Bradon",
        "userProfile": "",
        "userEmail": "mbianoubradon@gmail.com",
        "userPhone": "671242032",
    }

}
```

### Update an Ask

Method: `PATCH`

```
localhost:4000/api/asks/645fb86b2dcd957dda35416e
```

Endpoint to update a single Ask item in the database. It takes a request body (payload) which contains fields that are to be updated, updates just those fields in the database and returns the newly updated Ask.

Example request body 👇

```
{
    "message": "I need a Full Stack Web developer. The applicant should be comfortable working remotely, has at least 2 years of experience in React, Redux, Express, MongoDB. Knowledge of PostGreSQL is a plus.",
    "location": "Douala",
    "userId": "645f9057f8bb8d52c3b607f4"

}
```

Server response 👇

```
{
    
    "status": "OK",
    "data": {
        "_id": "645fb86b2dcd957dda35416e",
        "message": "I need a Full Stack Web developer. The applicant should be comfortable working remotely, has at least 2 years of experience in React, Redux, Express, MongoDB. Knowledge of PostGreSQL is a plus.",
        "category": "Web Development",
        "image": ["https://firebasestorage.googleapis.com/v0/b/whoget-assets.appspot.com/o/images%2Feyong_vanisiah.jpg?alt=media&token=bcaa0792-e2f1-4d5b-b219-16bce322a1f3"],
        "duration": 7,
        "visibility": true,
        "location": "Douala",
        "report": 0,
        "userId": "645f9057f8bb8d52c3b607f4",
        "userName": "Mbianou Bradon",
        "userProfile": "",
        "userEmail": "mbianoubradon@gmail.com",
        "userPhone": "671242032",
    }

}
```

Notice that the location and the message has changed.

### Delete an Ask

Method: `DELETE`

```
localhost:4000/api/asks/645fb86b2dcd957dda35416e
```

Endpoint to delete a single Ask from the database. It takes a request parameter `id` (the user id) and returns the ID of the deleted ask.
A sample delete response is as shown below.

```
{
    
    "status": "OK",
    "data": {
        "_id": "645fb86b2dcd957dda35416e",
        "message": "I need a Full Stack Web developer. The applicant should be comfortable working remotely, has at least 2 years of experience in React, Redux, Express, MongoDB. Knowledge of PostGreSQL is a plus.",
        "category": "Web Development",
        "image": ["https://firebasestorage.googleapis.com/v0/b/whoget-assets.appspot.com/o/images%2Feyong_vanisiah.jpg?alt=media&token=bcaa0792-e2f1-4d5b-b219-16bce322a1f3"],
        "duration": 7,
        "visibility": true,
        "location": "Douala",
        "report": 0,
        "userId": "645f9057f8bb8d52c3b607f4",
        "userName": "Mbianou Bradon",
        "userProfile": "",
        "userEmail": "mbianoubradon@gmail.com",
        "userPhone": "671242032",
    }

}
```

### Create a single User

Method: `POST`

```
localhost:4000/api/users
```

The endpoint to create a user. It takes a request body which consists of a user object (payload) and returns the newly created user.
Example request body 👇

```
{
    "username": "Mbianou toussom ",
    "profileImage": "https://firebasestorage.googleapis.com/v0/b/whoget-assets.appspot.com/o/images%2Feyong_vanisiah.jpg?alt=media&token=bcaa0792-e2f1-4d5b-b219-16bce322a1f3",
    "age": 0,
    "town": "Buea",
    "country": "Cameroon",
    "category": [
    "Food,Travel,Electronics,Furniture,Movies,Rentals"
    ],
    "phoneNumber": 671242032,
    "email": "mbianoubradon@gmail.com",
    "userWhatsapp": "671242032",
    "strikes": 0,
    "ban": false,
    "firstTime": true,
}
```

Example response body 👇

```
{
    "Status": "OK",
    "data": {
        "username": "Mbianou toussom ",
        "profileImage": "https://firebasestorage.googleapis.com/v0/b/whoget-assets.appspot.com/o/images%2Feyong_vanisiah.jpg?alt=media&token=bcaa0792-e2f1-4d5b-b219-16bce322a1f3",
        "age": 0,
        "town": "Buea",
        "country": "Cameroon",
        "category": [
        "Food,Travel,Electronics,Furniture,Movies,Rentals"
        ],
        "phoneNumber": 671242032,
        "email": "mbianoubradon@gmail.com",
        "userWhatsapp": "671242032",
        "strikes": 0,
        "ban": false,
        "firstTime": true,
    }
}
```

### Fetch all users

Method: `GET`

```
localhost:4000/api/users?page=1&limit=2
```

Endpoint to fetch users in the database. It accepts query parms; `page` and `limit` for pagination.
Returns a list of users for a particular page and page limit.

Example 👇

```
{
    "error": false,
    "result": 6,
    "limit": 2,
    "page": 1,
    "users": [
        {
            "_id": "645f91dba5c5403c0e0f2ce3",
            "username": "Mbianou toussom ",
            "profileImage": "",
            "age": 0,
            "town": "",
            "country": "",
            "category": [
            "Food,Travel,Electronics,Furniture,Movies,Rentals"
            ],
            "phoneNumber": 671242032,
            "email": "mbianoubradon@gmail.com",
            "userWhatsapp": "671242032",
            "strikes": 0,
            "ban": false,
            "firstTime": true,
            "createdAt": "2023-05-13T13:34:19.748Z",
            "updatedAt": "2023-05-13T13:34:19.748Z",
            "__v": 0
        },
        {
            "_id": "645f9057f8bb8d52c3b607f4",
            "username": "Mbianou Bradon",
            "profileImage": "",
            "age": 0,
            "town": "",
            "country": "",
            "category": [
            "Food,Travel,Electronics,Furniture,Movies,Rentals"
            ],
            "phoneNumber": 671242032,
            "email": "mbianoubradon@gmail.com",
            "strikes": 0,
            "ban": false,
            "firstTime": true,
            "createdAt": "2023-05-13T13:27:51.928Z",
            "updatedAt": "2023-05-13T13:27:51.928Z",
            "__v": 0
        }
        ]
}
```

### Fetch a user by ID

Method: `GET`

```
localhost:4000/api/users/<user_id>
```

Endpont to fetch a single user by ID. It takes request parameter `id` and return a single user if found or `404` if not found.

Example response for URL `localhost:4000/api/users/645f91dba5c5403c0e0f2ce3`

```
{
    "status": "OK",
    "data": {
        "_id": "645f91dba5c5403c0e0f2ce3",
        "username": "Mbianou toussom ",
        "profileImage": "",
        "age": 0,
        "town": "",
        "country": "",
        "category": [
        "Food,Travel,Electronics,Furniture,Movies,Rentals"
        ],
        "phoneNumber": 671242032,
        "email": "mbianoubradon@gmail.com",
        "userWhatsapp": "671242032",
        "strikes": 0,
        "ban": false,
        "firstTime": true,
        "createdAt": "2023-05-13T13:34:19.748Z",
        "updatedAt": "2023-05-13T13:34:19.748Z",
        "__v": 0
    }
}
```


### Update a User

Method: `PATCH`

```
localhost:4000/api/users/<user_id>
```

Endpoint to update user fields. It takes receives a request body (payload) object that contains only the user properties to be replaced. It returns the newly updated User object.

Example
`http://localhost:5000/api/v1/users/6447d65c609ca79f62958e23`
Request body 👇

```
{
    "name": "Mbianou Bradon"
}
```

Response 👇

```
{
    "status": "OK",
    "data": {
        "_id": "645f91dba5c5403c0e0f2ce3",
        "username": "Mbianou Bradon",
        "profileImage": "",
        "age": 0,
        "town": "",
        "country": "",
        "category": [
        "Food,Travel,Electronics,Furniture,Movies,Rentals"
        ],
        "phoneNumber": 671242032,
        "email": "mbianoubradon@gmail.com",
        "userWhatsapp": "671242032",
        "strikes": 0,
        "ban": false,
        "firstTime": true,
    }
}
```

### Delete a User

Method: `DELETE`

```
localhost:4000/api/users/<user_id>
```

This is the endpoint to remove a user object. It takes a request params `id` and returns the id of the deleted user object.

Response for `http://localhost:4000/users/645f91dba5c5403c0e0f2ce3`

```
{
    "status": "OK",
    "data": {
        "_id": "645f91dba5c5403c0e0f2ce3",
        "username": "Mbianou Bradon",
        "profileImage": "",
        "age": 0,
        "town": "",
        "country": "",
        "category": [
        "Food,Travel,Electronics,Furniture,Movies,Rentals"
        ],
        "phoneNumber": 671242032,
        "email": "mbianoubradon@gmail.com",
        "userWhatsapp": "671242032",
        "strikes": 0,
        "ban": false,
        "firstTime": true,
    }
}
```

### Fetch all Categories

Method: `GET`

```
localhost:4000/api/category
```

Endpoint to fetch all categories in the database. It returns a list of categories.


### Create a category

Method: `POST`

```
localhost:4000/api/category
```

Creates a category. Receives a request body name of the category (`e.g` `{ name: "Technology" }` ) and returns the newly created category ( `e.g` `{ id: dfkdfhg49dfj3dffkf", name: "Technology" }`)

### Delete a category

Method: `DELETE`

```
localhost:4000/api/category/< category_id >
```

Deletes a category from the data store and returns the `id` of the deleted category.

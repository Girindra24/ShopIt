# FoodCart

> Food Cart built with the MERN stack & Redux.

## Features

- Full featured Food Cart
- Food reviews and ratings
- Top Food carousel
- Food pagination
- Food search feature
- User profile with orders
- Admin Food management
- Admin User management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (Seat No, payment method, etc)
- Payment (For now payment section has only one option(Credit Card/Debit Card) and is selected by default)
- Database seeder (food & users)

## Usage

### ES Modules in Node

ECMAScript Modules is used in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

pradeep@example.com (Customer)
123456

giri@example.com (Customer)
123456

gaurav@example.com (Customer)
123456

harshitha@example.com (Customer)
123456

deepika@example.com (Customer)
123456

sanjay@example.com (Customer)
123456
```

## License

Copyright (c) Feb2021_Giri

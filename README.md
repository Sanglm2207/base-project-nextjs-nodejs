WorkFlow

## Overview

This is a clone application for WorkFlow. This has been built for learning purpose. My plan is to improve this project and add more features in every release.


## Features 🤩

- Login/Register with JWT token authentication
- Ability to create/update/delete the board
- Ability to add/update/move/delete the card
- Background image library for the board
- Add labels to the card
- Supports adding of detail description in the card
- Invite user to the board
- Assign a card to the user

## Requirements

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)

## Steps to run this on your local

First install the MongoDB Compass for better visualization of data with MongoDB server.

1. Clone this repo using `git clone https://github.com/sanglm2207/workflow-app.git`
2. Create _.env.local_ and add this env variable `LOCAL_MONGODB=mongodb://localhost:27017/trello`
    Add `JWT_SECRET_KEY=randomstrings`
3. Run `yarn install`
4. Run `yarn dev`

`For unsplash gallery, api key is needed which can be generated from unsplash website`

### If you want to run the project using docker

Install docker on your machine and start it

1. Create _.env.development_ file.
2. Add `LOCAL_MONGODB=mongodb://mongodb:27017/trello`
3. Run `docker-compose up`

## What's next 🚀

- Comment on the card
- Add cypress testing

## Tech stacks

- Nextjs with typescript
- MongoDB for local development
- Mongo Atlas for production DB
- Chakra UI library


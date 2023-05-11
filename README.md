# Thought Bubble

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

Thought Bubble is an social network web application API. Users can share their thoughts, add friends, and react to their friends' thoughts. Thought Bubble uses a MongoDB database and uses Express.js for routing.

## Installation

1. Download the repository by running `git clone git@github.com:graceee96/thought-bubble.git` in the command line interface.
    > Alternative: run `git clone https://github.com/graceee96/thought-bubble.git` in the command line interface

2. Run `npm init -y` in the command line interface to create a ```package.json```

3. Install the following dependencies to run the application
    * express: `npm i express`
    * mongoose: `npm i mongoose`

## Usage

To start, run `node utils/seeds/seed.js` in the command line. This automatically creates the database in Mongo Compass and adds seed data. Then, start your server by running `node index.js` in the command line.

In Insomnia, data can be created, read, updated, and deleted using the correct routes:

- `/api/users`
    * `GET` - renders all users
    * `POST` - creates a new user

- `/api/users/:userId`
    * `GET` - searches for and renders a single user using their _id, including their thought data and friend data
    * `PUT` - updates information about a user
    * `DELETE` - deletes a user and also removes their associated thoughts

- `/api/users/:userId/friends/:friendId`
    * `POST` - adds a new friend to a user's friend list
    * `DELETE` - removes a friend from a user's friend list

- `/api/thoughts`
    * `GET` - renders all thoughts
    * `POST` - creates a new thought

- `/api/thoughts/:thoughtId`
    * `GET` - searches for and renders a single thought by its _id, including reactions
    * `PUT` - updates a thought by its _id
    * `DELETE` - removes a thought by its _id

- `/api/thoughts/:thoughtId/reactions`
    * `POST` - creates a reaction to a thought

- `/api/thoughts/:thoughtId/reactions/:reactionId`
    * `DELETE` - deletes a reaction to a thought

### Link to video walkthrough

https://drive.google.com/file/d/1IYR5k0yf9kk_Mww-_6hD710DCr_OD07Y/view?usp=sharing

## Credits

### Special Thanks
 Made with help from Bryan Swarthout, Shawn Tschoepe, and Scott McAnally.

## License
This repository is licensed under the [MIT License](https://opensource.org/licenses/MIT).
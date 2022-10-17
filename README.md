## Install dependencies

Run `yarn install`

## Development server

Run `yarn start` for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.
This command will also automatically run fake api. Navigate to http://localhost:3500/.

## Introduction
Design and implement a functional post-battle screen for a session based game.

Main Task
There are two teams, the winning team and loser team. Each team consists of 50 players.
The teams should be organized side by side.
Each player has a nickname and scores and can be in two states, dead or alive.

Also, there should be a tooltip with additional player info (total kills and deaths)
and a button to send a friend request.

Additional Task (Optional)
Implement a dummy backend for the task using any of REST/graphQL/GRPC

## Manual
### DB Structure:

path: /src/app/api/db.json

http://localhost:3500/winners
http://localhost:3500/losers

* id: number
* nickname: string 
* currentUser: boolean 
* kills: number 
* deaths: number 
* scores: number 
* isAlive: boolean 
* isFriendOfCurrent?: boolean

---
Victory/Defeat - depends on the value `currentUser` in winners or losers.

Your Team/Enemy Team - depends on the value `currentUser`.
Your Teams - always shows the team that has `currentUser = true`.

By default filtered by `score` DESC.

***WARNING! There shouldn't be two current users in the database!***
---

The current user is highlighted with a white border.

The green field indicates users who have `isFriendOfCurrent = true`.

---
To open a tooltip with additional information, hover over the character's nickname.

To add a character as a friend, click `Add to friends`.
To remove a character from friends, click `Remove`.


# WoWSC
WoWSC is a lightweight web-app written in SvelteJS and JavaScript which scrapes compiles data from raiderio and visualizes it using ChartJS. The goal of this project was to create something that is both elegant, and minimal, this was achieved used Svelte, a javascript compiler that helpes synchronize data from our scraper to our data visualizer. 

## NPM Dependences
- Svelete
- Chart.js
- Puppeteer
- Axios

## Building The Project
To build you project you must create a new svelete project and import all listed npm dependencies, a simple **npm run dev** will compile the project and open it on and open port

## Current state and future of the project
Currently this project is missing

- routing (routify, sapper)
- stable data grabbing (explained below)
- EU support

The future of this project relies on the API of WoW and Raiderio, and my own interest.

## The backend
Currently this project relies on one of the 2 data pullers (asyncGetReq.js). This script parses a raiderio search based off of a couple user paramaers, then performs 12 get requests on the users profile, this allows us to get a users entire dungeon history. Because raiderio provides no API to compelete this task we are expected to get all the data ourselfs. This current implementation is not ideal as any major raiderio change could result in the get requests failing. The current solution to this issue is a scraper, which is included but is not completely functional. 

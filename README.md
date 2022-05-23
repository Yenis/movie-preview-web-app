# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Important !

The following API is used to fetch data:
[https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)

You will need to register to obtain an API key in order to use this app.
Place it within a .env file in the root directory of this project.
REACT_APP_API_KEY="Your API key" - without quotes

## Installation

In the project directory, run this command from the terminal to install the necessary dependencies:

### `npm install`

## Application run

After installation is complete, run this command from the terminal:

### `npm start`

This runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Docker

Alternatively, if you have Docker installed on your system, you can download this docker image of the same app: 

`docker pull yenis92/movie-preview-web-app`

Then you can run it as a container from Docker Desktop by specifying PORT 3000, 
 
OR with this command from the terminal:

`docker run -p 3000:3000 yenis92/movie-preview-web-app`

### API

The following API is used to fetch data:\
[https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)

You will need to register to obtain an API key in order to use this app.\
Place it within a .env file in the root directory of this project.\
REACT_APP_API_KEY="Your API key" - without quotes

### MaterialUI

I've used MaterialUI [https://mui.com/](https://mui.com/) for almost all components in this project.

### Thought Process

Developing this app was a pretty straightforward process.

- After setting up the project, the first thing I did was test the API response, to identify the shape of data. 
- Then, I designed a header component, and a single card for a movie preview, mapping the desired data into the card.
- Next step - create a container that holds the cards. Make sure the layout is fine and good.
- After all of that was working as expected, I implemented a simple pagination, and following that, a search feature.
- Since I was required to use react-router-dom, I implemented the Search as a seperate page for now. I had better plans for it later, but sadly, wouldn't have been able to implement it in time.
- Finally, after doing some cleanup, I implemented a simple preview window for when a single movie from the list is clicked, supplying more detailed info about it.

### --- If I had more time to develop Section ---

First priority would be to fix the Pagination Bar, to prevent it from re-rendering along with the whole application. It is working as intended, but the re-render makes it lose the current page value.

Second Priority would be to re-structure the whole app to have one global state - the desired content, whether it is filtered, or is the result of a search. Doing so would also resolve a potential link problem between the Search and Pagination components.

Third Priority would be to include a filtering option for movies based on genre.

4. Additional work on styling each movies' individual card and preview window.

5. I would link-up Pagination with React-Router, to make each Page it's own route.

6. I would re-implement a Recent Movies Page, which I sadly had to cut due to time constraints.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

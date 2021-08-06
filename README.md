# Minimal Reddit [React-Redux Challenge](https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-react-and-redux-portfolio-project/modules/fecp-reddit-client/kanban_projects/reddit-client)

## Description

This project is a portfolio project through [Codecademy](https://codecademy.com) Front-End Engineer course. The goal of the project was to design, develop, and document a minimal [Reddit](https://www.reddit.com) client using React & Redux that displays Reddit's content but does not allow for any contribution.

If you would like to see it live, visit the final [Minimal Reddit](https://persigio-mini-reddit.netlify.app/).

---

## Table of Contents

- [Wireframes](#wireframes)
- [Technologies](#technologies)
- [Features](#features)
- [Future Additions](#future-additions)
- [See it Live](https://persigio-mini-reddit.netlify.app/)
- [Run Locally](#run-locally)

---

## Wireframes

These were completed with pen and paper that was then used to layout the site in Figma. However, I still need to get them in digital format to display here

## Technologies

This project makes use of the following technologies:

| *Technology*||
|---|---|
| **React** | For building user interface of the application |
| **Redux** | For application state management |
| **React-Markdown** | For converting api posts to proper format |
| **React Icons** | Provides popular icons |
| **Cypress** | For writing and executing E2E tests |

---

## Features

This project allows the user to do the following:

| *Feature*||
|---|---|
| **Search** | Users are able to search for a specific term |
| **Filter** | Users are able to filter selected subreddit by trending values |
| **Select Subreddit**| Users are able to update post list be selecting from one of the popular subreddits listed aside, or by selecting the subreddit in the post's header |
| **Show NSFW/Spoilers** | Users are able to toggle the view nsfw and spoiler content.   Content is defaulted hidden |
| **Shorten Text Posts** | Users are able to toggle the body of any post with text to shorten the length displayed |
| **View Comments** | Users are able to view comments, but not make any |

---

## Future Additions

Here are some additional features that I want to add in the future. These were not originally part of the original project parameters, but I think they will ehance the user experience of the site:

- ### About Subreddit Card

- ### Dark / Light Mode

- ### Sharable Links

- ### Upvote / Downvote Display

---

## See It Live

See the final [Minimal Reddit](https://persigio-mini-reddit.netlify.app/)

---

## Run Locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
In the project directory, you can run:

### `npm start`

> Runs the app in the development mode.  
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
> The page will reload if you make edits.  
> You will also see any lint errors in the console.

### `npm test`

> Launches the test runner in the interactive watch mode.  
> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run cypress`

> Launches the cypress test runner for E2E testing watch mode.

### `npm run build`

> Builds the app for production to the `build` folder.  
> It correctly bundles React in production mode and optimizes the build for the best performance.  

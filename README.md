# Github client
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It allows you to use some GIT management tools.


### Current features
* Logging in and out
* Star repositories
* Go to GitHub to see the selected repository


### How to use
It is possible to clone repository or download it as ZIP.

Install all dependencies via `yarn install`


In the project directory, you can run project with `npm start` or `yarn start`

You need to create your personal access token to get access to GitHub information.

* Open your account on GitHub and go to developer settings;
* Generate personal access token and grant all permissions;
* Create .env file and add your token with the name `REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN`

Now you can get access to GitHub information from your computer.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

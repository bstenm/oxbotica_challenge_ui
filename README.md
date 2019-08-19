[Oxbotica Challenge UI](https://github.com/bstenm/oxbotica_challenge_ui) built with [React](https://reactjs.org/) and [Redux](https://redux.js.org/) for state management.

Uses custom linting and prettier for code formatting, and githooks on top of [Create React App](https://github.com/facebook/create-react-app)

#### Run it

1. refer to [Oxbotica Challenge Api](https://github.com/bstenm/oxbotica_challenge_api) to get the api running

2. clone this repository

    > git clone git@github.com:bstenm/oxbotica_challenge_ui.git

3. cd into the repository

    > cd oxbotica_challenge_ui

4. install dependecies

-   using yarn:
    > yarn start
-   or with npm:
    > npm install

5. run it in development mode
    > yarn start

#### Githook

It runs the linter on the files staged on each git commit.

#### `yarn prettier`

Runs prettier on all your source files.

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Getting Started

Welcome to our app! 

To get started clone the repository to your local machine, open a terminal window, navigate to the project directory, and run:
`npm install`
`npm start`

This will install all the required dependencies, and start the web app in a browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Developer Documentation

## Styling Tools

To create the UI of our app we used two different styling libraries. The first was [react-bootstrap](https://react-bootstrap.github.io/). It provided us with a simple row column grid array to lay things out and organize our UI. The second library we used was [mui](https://mui.com/api/toggle-button-group/#main-content). The main reason for this library was its expansive selection of UI widgets and components. The `ToggleButtonGroup` component specifically gave us the form functionality that is present all throgughout our app. This widget also allowed us to easily allow the selection and de-selection of multiple row items.

## Design Architecture

We ended up going for a more quick and dirty approach with this app just to get things up and running, but The data and views are seperated as much as we were able to. All the different pages of the app are stored as components, Our firebase initialization and CRUD functionality is present inside two seperate utility files. Lastly, our data is stored within a singleton class for quick and easy access throughout the project.

## Navigation

For navigation we used the [react-router-dom](https://reactrouter.com/) library. Every button that is intended to navigate to a different page is wrapped in a `NavLink`, and navigates to one of the components st up with our router. For programatic navigation we used the `useHistory` function within the library. This can be seen in our `loading` page.

## Remote Storage
For remote data storage we used Google's [Firebase](https://firebase.google.com/) service. Firebase is filled with functionality for small and mid sized projects, but we mainly took advantage of their firestor database. It allows for easy reading and writing of multiple types of data.

## Data Structure
Our data is structured very simply. We have a dictionary using appliance names as the key, and average energy usage for that appliance as the value. The average energy usages have been scaled to a number between 1 - 1000.

## Data Calculations
After the user completes the questionaire, their values are averaged together, and an average usage between 1 - 1000 is generated and displayed back to the user.

## List of All Libraries Used
[react-bootstrap](https://react-bootstrap.github.io/)

[mui](https://mui.com/api/toggle-button-group/#main-content)

[react-router-dom](https://reactrouter.com/)

[Firebase](https://firebase.google.com/)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
We currently do not have any unit tests implimented, but are plannign on adding some in the future.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

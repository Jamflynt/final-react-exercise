# Final React Exercise
1a. Import the MCUShows.css file

1b. Create a function component called MCUShows

1c. Inside the MCUShows function/component, use the RETURN keyword with parentheses to have the MCUShows function/component return the following elements: h1, h2, and 4 p (paragraph) elements. Put the following text in each element. (NOTE: Notice the colon and space after each show name)

h1: "Disney+"<br>
h2: "MCU Show Release Dates"<br>
p element 1: "WandaVision: "<br>
p element 2: "The Falcon and the Winter Soldier: "<br>
p element 3: "Loki: "<br>
p element 4: "What If...?: "<br>
p element 5: "Hawkeye: "<br>

1d. Add the export line at the bottom of the file

2a. Open the App.js file and add the necessary import line at the top of the file that allows the MCUShows component to be used in the App.js file

2b. Inside the div in the App component, create an h1 with the following text: "FINAL REACT EXERCISE"

2c. Below the h1 pass in an MCUShows component

3a. Go back to the MCUShows.js file. Using inline styling in React, Set the font (A.K.A. font family) for the h1 to the "Georgia" font. Also, add an underline to the h1.

4a. Add a class name of "MCUShows" to the the div in the MCUShows component

4b. Open the MCUShows.css file and use the "MCUShows" class to set the following styles:

A 10px solid border with the following hexadecimal color: #121f56<br>
Width of 500px<br>
Padding of 10px<br>
Top and bottom margin of 0 (Zero) and use "auto" for the left and right margin<br>
Set the background color to the following hexadecimal color: #1d3e8d<br>
Set the text color to the following RGBA color: (255, 255, 255, 0.9).<br>

4c. Using the "MCUShows" class in a descendant selector, set the text align  CSS style/property to center the h1 in the MCUShows component.

5a. Below the MCUShows import in the App.js file, create the following variable:

const releaseDates = {<br>
 wandaVision: 'Jan 2021',<br>
 falconWinter: 'Mar 2021',<br>
 loki: 'June 2021',<br>
 whatIf: 'August 2021',<br>
 hawkeye: 'November 2021'<br>
}<br>

5b. Add a prop called "dates" to the MCUShows component that is being passed into the App.js component. Also, set the releaseDates variable as the value that is passed into the "dates" prop

5c. Go back to the MCUShows.js file. Plug the values from the dates property, which holds the value of the releaseDates object, in each p element after each appropriate show name. (HINT: The properties created for a component are stored in an object that can be accessed via a parameter in a function component)<br>

<hr>

Bonus<br>
6a. In the App.js file, import the useState function at the top of the file

6b. Create the following array variable below the releaseDates variable:

const mcuCharacters = [<br>
 'Scarlet Witch',<br>
 'Vision',<br>
 'Falcon',<br>
 'Winter Soldier',<br>
 'Loki',<br>
 'The Watcher',<br>
 'Hawkeye'<br>
];<br>

6c. Above the return line in the App function component, use the useState function to set the starting state value to 0 (Zero). Also, use destructuring to set the values in the array that is returned from the useState function to the following variable names…

const [index, setIndex]

6d. Below the MCUShows component in the App.js file create an h1 element with the following content inside: "Random MCU Character:"

6e. In the MCUShows component create a button below the final p (paragraph) element. Set the content/text for the button to the following text: "RANDOM MCU CHARACTER".

6f. Have a random MCU character name display in the new h1 element after "Random MCU Character: " whenever the RANDOM MCU CHARACTER button is clicked.

7a. In the App function component, use another useState function below the first one and set the starting state value to 0 (Zero) on this one as well. Also, use destructuring to set the values in the array that is returned from the useState function to the following variable names…

const [num, setNum]

7b. Below the Random MCU Character h1 in the App.js file create another h1 element with the following content inside: "Next MCU Character:"

7c. In the MCUShows component create another button below the "RANDOM MCU CHARACTER" button. Set the content/text for the button to the following text: "NEXT MCU CHARACTER".

7d. Have an MCU Character name display in the new h1 element after "Next MCU Character: " whenever the NEXT MCU CHARACTER button is clicked. Have this set up so that it will start with "Scarlet Witch" when the page loads and every time the NEXT MCU CHARACTER button is clicked have it display whichever MCU Character name comes next in the "mcuCharacters" array. Also, whenever it gets to "Hawkeye", who is the last name in the array, have it start back at "Scarlet Witch" when the button is pressed again.

8a. Use the useEffect Hook/Function so that the message "The Next MCU Character has been displayed" displays in an alert when the page loads and also when the "NEXT MCU CHARACTER" button is pressed, but NOT when the "RANDOM MCU CHARACTER" button is pressed. (NOTE: We have not covered this so you will need to look up how the useEffect Hook/Function works.) (HINT: You need to import the useEffect function/hook like you do for useState.)<br>

<hr>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

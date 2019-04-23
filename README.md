## App Requirements:

- The app loads with nothing except a "Submit expense" button.
- You can click the button to pop up a modal where you can enter "Description" and "Cost" (for bonus points, track "Quantity" as well, and dynamically update a "Total" field).
- When you submit an expense, it appears in a list, with a running total on the right side.
- This will all happen in the front-end only – no backend infrastructure is required. If you reload the page, all expenses will disappear.

## Install

`$ git clone https://github.com/celozano/expense-tracker.git`<br>
`$ cd PROJECT`<br>
`$ npm install`<br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
There are two test cases:

- renders without crashing
- gets correct running total

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

(This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).)

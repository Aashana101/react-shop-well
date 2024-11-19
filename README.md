# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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


# react-shop-well

## Steps to Install and Run

### 1. Clone the Repository
Open a terminal and run:

```bash

git clone <repository-url>
Replace <repository-url> with the URL of your GitHub repository. For example:
git clone https://github.com/username/project-name.git

Navigate to the Project Directory
Change into the project directory:
cd project-name

Install Dependencies
Use npm to install the required dependencies:
npm install
This command reads the package.json file and installs all dependencies into the node_modules directory.

Start the Development Server
Run the following command to start the application locally:
npm start
This will start a local development server and open the application in your default web browser at: http://localhost:3000

Troubleshooting
Port Conflict: If the server doesn't start due to a port conflict, specify an alternate port like this:
PORT=3001 npm start
Missing Dependencies: If you encounter errors related to missing packages, rerun:

npm install
Environment Variables: Ensure that any necessary .env file is set up in the root of the project with the required variables.


Challenges Faced and How They Were Overcome:
1. Implementing Dynamic Routing
Challenge: Setting up react-router-dom for navigating between the product listing and product details pages was initially confusing, especially handling dynamic routes like /product/:id.
Solution:
Studied the documentation of react-router-dom to understand how useParams and <Routes> work.
Ensured that product IDs were correctly passed and parsed to fetch the appropriate product details.
2. Optimizing Performance for Large Product Data
Challenge: Handling large datasets for products could potentially slow down the application.
Solution:
Implemented filtering, searching, and sorting to narrow down the dataset dynamically.

Optional Enhancements Implemented:
1. Sorting Products by Price
Feature: Added functionality to allow users to sort the products based on their price in ascending or descending order.
Implementation:
Implemented a sorting function in the ProductList component to reorder products when the user selects a sorting option.
Created a dropdown menu for users to select sorting options (ascending or descending price).
Leveraged React's useState and useEffect to dynamically sort the products whenever the user changes the sorting criteria.

2. Add to Cart Functionality
Feature: Enabled users to add products to the cart and display the number of items in the cart.
Implementation:
Added a cart state to manage the products added by the user.
Created an Add to Cart button that updates the cart whenever a product is added.
Displayed the total number of items in the cart in the header to provide immediate feedback to the user.

3. Animations for Hover Effects
Feature: Added hover effects and transitions to enhance the user experience.
Implementation:
Used CSS :hover selectors to create smooth hover effects for product cards and buttons.
Added subtle transitions to product images and buttons, making the UI feel more interactive and responsive.

Screenshots of the Application:

Product List Page with Sorting Option
<img src="file:///Users/aashanasharma/Desktop/Screenshot%202024-11-19%20at%2020.29.29.png" alt="Screenshot" width="600" height="400" />

Cart Functionality with Item Count
<img src="file:///Users/aashanasharma/Desktop/Screenshot%202024-11-19%20at%2020.30.07.png" alt="Screenshot" width="600" height="400" />

Hover Effects on Product Cards
<img src="file:///Users/aashanasharma/Desktop/Screenshot%202024-11-19%20at%2020.30.26.png" alt="Screenshot" width="600" height="400" />
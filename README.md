# Text-Editor

# Description:
This project is a Progressive Web Application (PWA) text editor that allows users to create and store notes or code snippets with or without an internet connection. It features offline functionality, data persistence using IndexedDB, and service worker caching for a seamless user experience.


## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)

## User story
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application

## Getting Started

- Clone the repository to your local machine: git clone <https://github.com/FisherK19/Text-Editor>
- Install dependencies: npm install
- Start the backend server: npm start
- Build the frontend assets: npm run build
- Access the application in your web browser at http://localhost:3000


## Usage
Open the text editor in your web browser.
Enter your content and click off the window to save it.
Close and reopen the text editor to retrieve your saved content.
Click on the Install button to install the text editor as a standalone application on your device.

## Screenshot:

![Text Editor](./Images/Screenshot%20PWA.png)


## Technologies Used
Express.js for the backend server.
IndexedDB for data persistence.
Workbox for service worker caching.
Webpack for bundling frontend assets.

### Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
Fork the repository.
- Create a new branch (git checkout -b feature).
- Commit your changes (git commit -am 'Add some).
- Push to the branch (git push origin feature).
- Create a new Pull Request.


### License
This project is licensed under the MIT License - see the LICENSE file for details.

## Deployed Link:
https://text-editor-33ca.onrender.com



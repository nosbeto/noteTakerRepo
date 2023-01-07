# Note Taker Front-end App

## Description
This JS application can be used to write and save notes. It uses Express.js as the backend and saves and retrieves notes data from a JSON file.

![Screenshot](./assets/images/screenshot1.png)


## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Prerequisites
* Since this is a node.js app, you will need to install node.js in your laptop.  
    * Download the latest version of node.js here --> https://nodejs.org/en/download/  
* After node.js has been installed on your machine, you will need to install npm.  
    * Follow the steps in the following website to install npm --> https://docs.npmjs.com/cli/v9/commands/npm-install?v=true  

Once those two prerequisites have been installed on your laptop proceed to the Installation steps

## Installation
1) Clone or download the ZIP to your local repository
2) Open a CLI terminal
3) Navigate to your <code>noteTakerRepo/Develop</code> folder 
4) Run the following command to install the necessary npm packages (express.js, fs, and others):
    <pre>npm i</pre>
4) Run the <code>express.js</code> with the following command:
    <pre>nodemon express.js</pre>
5) Open a web browser and navigate to the following page
<code>http://localhost:3000/notes</code>. 
6) Start using your Note Taker Locally!

You don't want to go through all these steps and have an express terminal open? No problem, there is an already deployed Note Taker App that I have deployed using Heroku; just visit this website here 
https://damp-cove-99767.herokuapp.com/

Important: Keep in mind the "delete" functionality hasn't been developed yet

## Usage 
Provides an end-user app where the customer can store notes and retreive later

## Credits
* Me
* Myself
* I

Alberto De Armas --> https://github.com/nosbeto

## License

MIT License

Copyright (c) [2022] [Alberto De Armas]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
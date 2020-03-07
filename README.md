 <div style="text-align:center;">

 <a href="https://fdeboo.github.io/simon/" target="_blank"><img src="/assets/images/simon_logo.png" style="max-width:100px;" alt="Simon Logo"/></a>
 
 </div>

<div>

A classic memory game designed for all ages to enjoy. The Simon Game is simple:- a set of colours flash in a randomised sequence. The player must respond by repeating the sequence back, clicking on the colours in the order that they appeared. The game features 3 different levels so that it becomes more challenging as it progresses. And options to customize the game sounds and starting levels. View the Simon Game [here](https://github.com/fdeboo/simon)

</div>

# Table of contents
1. [UX](#introduction)
    * [Strategy](#strategy)
    * [Scope](#scope)
    * [Structure](#structure)
    * [Skeleton](#skeleton)
    * [Design](#surface)
2. [Features](#features)
    * [Existing Features](#existing_feat)
    * [Features left to implment](#future_feat)
3. [Technologies Used](#technologies)
4. [Testing](#testing)
5. [Deployment](#deployment)
6. [Credits](#credits)
    * [Content](#content)
    * [Media](#media)
    * [Acknowledgements](#acknowledgements)

## UX <a name="introduction"></a>

### Strategy <a name="strategy"></a>
The objective is to build an interactive game that users of all ages can engage with. It should provide a bright and positive experience and keep them engaged by offering them a challenge.
 
### Scope <a name="scope"></a>
The game will be built with Javascript and the JQuery framework to make it function. It will respond to correct responses from the user by adding points to the scoreline. Incorrect responses will trigger a game over message. 
### Structure <a name="structure"></a>
The game is the focus of the application and so will also be the focus of the user interface. Any extra features will be available through the subtle means of a nav burgericon that toggles a nav menu. The nav menu will be kept off screen until it is toggled, thus creating an onobstructed space for the game to be  played. Only the features relevant to the gameplay 
### Skeleton <a name="skeleton"></a>
### Surface <a name="surface"></a>
The game should be bright and positive through the use of bright colours and a minimalistic, uncluttered but intuitive interface. Any other links and information should be available but not in the way of the game. 





Provide a clean uncluttered interface.... The code must be able to start a sequence of colours when a button is click to trigger the start. Getting the game to respond to the user input both in success and in failure.

I want to keep them from being bored so I allow the game to get harder by decreasing the amount of time the flash appears  so that there is less to spent on each colour





## Features <a name="features"></a>
### Existing Features <a name="existing_feat"></a>
+ How To Play modal
    The modal is accessed via a link positioned just beneath the play button. It provides a 2-step explanation of the game for users who have never played it before.  
+ Settings Model
    This modal allows the user to choose alternative game sounds from a drop down menu. 
    The settings are implemented straight away after clicking 'OK' 
    The user may also choose the starting level for the game from this panel.
+ Feedback modal 
    + Enables the user to send feedback to the developer via emailjs 
    + The 
+ A high scores modal gives the user information about the 5 top scores they have recorded which hopefully keeps them engages in wanting to improve upon their scores.

### Features Left to Implement <a name="future_feat"></a>
+ The opportunity for a user to create a username against which their highscores can be saved



## Technologies Used <a name="technologies"></a>
+ HTML, CSS, Javascript
+ [JQuery](https://jquery.com/)
    + Simplifies access and manipluation of the DOM
+ Bootstrap
    + Provides the visual formatting of the website and it's responsiveness accross all devices
+ [Howler.js](https://howlerjs.com/)
    + Handles the playback of the audio files accross all devices
+ [Email.js](https://www.emailjs.com/)
    + Enables comments provided in the feedback form to be sent to me, the developer via email.
+ [Google Fonts](https://fonts.google.com/)
    + Provides access to the web fonts used in this project
+ [Font Awesome](https://fontawesome.com/)
    + Provides the icons used in this project to guide the users' navigation.
+ Visual Studio Code
    + The IDE that facilitated the devlopment of this project.
+ [GitHub](https://github.com/)
    + The platform where the project code is stored remotely
+ Adobe Illustrator
    + The images used in this project were created from scratch using Illustrators drawing tools. 



## Testing <a name="testing"></a>

## Deployment <a name="deployment"></a>
The following steps were taken to deploy the project to GitHub Pages where the Simon Game is hosted:

1. From within Github, navigate to fdeboo/simon
2. Select the Settings tab from the menu, found beneath the repository name 
3. Scroll down to the GitHib Pages section.
4. Under 'Source', choose 'Master Branch' from the dropdown menu
5. The page will automatically refresh and the site is deployed
6. A link to the live site is provided


### Local
###


## Credits <a name="credits"></a>

### Content <a name="content"></a>
All paragraph text and content was written by me.

### Media <a name="media"></a> 
#### Images
+ The illustrations used in the How To Play modal were created by me using Adobe Illustrator
#### Audio
+ The audio files for the default Simon Beeps were sourced from [FreeCodeCamp](https://www.freecodecamp.org/) 
+ The audio files for both the Farm Animal and Flatulence sounds were sourced from [Zapsplat](https://www.zapsplat.com/) 
+ The Harpsichord sounds were recorded and provided by [GBrachetta](https://github.com/GBrachetta) 

### Code <a name="code"></a> 
+ My understanding of the Set Interval Function, which was pivotal to the game's success, was explained to me at [Medium.com](https://medium.com/@eric.stermer/setinterval-simply-put-is-a-timed-loop-652eb54bd5f8) 
+ The highscores retrieved from the local storage are presented as a string of numbers. The code used to convert this string into an array of numbers was sourced from this [Stack Overflow](https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers) post.
+ The code used to reload the page no matter how the 'game over' modal is closed, was sourced from this [Stack Overflow](https://stackoverflow.com/questions/21578315/how-to-reload-page-on-closing-a-bootstrap-3-modal) post.
+ [W3Schools](w3schools.com) was a reliable resource throughout my project for it's comprehensive explanation of JavaScript data types and methods. Specifically, the code used to present users with their top 5 highscores owes thanks to W3Schools' teachings on how to add items to an array in place of other values and how to numerically sort an array in ascending order.

### Acknowledgements <a name="acknowledgemenets"></a>
Special thanks to, 
+ Mentor Aaron Sinott, for all our sessions that ran into overtime and for his words of encouragement.
+ [GBrachetta](https://github.com/GBrachetta) for his invaluable advice, conversation and compassion that kept me going when I felt most defeated.

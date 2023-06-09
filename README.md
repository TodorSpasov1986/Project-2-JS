<h1 text-align="center">Sports Quiz<h1>

## [View the live project here.](https://todorspasov1986.github.io/Project-2-JS/)

#### This is a Sports Quiz that everyone can test their sports knowledge . It is designed to be responsive and accessible on a range of devices, making it easy to navigate from mobile phones and tablets.</h4>

<h2 text-align="center"><img src="./assets/images/readme/am-i-responsive-QUIZ.jpg"></h2>

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a first-time visitor, I want to test my sports knowledge.
        2. As a first-time visitor, I want to know when I give wrong or right answer.
        3. As a first-time visitor, I want to find an easy-to-use online sports quiz.

    -   #### Returning Visitor Goals

        1. As a returning visitor, I want to check the High Scoreboard.
        2. As a returning visitor, I want to find a variety of different questions.
        3. As a returning visitor, I want to be able to retake the quiz.

    -   #### Frequent User Goals
        1. As a frequent user, I want to check regularly whether my top score is still in the high scoreboard top 5.
        2. As a frequent user, I want to complete the quiz with my friends and to compare our scores.
        3. As a frequent user, I want to find new questions that will further improve my knowledge.

-   ### Design
    -   #### Colour Scheme
        -   The text color is Black -rgb(2, 2, 2), the main background color is Blue-rgb(75, 131, 235) and the text background color is light blue-rgba(100, 149, 237, 0.75).
    -   #### Typography
        -   The Montserraterat font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Montserrat is a geometric sans-serif typeface designed by Argentine graphic designer Julieta Ulanovsky and released in 2011. It was inspired by posters, signs and painted windows from the first half of the twentieth century, seen in the historic Montserrat neighbourhood of Buenos Aires.

    -   #### Imagery
        -   Imagery is important. The, background image is designed to be striking and catch the user's attention. Its clearly displaying the quiz thematic.

 
## Features 

### Existing Features

- __Navigation Bar__

  - Featured on four pages, the full responsive navigation bar includes links to the Logo, the Home page and  Scores board,  and is identical on each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](./readme/navbar.jpg)

- __The landing page image__

  - The landing includes a photograph with two buttons to allow the user to understand exactly the purpose of this site. 
  - This section introduces the user to Sports Quiz page and its purpose.
  - The fist button PLAY! is leading the user to the actual Quiz
  - The second button High Score is leading the user to the top 5 High Scores from the Quiz

![Home Page](./readme/landing.jpg)

- __Loading__

   -  When the user presses the quiz page, a Loading circle appears until the quiz is not loaded completely.
 
![Loading](./readme/Loading.jpg)

- __Quiz Page__

  -  Page contains the same background image.
  -  The Quiz page includes 7 questions with 4 answers each( 1 correct and 3 incorrect). 
  -  For every correct answer user get 100 points added to his total score.
  -  It have 2 progress bars which are reflecting every answered question.
     - The first one is with numbers.
     - The second one is a empty bar which is filling 1/7 of its space after every answer .

![Quiz Page](./readme/quiz-page.jpg)

- __Score Page__


  -  After answering all 7 questions, the user is sent to the Score page which contains un input field and 3 buttons.
       - There He can see how much he scored.
       - He needs to put a user name to make his score for the high Scoreboard.
       - The User needs to press the SAVE! Button in order for his score to be saved in the local storage and will be transferred to the Home page.
  -  Second Button is PLAY AGAIN! which will restart the quiz and user will be able to complete the quiz again.
  - The third button is HOME!, it will lead the user to the home page where he can check the High Score page.  

![Score Page](./readme/Score-page.jpg)

- __High Score__ 

  - High Score Page is displaying the top 5 scores in the game.
  - It have a button HOME!, which will lead the user to the home page.  
  
  ![High Score](/readme/High-scoreboard.jpg)

### Features Left to Implement

- Will implement at least 2 more levels of difficulty for the sports quiz.  
- Will add at least two more different categories with 3 levels of difficulty each.
  

## Testing 

### Manual testing 
   - Open the site from several different mobile devices, tablets, laptops, and desktop PCs, and all working and displaying as expected
   - Features testing
     - Navigational bar: All nav bar elements clicked and tested in Chrome, Internet Explorer, and Mozilla Firefox.
     - All buttons tested in the above 3 browsers and all working like they should.
     - The quiz is also working on all 3 browsers.
     - The Score board is also displaying correctly.
     - The loading circle is also tested on all 3 browsers with no problems or bugs.
  

### Validator Testing 

- HTML
  - Landing page: No errors or warnings were returned when passing through the official W3C validator.
  ![W3C validator](/readme/Index-html.jpg)
  - Quiz page: No errors were returned when passing through the official W3C validator, 2 warnings were returned.
  ![W3C validator](/readme/Quiz-html.jpg)
  - HighScore page: No errors or warnings were returned when passing through the official W3C validator.
  ![W3C validator](/readme/HighScore-html.jpg)
  - Score page: No errors were returned when passing through the official W3C validator, 1 warnings was returned.
  ![W3C validator](/readme/Score-html.jpg)
 
  JS
  - Script js: No errors or warnings were returned when passing through the official JSHint validator.
  ![JSHint validator](/readme/js-hint/Script-js-hint.jpg)
  - Scores js: No errors or warnings were returned when passing through the official JSHint validator.
  ![JSHint validator](/readme/js-hint/Scores-js-hint.jpg)
  - HighScore js: No errors or warnings were returned when passing through the official JSHint validator.
  ![JSHint validator](/readme/js-hint/HighScore-js-hint.jpg)

- CSS
  - No errors were found when passing through the official W3C (Jigsaw) validator
  ![(Jigsaw) validator](/readme/Style-css.jpg)

- LightHouse testing : All accessibility is in green with score of 98 due to headings are not in order.
  - Landing page
    - Desktop 
     ![Desktop](/readme/light-house/Index-html-Lighthouse-desktop.jpg)
    - Mobile 
     ![Mobile](/readme/light-house/Index-html-Lighthouse-mobile.jpg)
  - Quiz Page
    - Desktop 
     ![Desktop](/readme/light-house/Quiz-html-Lighthouse-desktop.jpg)
    - Mobile
     ![Mobile](/readme/light-house/Quiz-html-Lighthouse-mobile.jpg)
  - Score Page
    - Desktop
     ![Desktop](/readme/light-house/Score-html-Lighthouse-desktop.jpg)
    - Mobile
     ![Mobile](/readme/light-house/Score-html-Lighthouse-mobile.jpg)
  - High Score Page
    - Desktop
     ![Desktop](/readme/light-house/HighScore-html-Lighthouse-desktop.jpg)
    - Mobile
     ![Mobile](/readme/light-house/HighScore-html-Lighthouse-mobile.jpg)

### Fixed Bugs

  - The site was created VSC on pc due to the limited hrs for GitHub and when it was transfered to it the paths in JS weren't working 
  - The site was geting a lot of errors in the console logs due to me using the same JS-script file for Index.html and quiz.html
    ![JSconsole bug](/readme/script-js-bug.jpg)

### Unfixed Bugs

  - Back-ground image is not at the center of the screen on every resolution.  

## Deployment
 
- The project was deployed to GitHub Pages using the following steps...

   - Log in to GitHub and locate the [GitHub Repository](https://github.com/)
   - At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
   - Scroll down the Settings page until you locate the "GitHub Pages" Section.
   - Under "Source", click the dropdown called "None" and select "Master Branch".
   - The page will automatically refresh.
   - Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

- The live link can be found here - https://todorspasov1986.github.io/Project-2-JS/


## Credits 


### Content 

- Most of the structure and code were inspired by Code Insitute learning content. 
- For the Java Script code is used Brian designs youtube video: How To Make Quiz App Using JavaScript(https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2877s).
- The icons in the nav bar were taken from [Font Awesome](https://fontawesome.com/).
- The question file is fetch from https://opentdb.com/ and the file url is: https://opentdb.com/api.php?amount=40&category=21&difficulty=easy&type=multiple
- Code for the Loader circle is taken from w3schools-https://www.w3schools.com/howto/howto_css_loader.asp 

### Media

- The photo used as background image is from: https://www.freepik.com/free-photo/sports-tools_18415697.htm#query=sport&position=0&from_view=keyword&track=sph
   

### Read me File

- For the Readme file i used the sample tamplates Readme.md for Love Running and Code institute.

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.

-   January 2023 slack group for their support and advices on our weekly calls
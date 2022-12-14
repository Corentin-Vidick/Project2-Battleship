# Battleship

The battleship website is intended to showcase JavaScript through the classic game of battleships. It is a two-player game. Each player places two boats on their half of the “map”. Once boats are placed, the players take turns at shooting blindly trying to hit the other player’s boats. The game ends when all of a player’s boats are destroyed.

## Important information

  This project was started on October the 13th 2022 in the [GitHub repository](https://github.com/Corentin-Vidick/bataille-navale). All code was developed by myself from scratch, but I realised commits were not up to standard. I decided to create a new repository using the same code in order for my commits to meet requirements. All commits very recent for that reason.

## Features

### How the game works

- __I - Starting page__

  The rules are displayed for players to read. One button to click, "Play"

  ![Menu](/documentation/menu-page.jpg)

- __II - Boat placement phase__

  Select a player to place boats, "Ready" button will prompt players to place their boats if any of the players haven't placed their boats.
  The whole map is fogged to hide all boats placed, none of the map is clickable.

  ![General boat placement](/documentation/all-boats-placed.jpg)

  - __Player places boats__

    Player selects two cells to place a boat, confirms it and is informed if:
      - Placement is correct, player repeats to place second boat.
      - Placement is incorrect (wrong number of cells, not in same row or column, not consecutive cells).
    Only the current player's half of the map is visible and clickable.

    ![Player boat placement](/documentation/boat-placement-page.jpg)

- __III - Battle phase__

  Player is prompted to be ready to fire.
  The whole map is fogged, none of it is clickable.
  Map displays previous shots, white for misses and red for hits.
  Each player takes turns shooting until one player runs out of lifes.

  ![Battle phase](/documentation/shooting-phase-in-between-players.jpg)

  - __Player shoots__

    Player selects a cell to shoot at. Player is informed if:
      - Cell previously shot, goes back to selecting a cell to shoot.
      - Not right number of cells (1) selected, goes back to selecting a cell to shoot.
      - Boat hit, moves back to battle phase.
      - Miss, moves back to battle phase.
    Player's own half of the map is revealed, only opponent's half is clickable

    ![Cell selected](/documentation/shooting-phase-cell-selected.jpg)

- __IV - End of game__

  Winner is displayed and game returns to starting page.

  ![End game](/documentation/modal-player1-wins.jpg)


### Existing Features

- __The title, tab name and icon__
  
  Repeated on every page, helps locate the correct page if many are open.

![Tab and title](/documentation/title-and-tab.jpg)

- __Menu area__

  Present in every page, its contents adapt to the current phase of the game. It cycles through boat placement and shooting phases, informing the players on what to do next. Contents are fully controlled through JavaScript.

![Menu1](/documentation/menu-play.jpg)
![Menu2](/documentation/menu-place-boat.jpg)
![Menu3](/documentation/menu-player1-place-boat.jpg)
![Menu4](/documentation/menu-player1-boats-placed.jpg)
![Menu5](/documentation/menu-player2-place-boat.jpg)
![Menu6](/documentation/menu-player2-ready.jpg)
![Menu7](/documentation/menu-allplayers-boats-placed.jpg)
![Menu8](/documentation/menu-player1-ready.jpg)
![Menu9](/documentation/menu-player1-shoot.jpg)
![Menu10](/documentation/menu-player2-ready.jpg)
![menu11](/documentation/menu-player2-shoot.jpg)

- __Game area__

  Contains the “map” where players place their boats and choose where to shoot. Also contains general rules at start of the game. Contents are fully controlled through JavaScript.

![Game area rules](/documentation/game-area-rules.jpg)
![Game area map](/documentation/game-area-map.jpg)

- __Alerts__

  Modals are used to inform player about placement errors, results of shooting and who wins at the end of the game.

![Modal - boat placed](/documentation/modal-boat-placed.jpg)

![Modal - wrong placement](/documentation/modal-wrong-placement.jpg)

![Modal - boat hit](/documentation/modal-boat-hit.jpg)

![Modal - miss](/documentation/modal-miss.jpg)

![Modal - too many shots fired](/documentation/modal-too-many-shots.jpg)

![Modal - cell already shot](/documentation/modal-cell-already-shot.jpg)

![Modal - Player 1 victory](/documentation/modal-player1-wins.jpg)

- __Menu page__

  Displays rules of game and lets players decide when to start a new game.

![Menu](/documentation/menu-page.jpg)

- __General boat placement page__

  Gives each player the option to place their boats. Buttons change colour once boats are placed. One button to move onto next phase, only activates if both players have placed their boats correctly.

![General boat placement](/documentation/all-boats-placed.jpg)

- __Player boat placement page__

  Indicates which boat the player is placing, checks and confirms or denies the boat placement. If placement is wrong, player can try again until correct. Once both boats are placed and accepted, goes back to General boat placement page.

![Player boat placement](/documentation/boat-placement-page.jpg)

- __Battle phase page__

  Lets each player shoot one by one. Notifies which player is going to shoot before revealing corresponding map. Turns alternate until one player destroys all opponent's boats. Winner is displayed and game returns to first page.

![Battle phase](/documentation/shooting-phase-in-between-players.jpg)

- __Shooting page__

  Player can see their own half of map and select one cell on other player's half to shoot. Informs player of hit or miss and switches to next player's battle phase page.

![Cell higlight](/documentation/shooting-phase-cell-highlight.jpg)

![Cell selected](/documentation/shooting-phase-cell-selected.jpg)

- __End of game__

  Once one player's boats are destroyed, the winner is announced and game goes back to main page.

![End game](/documentation/modal-player1-wins.jpg)

- __Buttons__
  Created and activated through JavaScript, colour change to indicate accessibility.
![Buttons](/documentation/menu-allplayers-boats-placed.jpg)

- __Grid__
  Improve adaptability and html generation through JavaScript
  ```css
  #game-container {
    margin: auto;
    display: grid;
    background-color: lightblue;
    padding: 20px;
    gap: 5px;
    width: 81vmin;
    height: 81vmin;
    grid-template-columns: repeat(10, minmax(20px, 1fr));
    grid-template-rows: repeat(10, minmax(20px, 1fr));
  }

  #middle-line {
      height: 5px;
      background-color: red;
      width: 81vmin;
      margin: auto;
      position: relative;
      bottom: 40.85vmin;
  }
  ```

  - Use of Modals to improve UX
  ```css
  .modal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    padding-top: 50vmin; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0,0,0,0.4); 
  }
  
  .modal-content {
    position: relative;
    background-color: white;
    margin: auto;
    text-align: center;
    width: 80%;
    height: 20%;
    font-size: 2rem;
  }
  ```

### Features Left to Implement

-  Possibility to play against computer. Random boat placement and shot selection. 
-  Differentiate boats to notify player if boat hit and/or full boat destroyed.
-  Improve UI to display shots taken, boats damaged/remaining…
-  Improve boat graphics.

## Testing

### Troubleshooting

- __Placement phase__

  Boat placement has to be checked in a number of ways:
    - All cells composing the boat need to be in the same line or column
    - There can be no empty cells within a boat
    - Only the correct number of cells can be selected - issues encountered where once correct boat found anything was confirmed.
  ![Boat placement issue](/documentation/boat-placement-bug.jpg)

- __Shooting phase__

  Shots need to be checked for:
    - Multiple shots made
    - Shooting a cell that has previously been shot
    - Hit or miss

- __Event listeners__

  Issues encountered where event listeners were stacking and deploying at incorrect times.
![Event listener 1](/documentation/stacking-event-listeners-screenshot.jpg)
![Event listener 2](/documentation/stacking-event-listeners-screenshot2.jpg)

### Browser compatibility

Website compatible with various browsers.
  
  ![Firefox](/documentation/test-browser-mozilla.jpg)
  ![Chrome](/documentation/test-browser-chrome.jpg)
  ![Edge](/documentation/test-browser-microsoftedge.jpg)


### Responsiveness

- Game grid and content adapt to screen size to maintain ratios.

  ![Responsiveness](/documentation/responsiveness.jpg)

- Website responsive to all devices with a screen size over 320px.

  ![MobileS](/documentation/responsiveness-320px.jpg)
  ![MobileL](/documentation/responsiveness-mobileL.jpg)
  ![Tablet](/documentation/responsiveness-tablet.jpg)
  ![Laptop1024](/documentation/responsiveness-laptop1024.jpg)
  ![Laptop4K](/documentation/responsiveness-laptop4K.jpg)

### Tools and technologies used

A number of tools were used for this project:
  - Programming - HTML, CSS and JavaScript
  - Software - GitHub, GitPod, GitHub issues
![GitHub issues](/documentation/github-issues.jpg)
  - Validators - W3C, Jigsaw, JSHint and Lighthouse

### Validation

- HTML
  No errors were returned when passing through the official ![W3C validator Main](/documentation/validation-html.jpg)

- CSS
  No errors were found when passing through the official ![Jigsaw validator](/documentation/validation-css.jpg)

- Javascript
  No errors were found when passing through the official ![JSHint validator](/documentation/validation-javascript.jpg)

- Lighthouse
  All Lighthouse tests > 90% ![Lighthouse](/documentation/validation-lighthouse.jpg)

### Unfixed bugs

-  Bugs and issues logged in GitHub issues - all issues fixed during build.
-  For screen sizes smaller than 320px the game container size fails due to padding.


## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/Corentin-Vidick/Project2-Battleship), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://corentin-vidick.github.io/Project2-Battleship)

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/Corentin-Vidick/Project2-Battleship.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Corentin-Vidick/Project2-Battleship)


## Credits 

- The font on the website was taken from [Google Fonts](https://fonts.google.com/)
- The Favicon was taken from [Favicon](https://favicon.io/emoji-favicons/)
- Grid understanding done through [W3Schools](https://www.w3schools.com/css/css_grid.asp)
- Switch case understanding through [W3Schools](https://www.w3schools.com/js/js_switch.asp)
- Modal understanding through [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp)

- Intellectual property
  - All images and text are property of the developer, Corentin Vidick
  - GitPod repository can be found at [Battleship repository](https://github.com/Corentin-Vidick/Project2-Battleship) solely developed by Corentin Vidick from 06/11/2022 based on the [Initial repository](https://github.com/Corentin-Vidick/bataille-navale) solely developed by Corentin Vidick from 13/12/2022.
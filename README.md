# Battleship

The battleship website is intended to showcase JavaScript through the classic game of battleships. It is a two-player game. Each player places two boats on their half of the “map”. Once boats are placed, the players take turns at shooting blindly trying to hit the other player’s boats. The game ends when all of a player’s boats are destroyed.

### Important information

- This project was started on October the 13th 2022 in the [GitHub repository](https://github.com/Corentin-Vidick/bataille-navale). All code was developed by myself from scratch, but I realised commits were not up to standard. I decided to create a new repository using the same code in order for my commits to meet requirements. All commits very recent for that reason.


### Existing Features

- __The title, tab name and icon__
  
-	Repeated on every page, helps locate the correct page if many are open.

- __Menu area__

-	Present in every page, its contents adapt to the current phase of the game. It cycles through boat placement and shooting phases, informing the players on what to do next. Contents are fully controlled through JavaScript.

- __Game area__

-	Contains the “map” where players place their boats and choose where to shoot. Also contains general rules at start of the game. Contents are fully controlled through JavaScript.

- __Alerts__

-	Modals are used to inform player about placement errors, results of shooting and who wins at the end of the game.

- __Menu page__

-	Displays rules of game and lets players decide when to start a new game

- __General boat placement page__

-	Gives each player the option to place their boats. Buttons change colour once boats are placed. One button to move onto next phase, only activates if both players have placed their boats correctly.

- __Player boat placement page__

-	Indicates which boat the player is placing, checks and confirms or denies the boat placement. If placement is wrong, player can try again until correct. Once both boats are placed and accepted, goes back to General boat placement page.

- __Battle phase page__

-	Lets each player shoot one by one. Notifies which player is going to shoot before revealing corresponding map. Turns alternate until one player destroys all opponent's boats. Winner is displayed and game returns to first page.

- __Shooting page__

-	Player can see their own half of map and select one cell on other player's half to shoot. Informs player of hit or miss and switches to next player's battle phase page.

- __End of game__

-	Once one player's boats are destroyed, the winner is announced and game goes back to main page.

### Features Left to Implement

  -  Use modals instead of alerts to make experience more user friendly.
  -  Possibility to play against computer. Random boat placement and shot selection. 
  -  Differentiate boats to notify player if boat hit and/or full boat destroyed.
  -  Improve UI to display shots taken, boats damaged/remaining…
  -  Improve boat graphics.




## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/Corentin-Vidick/Project2-Battleship), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://corentin-vidick.github.io/ Project2-Battleship)

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/Corentin-Vidick/ Project2-Battleship.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Corentin-Vidick/ Project2-Battleship)


## Credits 

- The font on the website was taken from [Google Fonts](https://fonts.google.com/)
- All images and text are property of the developer, Corentin Vidick

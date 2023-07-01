# dnd_shop
==========
## Description 
==============
    This application is used to display current DND 5e items on a page. On the home screen the user can choose what kind of item to display or use the navigation bar to switch to different pages. Each page displays cards that contain: item name, cost, damage, weight, additional properties, and if the weapon is a simple of a martial weapon. Each card also has a delete button to allow the user to remove items from the shop. At the top of the page the user can click the add button to add additional weapons to the list. The form allows the user to add: Item name, cost, damage, weight, properties, type, and also an image.
## Features
===========
- Modal that allows user to create a new item to display
- Card elements that display item information 
- Delete button to allow users to remove cards
- Navigation bar that allows the user to switch pages
- Home page allows users to select what page to be directed to

## Installation
===============
- JSON-Server: https://github.com/Justin3459/react-phase-2-json-template.git
- Application: https://github.com/Justin3459/dnd_store.git

1. git clone both repositories listed above
2. cd into react-phase-2-json-template then code . to open repository in vscode
3. In vscode terminal type $ json-server --watch ddOriginal.json 
4. Open a new vscode by $ cd .. then $ cd dnd_store then type $ code .
5. Inside vscode dnd_store terminal type $cd dnd_store 
6. run $ npm start once inside dnd_store/dnd_store

## Usage
========
- Click on a link in the navigation bar to be directed to the desired page
- Items should automatically populate on the screen 
- To add an item to the list of cards  click the add button at the top of the page
- To delete an item click the delete button that is located on the card

## Contribution
=============== 
- FlatIron School
- The Road to React by Robin Wieruch
- React Router v6: https://reactrouter.com/en/main/start/tutorial

## License
==========
- MIT License: https://mit-license.org/
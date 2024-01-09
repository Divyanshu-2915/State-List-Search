
This is a React component that allows users to select a country and view its states along with their codes.
The component uses data from the `App.json` file to populate the list of countries and their corresponding states.

## Features - 

1. Open the application in your browser.
2. The main page contains a form with a dropdown menu to select a country, a field displaying the ISO code of the selected country, and a search input for filtering states.
3. Choose a country from the dropdown menu to see the list of states for that country.
4. If the selected country has no states, an error message will be displayed.
5. You can search for a specific state using the "Search State" input. The table will dynamically update based on your search query.

##Used - 
  1. useState - for managing the state of States and Messages.
  2.  Arrow Functions - for using useState variables in a react function without any error.
  3.  Event Handler: for the selection of a country from the dropdown menu, updates state variables, and displays error messages if necessary.
  4.  map method - for displaying the data. 

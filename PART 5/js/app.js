// App.js

// Create our initial array of anime
let initAnime = [
  { title: "Muriel's Wedding", year: "1994", rating: "7.3", watched: true },
  { title: "Music From Another Room", year: "1998", rating: "6.3", watched: true },
  { title: "The Wizard", year: "1989", rating: "6.1", watched: true },
  { title: "Paper Planes", year: "2015", rating: "6.2", watched: true },
  { title: "The Other Sister", year: "1999", rating: "6.4", watched: true },
  { title: "Red Dog", year: "2011", rating: "7.3", watched: true },
  { title: "The Club", year: "1980", rating: "6.9", watched: true },
  { title: "Angry Video Game Nerd: The Movie", year: "2014", rating: "5.4", watched: true },
  { title: "Oddball", year: "2015", rating: "6.4", watched: true },
  { title: "The Castle", year: "1997", rating: "7.7", watched: true },
  { title: "Body Melt", year: "1993", rating: "5.3", watched: true },
  { title: "Houseboat Horror", year: "1989", rating: "4.0", watched: true },
  { title: "Super Hornio Brothers", year: "1993", rating: "6.9", watched: true },
  { title: "Cannibal Holocaust", year: "1980", rating: "5.8", watched: true },
];

let animeList = new AnimeList('list', initAnime);

// Searching and sorting
function searchClick(){
  // Get the search element from the DOM
  let formElements = document.getElementById('form-list-control').elements;
  // Geting the text from the input element
  let text = formElements['search-string'].value;
  // Run the search method
  animeList.search(text);
}

// Sorting
function a2zClick(){
  animeList.sortA2Z();
}

function z2aClick(){
  animeList.sortZ2A();
}

// CRUD operations
// CREATE  -ADD
function addClick(){
  // Get the add form elements from the DOM
  let formElements = document.getElementById('form-add').elements;
  // get the data from the form
  let title = formElements['title'].value;
  let year = formElements['year'].value;
  let rating = formElements['rating'].value;
  let watched = formElements['watched'].checked; 

  // Add in Validation
  // Test the values of the input

  animeList.add(title, Number(year), Number(rating), watched);
  // Clear the input fields
  formElements.title.value = "";
  formElements.year.value = "";
  formElements.rating.value = "";
  formElements.watched.checked = false;
}
// Update - Update
function updateClick(){
  // Get the add form elements from the DOM
  let formElements = document.getElementById('form-update').elements;
  // get the data from the form
  let index = formElements['index'].value - 1;
  let title = formElements['title'].value;
  let year = formElements['year'].value;
  let rating = formElements['rating'].value;
  let watched = formElements['watched'].checked; 

  // Add in Validation
  // test the index
  // Test the values of the input

  animeList.update(Number(index), title, Number(year), Number(rating), watched);
  // Clear the input fields
  formElements.index.value = ""
  formElements.title.value = "";
  formElements.year.value = "";
  formElements.rating.value = "";
  formElements.watched.checked = false;
}
// Delete - Delete
function deleteClick(){
  // Get the add form elements from the DOM
  let indexElement = document.getElementById('delIndex');
  let index = indexElement.value - 1;
 
  // Add in Validation
  // test the index

  animeList.delete(Number(index));
  // Clear the input fields
  indexElement.value = ""; 
}

// UI JavaScript
// JavaScript of Tabs
// Function openForm()
// Take in 2 parameters, an event and an action
// Returns nothing.
function openForm(evt, action){
  // Declare variables
  let i, tabContent, tabLinks;

  // Get all elements that have the classname of tabcontent
  tabContent = document.getElementsByClassName('tabcontent');
  // Use a loop to set the display of all tabcontent elements to display = none.
  for(i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = 'none';
  }

  // Get all elements with the class name of tablinks and remove the active class
  tabLinks = document.getElementsByClassName('tablinks');
  // remove the active class using a loop
  for(i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }

  // Show the current tab, and add the active class to the button that opened the tab
  document.getElementById(action).style.display = "block"; // form
  evt.currentTarget.className += " active"; // button
}
// End of openForm()

// Open a tab by default
document.getElementById('defaultOpen').click();

// Footer - get Date and inject into the footed
// Get the span from the dom to inject the date into
const dateSpan = document.getElementById('date');
// Get the current date
const theDate = new Date();
// Add the date to the dom
dateSpan.textContent = theDate.getFullYear();
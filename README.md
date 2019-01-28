# dog-party
1901 FEE Mod1 Dog Party Project

### Comp

![Dog Party Comp](https://github.com/joejohnson3985/dog-party/blob/master/dog-party-js-edition.jpg "Dog Party Comp")

### Final

##### Header
###### Nav
I used an unordered list to create the navigation menu and then an article for the logo, floated right and left respectivly. I was having trouble with optimizing for mobile so all that happens is when the list items begin to overlap the logo at 700px the logo is hidden. 

###### Header Image
I created a section with and set the background image, and then placed a div on top of that with the overlay to darken the image. I set this position to relative so that I could center the content on top of the image when it's postion was set to absolute. 

###### Header Content 
I created an article and placed the headline in H1 tags but stopped the text after the word 'about'
  `<h1 class="headline" id="headline">A Site About <strong></strong></h1>`

I had JS fill in ending of the headline but doing a Query for `<strong>` and assigning a variable to it. I set the vaule of the variable to `Some Dogs` and then created a function to change the value based on the users input. I used `e.preventDefault();` to stop the page from refreshing.

`var headline = document.querySelector('strong').innerText = 'Some Dogs';

document.getElementById("change-me").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector('strong').innerHTML = document.getElementById('dog-name').value;
});`

![Dog Party Header](https://github.com/joejohnson3985/dog-party/blob/master/Header.png "Dog Party Header")

##### Main Content

I created two row's and three columns. I gave the overall section a max width of 1080px to fit the dimensions of the comp.
The first row contained the subheadings, images, and content, as well as buttons that ARE NOT displayed until the screen goes below 1080px. The columns also stack when the screen goes below 1080px. The second row contains the buttons that ARE displayed until the screen goes below 1080px.

![Dog Party Main Content](https://github.com/joejohnson3985/dog-party/blob/master/Main%20Content.png "Dog Party Main Content")

##### Footer

I created the footer similarly to how I created the header image, set the background's position to relative and the div containing the text and images to absolute. 

![Dog Party Footer](https://github.com/joejohnson3985/dog-party/blob/master/Footer.png "Dog Party Footer")

### What I know I need to work on. 

I have a lot of extra CSS. I really need to go through and clean it up. I think there is CSS in there that I had used before refactoring my HTML so it is jut doing nothing. Also I feel like I repeated my self a lot in my CSS by getting too specific with my CSS declarations. 

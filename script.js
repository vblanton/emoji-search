// Generate 3 random emojis for the title
  
function getRandomEmoji() {
  let randomEmoji;
  do { 
    randomEmoji = emojisObject[Math.round(1559 * Math.random())].emoji // emojis after 1559 are country codes
  } while (randomEmoji == '🩷'); // skip if emoji isn't rendering
  return randomEmoji;
};

document.getElementById('title').innerHTML = 
getRandomEmoji() + getRandomEmoji() + getRandomEmoji();


// Insert Emojis Database into the HTML

// don't load in all the emojis, instead, search through them and then load the matching ones in below search function

// let emojisContainer = document.getElementById('emojisDiv');
// for (let i = 0; i < emojisObject.length; i++) {
//   let emojiHTML = '<p style="display: none;">test</p>'; 
//   emojisContainer.innerHTML += emojiHTML; 
// }

// Search Function
// add regex to make it match any letters

function emojiSearch() {
  // Declare variables
  let input, filter, regex, emojisContainer, a, txtValue; 
  input = document.getElementById('emojiSearch');
  filter = input.value.toLowerCase();
  emojisContainer = document.getElementById("emojisDiv");
  //emojis = div.getElementsByTagName('div');

  
  // loop through all emojis, and add those that match the search query to the HTML
  
  for (let i = 0; i < emojisObject.length; i++) {
    if (emojisObject[i].keywords.indexOf(filter) != -1) {
      emojisContainer.innerHTML += emojisObject[i].emoji;
    }
  input.onkeydown = (event) => { emojisContainer.innerHTML = "" };
  }
}


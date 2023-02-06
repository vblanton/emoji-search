// 3 Random Emojis for the Title
  
function getRandomEmoji() {
  let randomEmoji = emojisObject[Math.round(1559 * Math.random())].emoji; // emojis after 1559 are country codes
  return randomEmoji;
};

document.getElementById('title').innerHTML = 
getRandomEmoji() + getRandomEmoji() + getRandomEmoji();


// Search Function

function emojiSearch() {

  let input, filter, emojisContainer; 
  input = document.getElementById('emojiSearch');
  filter = input.value.toLowerCase();
  emojisContainer = document.getElementById("emojisDiv");

  // loop through emoji keyword descriptions and use Array.search() to return matches
  for (let i = 0; i < emojisObject.length; i++) {
    for (let j = 0; j < emojisObject[i].keywords.length; j++)
    {
      if (filter.length >= 3 && emojisObject[i].keywords[j].search(filter) != -1) {
        emojisContainer.innerHTML += 
        '<a href="#" class="m-2">' + emojisObject[i].emoji + '</a>';
        break;
      }
    }
  }
  input.onkeydown = (event) => { emojisContainer.innerHTML = "" };
}

// OLD Code:

  // loop through all emojis, and add those that match the search query to the HTML
  // for (let i = 0; i < emojisObject.length; i++) {
  //   if (emojisObject[i].keywords.indexOf(filter) != -1) {
  //     emojisContainer.innerHTML += 
  //     '<a href="#" class="m-2">' + emojisObject[i].emoji + '</a>';
  //   }
  // input.onkeydown = (event) => { emojisContainer.innerHTML = "" };
  // }
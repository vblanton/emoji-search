// GENERATE 3 RANDOM EMOJIS FOR THE TITLE
  
function getRandomEmoji() {
  let randomEmoji = emojisObject[Math.round(1559 * Math.random())].emoji; // emojis after 1559 are country codes
  return randomEmoji;
};

for (let i = 0; i < 3; i++) {
  document.getElementById('title').innerHTML += 
  getRandomEmoji();
}


// SEARCH FUNCTION

function emojiSearch() {

  let input, filter, emojisContainer; 
  input = document.getElementById('emojiSearch');
  filter = input.value.toLowerCase();
  emojisContainer = document.getElementById("emojisDiv");

  // loop through emoji keyword descriptions and use Array.search() to return matches
  for (let i = 0; i < emojisObject.length; i++) {
    for (let j = 0; j < emojisObject[i].keywords.length; j++)
    {
      if (filter.length > 2 && emojisObject[i].keywords[j].search(filter) != -1) {
        emojisContainer.innerHTML += 
        '<a href="javascript:;" onclick="copyEmoji(event)" class="m-2">' + emojisObject[i].emoji + '</a>';
        break;
      }
    }
  }
  input.onkeydown = (event) => { emojisContainer.innerHTML = "" };
}

// FUNCTION TO COPY EMOJI

function copyEmoji(e) {
  let emojisContainer = document.getElementById("emojisDiv");
  
  navigator.clipboard.writeText(e.target.innerHTML);
  // alert("Copied!");     
  e.target.setAttribute('id','button');
  emojisContainer.innerHTML += '<div id="tooltip">Copied!</div>';

  const button = document.querySelector('#button');
  const tooltip = document.querySelector('#tooltip');

  const popperInstance = Popper.createPopper(button, tooltip)
}
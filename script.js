// GENERATE 3 RANDOM EMOJIS FOR THE TITLE
  
function getRandomEmoji() {
  let randomEmoji = emojisObject[Math.round(1559 * Math.random())].emoji; // emojis after 1559 are country codes
  return randomEmoji;
};

for (let i = 0; i < 3; i++) {
  document.getElementById('title').innerHTML += 
  '<a href="index.html">' + getRandomEmoji() + '</a>';
}


// SEARCH FUNCTION

function emojiSearch() {

  let input, filter, emojisContainer, defaultText; 
  input = document.getElementById('emojiSearch');
  filter = input.value.toLowerCase();
  emojisContainer = document.getElementById("emojisDiv");
  defaultText = "<p class=\"text-base\">😸 Hello.</p><p class=\"text-base\">🔎 Search for an emoji using the search bar.</p><p class=\"text-base\">🖱️ Click on an emoji to copy it to your clipboard.</p>"

  // loop through emoji keyword descriptions and use Array.search() to return matches
  for (let i = 0; i < emojisObject.length; i++) {
    for (let j = 0; j < emojisObject[i].keywords.length; j++)
    {
      if (filter.length > 2 && emojisObject[i].keywords[j].search(filter) != -1) {
        emojisContainer.innerHTML += 
        '<button onclick="copyEmoji(event)" class="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 tooltip" data-text="'+ emojisObject[i].description +'">' + emojisObject[i].emoji + '</button>';
        break;
      }
    }
  }
  input.onkeydown = (event) => { emojisContainer.innerHTML = "" };
}

// FUNCTION TO COPY EMOJI

function copyEmoji(e) {
  navigator.clipboard.writeText(e.target.innerHTML);
  e.target.setAttribute('data-text','Copied!')

}
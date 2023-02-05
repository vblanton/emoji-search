// Generate 3 random emojis for the title
  // pick an emojis <= 1559, becuase after they are all country codes
  // if emoji is 🩷 then skip

function getRandomEmoji() {
  let randomEmoji;
  do { 
    randomEmoji = emojisObject[Math.round(1559 * Math.random())].emoji
  } while (randomEmoji == '🩷'); 
  return randomEmoji;
};

document.getElementById('title').innerHTML = 
getRandomEmoji() + getRandomEmoji() + getRandomEmoji();


// Insert Emoji Database into the HTML


// Search Function
// adapted from https://www.w3schools.com/howto/howto_js_filter_lists.asp

function emojiSearch() {
  // Declare variables
  let input, filter, div, li, a, txtValue;
  input = document.getElementById('emojiSearch');
  filter = input.value.toUpperCase();
  div = document.getElementById("emojisDiv");
  emojis = div.getElementsByTagName('div');

  // Loop through all emojis, and hide those who don't match the search query
  for (let i = 0; i < emojis.length; i++) {
    a = emojis[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      emojis[i].style.display = "";
    } else {
      emojis[i].style.display = "none";
    }
  }
}


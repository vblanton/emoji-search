// OLD Code:

  loop through all emojis, and add those that match the search query to the HTML
  for (let i = 0; i < emojisObject.length; i++) {
    if (emojisObject[i].keywords.indexOf(filter) != -1) {
      emojisContainer.innerHTML += 
      '<a href="#" onClick() class="m-2">' + emojisObject[i].emoji + '</a>';
    }
  input.onkeydown = (event) => { emojisContainer.innerHTML = "" };
  }
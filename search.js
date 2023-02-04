
function emojiSearch() {
  // Declare variables
  let input, filter, div, li, a, txtValue;
  input = document.getElementById('emojiSearch');
  filter = input.value.toUpperCase();
  div = document.getElementById("emojisDiv");
  emojis = div.getElementsByTagName('div');

  // Loop through all list items, and hide those who don't match the search query
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

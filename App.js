const api_url = "https://api.quotable.io/random";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
let newBtn = document.querySelector(".newquote--btn");

console.log(api_url);

async function quotes(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);

  quote.innerHTML = data.content;
  author.textContent = data.author;
}
quotes(api_url);

newBtn.addEventListener("click", function () {
  quotes(api_url);
});

document.querySelector(".newtweet--btn").addEventListener("click", function () {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "   " +
      "-- by " +
      author.textContent,
    "tweet window",
    "width =600, height= 300"
  );
});

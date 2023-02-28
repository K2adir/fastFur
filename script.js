let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };

  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "Hello!";

  // Part 2
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = "gray";

  // Part 3

  const favThings = document.querySelector("#favorite-things");
  favThings.removeChild(favThings.lastElementChild);
  // Part 4

  const specialTitle = document.querySelector(".special-title");
  specialTitle.style.fontSize = "2rem";

  // Part 5

  const pastRaces = document.querySelector("#past-races");
  const pastRacesLi = pastRaces.getElementsByTagName("li");

  for (let i = 0; i < pastRacesLi.length; i++) {
    if (pastRacesLi[i].textContent.includes("Chicago")) {
      pastRacesLi[i].remove();
    }
  }

  // Part 6

  const newPastRaceLi = document.createElement("li");
  newPastRaceLi.textContent = "Istanbul";
  pastRaces.appendChild(newPastRaceLi);

  // Part 7

  const newBlogPost = document.createElement("div");
  newBlogPost.className = "blog-post purple";

  const newBlogPostTitle = document.createElement("h1");
  newBlogPostTitle.textContent = "Istanbul";

  const newBlogPostContent = document.createElement("p");
  newBlogPostContent.textContent = "du du du";

  newBlogPost.appendChild(newBlogPostTitle);
  newBlogPost.appendChild(newBlogPostContent);

  const blogPost = document.querySelector(".main");
  blogPost.appendChild(newBlogPost);
  // Part 8

  document.querySelector("#quote-title").addEventListener("click", randomQuote);

  // Part 9

  const blogPosts = document.querySelectorAll(".blog-post");

  blogPosts.forEach((post) => {
    post.addEventListener("mouseout", () => {
      post.style.backgroundColor = "";
    });
    post.addEventListener("mouseenter", () => {
      post.style.backgroundColor = "lightblue";
    });
  });
});

const container = document.querySelector("[data-container]");

const h3 = document.createElement("h3");
container.appendChild(h3);
h3.innerText = "Don't Laugh Challenge";

const joke = document.createElement("div");
joke.setAttribute("id", "joke");
joke.setAttribute("class", "joke");
container.appendChild(joke);

const newJokeButton = document.createElement("button");
newJokeButton.setAttribute("id", "jokeBtn");
newJokeButton.setAttribute("class", "btn");
newJokeButton.innerText = "Get Another Joke";
container.appendChild(newJokeButton);

const newJoke = () => {
  joke.innerText = "loading...";

  fetch("https://backend-omega-seven.vercel.app/api/getjoke")
    .then((response) => response.json())
    .then((data) => {
      joke.innerText = `${data[0].question}

        ${data[0].punchline}`;
    })
    .catch((error) => {
      console.log(`error: ${error}`);
      joke.innerText = "Something went wrong, please try again later.";
    });
};

newJokeButton.addEventListener("click", () => newJoke());

newJoke();

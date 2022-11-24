function getGameUrl(game) {
  const dictionary = {
    1: "https://scratch.mit.edu/projects/741108823/embed",
    2: "https://scratch.mit.edu/projects/742911565/embed",
    3: "https://scratch.mit.edu/projects/753296018/embed",
  };

  return dictionary[game];
}

function changeCurrentGame(game) {
  const iframe = document.querySelector("iframe");
  iframe.setAttribute("src", getGameUrl(game));
}

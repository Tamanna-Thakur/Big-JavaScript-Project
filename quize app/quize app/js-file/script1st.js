//retrive the score from the local storeg
window.addEventListener("load", () => {
  const disscore = document.querySelector(".userscore");
  const getscore = localStorage.getItem("LastScore");
  if (getscore !== null) {
    ///display the score if is it exit
    disscore.textContent = `Your Last Score:${getscore}`;
  }
});

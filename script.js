document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
      const title = (document.getElementById("title").textContent =
        "🦾 HappyBot🦿");
      const container = document.querySelector(".container");
      container.style.backgroundColor = "magenta";
    });
});

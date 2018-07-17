const $randomFooter = document.getElementById("random-footer");
const technologyHeaders = Array.from(document.querySelectorAll(".technologies-header li"));
const technologyItems = Array.from(document.querySelectorAll(".technologies-items li"));

$randomFooter.addEventListener("pointerenter", generateRandomText);
$randomFooter.addEventListener("pointerup", generateRandomText);

technologyItems.forEach($item => {
  $item.addEventListener("pointerenter", enableTechItem);
  $item.addEventListener("pointerleave", disableTechItem);
});
technologyHeaders.forEach($header => {
  $header.addEventListener("pointerenter", enableTechHeader);
  $header.addEventListener("pointerleave", disableTechHeader);
});
generateRandomText();

function generateRandomText() {
  const adjs = ["a few", "cool", "creative", "funny", "great", "helpful", "interesting", "loving", "multiple", "nice", "real", "total", "understanding"];
  const subs = ["coders", "developers", "digital nomads", "geeks", "humans", "kids", "learners", "monkeys", "nerds", "optimists", "programmers"];
  const cities = ["Bavaria", "Germany", "Europe", "Landshut", "Passau", "around the world"];
  $randomFooter.innerText = `· created by ${randomOf(adjs)} ${randomOf(subs)} from ${randomOf(cities)} ·`;

  function randomOf(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

function disableTechItem() {
  technologyHeaders.forEach(header => header.classList.remove("active"));
}

function enableTechItem(event) {
  const $item = event.target;
  Array.from($item.classList).forEach(cls => {
    technologyHeaders
      .filter(header => header.classList.contains(cls))
      .forEach(header => header.classList.add("active"));
  });
}

function disableTechHeader() {
  technologyItems.forEach(header => header.classList.remove("active"));
}

function enableTechHeader(event) {
  const $header = event.target;
  Array.from($header.classList).forEach(cls => {
    technologyItems.filter(item => item.classList.contains(cls)).forEach(item => item.classList.add("active"));
  });
}

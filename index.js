const technologyHeaders = Array.from(document.querySelectorAll(".technologies-header li"));
const technologyItems = Array.from(document.querySelectorAll(".technologies-items li"));
technologyItems.forEach($item => {
  $item.addEventListener("pointerenter", enableTechItem);
  $item.addEventListener("pointerleave", disableTechItem);
});
technologyHeaders.forEach($header => {
  $header.addEventListener("pointerenter", enableTechHeader);
  $header.addEventListener("pointerleave", disableTechHeader);
});

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

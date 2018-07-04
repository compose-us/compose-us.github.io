const techHeaders = Array.from(document.querySelectorAll(".technologies-header li"));
const $technologyItems = document.querySelectorAll(".technologies-items li");
$technologyItems.forEach($item => {
	$item.addEventListener("pointerenter", enableTechItem);
  $item.addEventListener("pointerleave", disableTechItem);
});

function disableTechItem() {
  techHeaders.forEach(header => header.classList.remove("active"));
}
function enableTechItem(event) {
  const $item = event.target;
  Array.from($item.classList).forEach(cls => {
    techHeaders.filter(header => header.classList.contains(cls)).forEach(header => header.classList.add("active"));
  });
}

const requestedItem = new URLSearchParams(window.location.search).get("item");
const productPanels = [...document.querySelectorAll("[data-product]")];

if (productPanels.length > 0) {
  const selectedPanel = productPanels.find((panel) => panel.dataset.product === requestedItem) ?? productPanels[0];

  for (const panel of productPanels) {
    panel.hidden = panel !== selectedPanel;
  }

  const orderLink = document.querySelector("#delivery-order");
  orderLink.href = "order.html?item=" + encodeURIComponent(selectedPanel.dataset.product);
}

const orderSelect = document.querySelector("#order-item");

if (orderSelect && [...orderSelect.options].some((option) => option.value === requestedItem)) {
  orderSelect.value = requestedItem;
}

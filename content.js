document
  .querySelectorAll('[data-testid="availability-rate-information"]')
  .forEach((el) => {
    const params = new URLSearchParams(window.location.search);
    const numberOfGuests = params.get("group_adults");
    const checkinDate = new Date(params.get("checkin"));
    const checkoutDate = new Date(params.get("checkout"));

    const diffMs = checkoutDate - checkinDate;

    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    const totalPriceElement = el.querySelector(
      '[data-testid="price-and-discounted-price"]'
    );
    const currency = totalPriceElement.textContent.trim().match(/[^\d\s,.]+/g);
    if (el.querySelector(".price-per-guest")) {
      el.querySelector(".price-per-guest").remove();
    }
    const newDiv = document.createElement("div");
    newDiv.className = "price-per-guest";
    newDiv.innerHTML =
      "Price per guest: " +
      (
        parseFloat(totalPriceElement.textContent.replace(" ", "")) /
        numberOfGuests
      ).toFixed(2) +
      currency +
      "<br>" +
      "Price per guest per night: " +
      (
        parseFloat(totalPriceElement.textContent.replace(" ", "")) /
        numberOfGuests /
        diffDays
      ).toFixed(2) +
      currency;
    el.appendChild(newDiv);
  });

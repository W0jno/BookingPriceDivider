# 💰 Booking Price Per Guest Chrome Extension

This lightweight Chrome extension calculates and displays:
- ✅ Total price per guest
- ✅ Price per guest per night
- ✅ Detected currency based on the price element

...for each available hotel offer on **[Booking.com](https://www.booking.com)**.

---

## ⚠️ Supported Website

> **✅ This extension works only on [Booking.com](https://www.booking.com)**  
It relies on specific HTML structure used by Booking.com (e.g. `data-testid="availability-rate-information"` and `data-testid="price-and-discounted-price"`).

---

## 📦 Features

- Extracts data from the URL (`checkin`, `checkout`, and `group_adults`).
- Calculates length of stay in days.
- Automatically detects the **currency** used in the displayed price (e.g. `PLN`, `€`, `$`).
- Calculates per-guest and per-night price.
- Injects the result directly into each offer block under the total price.

---

## 🧩 Installation

1. Clone or download this repository.

2. In Chrome, go to `chrome://extensions`.

3. Enable **Developer mode** (top right corner).

4. Click **"Load unpacked"** and select the folder containing this project.

---

## 🚀 How to Use

1. Open any hotel search page on **Booking.com** that includes the following parameters in the URL: `checkin`, `checkout`, and `group_adults`. Example:

https://www.booking.com/searchresults.html?checkin=2025-08-01&checkout=2025-08-03&group_adults=2

2. Wait for the offers to load.

3. If you **change filters** or **new offers appear dynamically**, click the **extension icon** in the Chrome toolbar to refresh the calculations.

---

## 🔁 Example Output

For 2 guests staying 2 nights, and total price `800 zł`, you will see:

Price per guest: 400.00 zł
Price per guest per night: 200.00 zł

If the price is in another currency like €, it will automatically show:

Price per guest: 300.00 €
Price per guest per night: 150.00 €

---

## ⚠️ Notes

- Works only on **Booking.com**.
- Assumes price data is within `data-testid="price-and-discounted-price"` elements.
- Currency is auto-detected from the price text.
- If Booking.com dynamically updates listings (e.g. via filters), you must click the extension icon to reapply calculations.

---

## 📄 License

MIT – use freely, contribute, or customize.

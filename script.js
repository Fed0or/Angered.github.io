document.addEventListener("DOMContentLoaded", function () {
   const cartList = document.getElementById("köp-lista");

   const createCartItem = (text) => {
       const item = document.createElement("li");
       item.innerHTML = `${text} <button onclick="removeItem(this)">Ta Bort</button>`;
       return item;
   };

   const addToCart = (carModel, price, currency = "SEK") => {
       const listItem = createCartItem(`${carModel} - ${price} ${currency}`);
       cartList.appendChild(listItem);
   };

   window.removeItem = (element) => {
       const listItem = element.parentElement;
       listItem.remove();
   };

   document.querySelectorAll(".köp").forEach((button) => {
       button.addEventListener("click", () => {
           const { carModel, price, currency } = button.dataset;
           addToCart(carModel, price, currency);
       });
   });
});

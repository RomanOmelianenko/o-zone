const cart = () => {
  const cartBtn = document.getElementById("cart");
  // console.dir(cart);
  const cartModal = document.querySelector(".cart");
  const cartCloseBtn = cartModal.querySelector(".cart-close");

  const openCart = () => {
    cartModal.style.display = "flex";
  };

  // Закрытие по нажатию на кнопку и esc
  const closeCart = (e) => {
    e.key === "Escape"
      ? (cartModal.style.display = "")
      : (cartModal.style.display = "");
  };

  cartBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);
  window.addEventListener("keydown", closeCart);
};

export default cart;

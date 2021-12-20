import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
  const cartBtn = document.getElementById("cart");
  // console.dir(cart);
  const cartModal = document.querySelector(".cart");
  const cartCloseBtn = cartModal.querySelector(".cart-close");
  const goodsContainer = document.querySelector(".goods");
  const cartTotalPrice = cartModal.querySelector(".cart-total > span");
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartSendBtn = cartModal.querySelector(".cart-confirm");

  const openCart = () => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
    const cart = localStorage.getItem("cart") ? cartLocalStorage : [];

    cartModal.style.display = "flex";

    renderCart(cart);

    // Считаем сумму в корзине
    cartTotalPrice.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
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

  // Делегирование
  goodsContainer.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.classList.contains("btn-primary")) {
      // console.log("кнопка");
      const card = e.target.closest(".card");
      const key = card.dataset.key; // получаем id карточки

      //получаем весь массив goods из localStorage
      const goods = JSON.parse(localStorage.getItem("goods"));

      const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
      const cart = localStorage.getItem("cart") ? cartLocalStorage : [];

      // С массива goods достаём необходимый обьект и записываем его в массив cart и сохранить массив cart в localStorage с ключём 'cart'
      const goodItem = goods.find((item) => {
        return item.id === +key;
      });

      cart.push(goodItem);

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });

  // Делегирование (удаляем карточку с корзины товаров)
  cartWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-primary")) {
      const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
      const cart = localStorage.getItem("cart") ? cartLocalStorage : [];

      // Получаем элемент по которому кликнули и удаляем его
      const card = e.target.closest(".card");
      const key = card.dataset.key;
      // console.log(key);

      // перед тем как удалить элемент с массива нужно узнать его индекс
      const index = cart.findIndex((item) => {
        return item.id === +key;
      });

      cart.splice(index, 1);

      // После удаления карточки снова записать в localStorage массив данных
      localStorage.setItem("cart", JSON.stringify(cart));

      renderCart(cart);

      // Считаем сумму в корзине
      cartTotalPrice.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
    }
  });

  // Отправка данных с корзины
  cartSendBtn.addEventListener("click", () => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
    const cart = localStorage.getItem("cart") ? cartLocalStorage : [];

    // отправляем данные корзины на сервер "https://jsonplaceholder.typicode.com/posts", очищаем корзину и отрисовуем её (используем метод then())
    postData(cart).then(() => {
      localStorage.removeItem("cart");

      renderCart([]);

      cartTotalPrice.textContent = 0;
    });
  });
};

export default cart;

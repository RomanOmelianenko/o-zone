const renderCart = (goods) => {
  // console.log(goods);
  const cartWrapper = document.querySelector(".cart-wrapper");

  // поскольку insertAdjacentHTML не перезаписывает верстку, а дополняет её, нужно очистить вёрстку
  cartWrapper.innerHTML = "";

  if (goods.length === 0) {
    cartWrapper.insertAdjacentHTML(
      "beforeend",
      `<div id="cart-empty">
					Ваша корзина пока пуста
			</div>`
    );
  } else {
    // перебираем массив обьектов
    goods.forEach((goodsItem) => {
      // console.log(goodsItem);

      // на каждой итерации forEach отрисовуем карточку товара
      // insertAdjacentHTML - размещает верстку внутри контейнера
      // Добавляем аттрибут (21 строка) data-key="${goodsItem.id}" для того, чтобы знать по какой кнопке карточки кликнули (берём id карточки)
      cartWrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="card" data-key="${goodsItem.id}"> 
          ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ""}
          <div class="card-img-wrapper">
            <span
              class="card-img-top"
              style="background-image: url('${goodsItem.img}')"
            ></span>
          </div>
          <div class="card-body justify-content-between">
            <div class="card-price">${goodsItem.price} ₽</div>
            <h5 class="card-title">${goodsItem.title}</h5>
            <button class="btn btn-primary">Удалить</button>
          </div>
      </div>`
      );
    });
  }
};

export default renderCart;

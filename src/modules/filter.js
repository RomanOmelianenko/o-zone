import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";

// фильтрация по цене
const filter = () => {
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const checkboxInput = document.getElementById("discount-checkbox");
  const checkboxSpan = document.querySelector(".filter-check_checkmark");

  minInput.addEventListener("input", () => {
    // console.log(minInput.value);
    // console.log(maxInput.value);

    getData().then((data) => {
      // renderGoods(priceFilter(data, minInput.value, maxInput.value));
      // Меняем data на hotSaleFilter(data, checkboxInput.checked) для обьеденения двух фильтров (min-max и checkbox)
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });

  maxInput.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });

  checkboxInput.addEventListener("change", () => {
    // console.log(checkboxInput.checked); true или false checkbox

    if (checkboxInput.checked) {
      checkboxSpan.classList.add("checked");
    } else {
      checkboxSpan.classList.remove("checked");
    }

    getData().then((data) => {
      // renderGoods(hotSaleFilter(data, checkboxInput.checked));
      // Обьеденение двух фильтров
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      );
    });
  });
};

export default filter;

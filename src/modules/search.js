import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");
  searchInput.addEventListener("input", (e) => {
    // console.log(e.target.value);
    const value = e.target.value;

    // getData(value).then((data) => renderGoods(data));
    getData().then((data) => renderGoods(searchFilter(data, value)));
  });
};

export default search;

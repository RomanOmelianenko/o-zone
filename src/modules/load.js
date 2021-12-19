import getData from "./getData";
import renderGoods from "./renderGoods";
// import postData from "./postData";
// import deleteData from "./deleteData";

// данный модуль отрабатывает сразу после загрузки (показует первую страницу)
const load = () => {
  // получение данных
  getData().then((data) => renderGoods(data));
};

export default load;

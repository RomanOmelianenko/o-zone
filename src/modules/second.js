import getData from "./getData";
import postData from "./postData";
import deleteData from "./deleteData";

const second = () => {
  const cartBtn = document.getElementById("cart");

  // получение данных
  getData().then((data) => console.log(data));
};

export default second;

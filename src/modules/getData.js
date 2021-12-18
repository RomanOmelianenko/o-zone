// Получаем данные

const getData = () => {
  const url = "https://o-zone-project-default-rtdb.firebaseio.com/goods.json";
  return fetch(url).then((response) => {
    return response.json();
  });
};

export default getData;

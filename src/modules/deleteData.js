// Удаляем данные с базы

const deleteData = () => {
  const url = "http://localhost:3000/goods/24";
  return fetch(url, {
    method: "DELETE",
  }).then((res) => res.json());
};

export default deleteData;

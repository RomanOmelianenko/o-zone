// сохраняет данные в базу

const postData = () => {
  const url = "http://localhost:3000/goods";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      id: 25,
      title: "Ведьмак 3",
      price: 3000,
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
      category: "Игры и софт",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

export default postData;

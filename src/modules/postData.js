// сохраняет данные в базу

const postData = (cart) => {
  // const url = "http://localhost:3000/goods";
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(cart),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

export default postData;

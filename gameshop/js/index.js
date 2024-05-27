const url = "http://localhost:8080/products";

// axios.get(url).then(할일).then(할일).then(할일).catch(에러처리);

axios
  .get(url)
  .then((response) => {
    console.log("응답 Response : ", response);
  })
  .catch((error) => {
    console.log("에러 발생 : ", error);
  });

// CORS : Cross Origin Resource Sharing

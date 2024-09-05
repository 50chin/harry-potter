import { useEffect, useState } from 'react';
import { Header } from '../layouts/Header/Header';
import { Main } from '../layouts/Main/Main';
import { renderToReadableStream } from 'react-dom/server';

// const API_URL =
//   'https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters';
// let data = JSON.parse(localStorage.getItem('data')) ?? [];
// let choice = [];
// // Запрос Fetch
// async function getApi(API) {
//   try {
//     let dataApi = await fetch(API);
//     dataApi = await dataApi.json();
//     dataApi.forEach((el) => {
//       el.liked = false;
//     });
//     data = dataApi;
//     choice = dataApi;
//     renderCards(choice, data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log(data);

// function getFetch(API) {
//   if (data.length) {
//     choice = data;
//     // renderCards(choice, data);
//   } else {
//     getApi(API);
//   }
// }

// getFetch(API_URL);

function App() {
  const defaultValue = JSON.parse(localStorage.getItem('data')) ?? [];
  const [data, setData] = useState(defaultValue);
  // Функция для прочтения Api
  async function getApiData() {
    try {
      let dataApi = await fetch(
        'https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters'
      );
      dataApi = await dataApi.json();
      setData(dataApi);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Header />
      <Main data={data} />
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Favorites } from '../pages/Favorites/Favorites';

function App() {
  const [data, setData] = useState([]);
  const [finder, setFinder] = useState([]);
  const [newData, setNewData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // Функция для прочтения Api
  async function getApiData() {
    try {
      let dataApi = await fetch(
        'https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters'
      );
      dataApi = await dataApi.json();
      const initialData = dataApi.map((el) => ({ ...el, liked: false }));
      setData(initialData);
      setNewData(initialData);
      setFinder(initialData);
    } catch (err) {
      console.log(err);
    }
  }

  // Функция по поиску Input
  function inputHandler(evt) {
    const value = evt.target.value.toLowerCase().trim();
    const findUser = finder.filter((el) =>
      el.name.toLowerCase().includes(value)
    );
    // const findUserData = data.filter((el) =>
    //   el.name.toLowerCase().includes(value)
    // );
    setNewData(findUser);
  }

  // Функция по выбору Select
  function selectHandle(evt) {
    let value = evt.target.value;
    if (value === 'All') {
      setNewData(data);
    } else {
      const findHouse = data.filter(
        (el) => el.house.toLowerCase() == value.toLowerCase()
      );
      setFinder(findHouse);
      setNewData(findHouse);
    }
  }

  // Функция по изменению ключа liked (true / false)
  function likedPerson(id) {
    const updatedNewData = newData.map((el) => {
      return el.id === id ? { ...el, liked: !el.liked } : el;
    });
    const updatedData = data.map((el) => {
      return el.id === id ? { ...el, liked: !el.liked } : el;
    });
    setData(updatedData);
    setNewData(updatedNewData);
    localStorage.setItem('data', JSON.stringify(updatedData));
  }
  // функция сброса состояние newData после перехода на другую страницу
  function resetSelect() {
    setNewData(data);
    setFinder(data);
  }

  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem('data')) ?? [];
    if (dataLocal.length) {
      setData(dataLocal);
      setNewData(dataLocal);
      setFinder(dataLocal);
    } else {
      getApiData();
    }
  }, []);

  useEffect(() => {
    if (data.length) {
      localStorage.setItem('data', JSON.stringify(data)); // Сохранение данных в localStorage при изменении data
    }
  }, [data]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home
          inputHandler={inputHandler}
          selectHandle={selectHandle}
          newData={newData}
          likedPerson={likedPerson}
          resetSelect={resetSelect}
        />
      ),
    },
    {
      path: '/favorites',
      element: <Favorites data={data} likedPerson={likedPerson} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Header } from '../layouts/Header/Header';
import { Main } from '../layouts/Main/Main';
import { Footer } from '../layouts/Footer/Footer';

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
    const updatedData = data.map((el) => {
      return el.id === id ? { ...el, liked: !el.liked } : el;
    });
    setData(updatedData);
    setNewData(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));
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

  return (
    <>
      <Header inputHandler={inputHandler} selectHandle={selectHandle} />
      <Main newData={newData} likedPerson={likedPerson} />
      <Footer />
    </>
  );
}

export default App;

import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";
import s from "./Home.module.scss";

export const Home = ({ inputHandler, selectHandle, newData, likedPerson }) => {
  return (
    <>
      <Header inputHandler={inputHandler} selectHandle={selectHandle} />
      <Main newData={newData} likedPerson={likedPerson} />
    </>
  );
};

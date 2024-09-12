import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';
import { Main } from '../../layouts/Main/Main';
import s from './Home.module.scss';

export const Home = ({
  inputHandler,
  selectHandle,
  newData,
  likedPerson,
  resetSelect,

}) => {
  return (
    <>
      <Header
        inputHandler={inputHandler}
        selectHandle={selectHandle}
      />
      <Main newData={newData} likedPerson={likedPerson} />
      <Footer resetSelect={resetSelect} />
    </>
  );
};

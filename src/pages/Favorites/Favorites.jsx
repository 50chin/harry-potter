import { Header } from '../../layouts/Header/Header';
import { Main } from '../../layouts/Main/Main';
import s from './Favorites.module.scss';

export const Favorites = ({ data, likedPerson }) => {
  return (
    <>
      <Header page="favorites" />
      <Main data={data} page="favorites" likedPerson={likedPerson} />
    </>
  );
};

import { Cards } from '../Cards/Cards';
import s from './Main.module.scss';

export const Main = ({ newData, likedPerson, data, page }) => {
  return (
    <Cards
      newData={newData}
      likedPerson={likedPerson}
      data={data}
      page={page}
    />
  );
};

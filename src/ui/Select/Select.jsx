import s from './Select.module.scss';

export const Select = () => {
  return (
    <div className={s.select}>
      <label htmlFor="House">House</label>
      <select className={s.select__select} defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled>
          Choice house
        </option>
        <option value="All">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="">Not Found</option>
      </select>
    </div>
  );
};

import s from './Input.module.scss';

export const Input = () => {
  return (
    <div className={s.input}>
      <label htmlFor="name">Name</label>
      <input className={s.input__search} type="text" placeholder="Поиск" />
    </div>
  );
};

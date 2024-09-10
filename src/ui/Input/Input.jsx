import s from './Input.module.scss';

export const Input = ({ inputHandler }) => {
  return (
    <div className={s.input}>
      <label htmlFor="name">Name</label>
      <input
        className={s.input__search}
        onChange={inputHandler}
        type="text"
        placeholder="Поиск"
      />
    </div>
  );
};

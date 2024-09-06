import s from './Button.module.scss';

export const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

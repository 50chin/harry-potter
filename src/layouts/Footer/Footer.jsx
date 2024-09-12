import s from './Footer.module.scss';
import likedImg from '../../assets/icon/liked.svg';
import { Button } from '../../ui/Button';
import { Link } from 'react-router-dom';

export const Footer = ({ resetSelect }) => {
  return (
    <footer className={s.footer}>
      <Link to="/favorites">
        <Button className={s.footer__btn} onClick={resetSelect}>
          <img src={likedImg} alt="" /> Show Liked
        </Button>
      </Link>
    </footer>
  );
};

import s from './Footer.module.scss';
import likedImg from '../../assets/icon/liked.svg';
import { Button } from '../../ui/Button';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Button className={s.footer__btn}>
        <img src={likedImg} alt="" /> Show Liked
      </Button>
    </footer>
  );
};

import s from './Card.module.scss';
import personImg from '../../assets/img/person.webp';
import { Button } from '../../ui/Button/Button';
import likeImg from '../../assets/icon/like.svg';
import likedImg from '../../assets/icon/liked.svg';

export const Card = ({
  id,
  image,
  name,
  actor,
  gender,
  house,
  core,
  alive,
  liked,
  likedPerson,
}) => {
  return (
    <article className={s.card}>
      <img className={s.card__img} src={image ? image : personImg} />
      <div className={s.card__desc}>
        <h2 className={s.card__name}>{name}</h2>
        <p className={s.card__bio}>Actor: {actor ? actor : 'not found'}</p>
        <p className={s.card__bio}>Gender: {gender}</p>
        <p className={s.card__bio}>House: {house ? house : 'not found'}</p>
        <p className={s.card__bio}>Wand core: {core ? core : 'no have'}</p>
        <p className={s.card__bio}>Alive: {alive ? 'yes' : 'no'}</p>
        <Button className={s.card__btn} onClick={() => likedPerson(id)}>
          <img src={liked ? likedImg : likeImg} alt="" />
        </Button>
      </div>
    </article>
  );
};

//  <button class="card__btn"><img {
//       liked ? 'src="./src/img/icon/liked.svg"' : 'src="./src/img/icon/like.svg"'
//     } alt="" /></button>

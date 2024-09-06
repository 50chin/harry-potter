import { Card } from '../../components/Card/Card';
import { Container } from '../Container/Container';
import s from './Cards.module.scss';

export const Cards = ({ newData, likedPerson }) => {
  return (
    <section className={s.cards}>
      <Container>
        <div className={s.cards__wrapper}>
          {newData.map((el) => (
            <Card
              key={el.id}
              id={el.id}
              image={el.image}
              name={el.name}
              actor={el.actor}
              gender={el.gender}
              house={el.house}
              core={el.wand.core}
              alive={el.alive}
              liked={el.liked}
              likedPerson={likedPerson}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

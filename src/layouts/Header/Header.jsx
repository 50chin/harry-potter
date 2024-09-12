import { useState } from 'react';
import { Input } from '../../ui/Input/Input';
import { Select } from '../../ui/Select/Select';
import { Container } from '../Container/Container';
import { Button } from '../../ui/Button';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = ({ inputHandler, selectHandle, page }) => {
  return (
    <header className={s.header}>
      <Container>
        {page === 'favorites' ? (
          <>
            <Link to="/">
              <Button className={s.header__btn}>← Back To All</Button>
            </Link>
            <h1 className={s.header__title}>Liked ones</h1>
            <p className={s.header__subtitle}>
              Your favorite characters from the Harry Potter universe.
            </p>
          </>
        ) : (
          <>
            <div className={s.header__top}>
              <h1 className={s.header__title}>Harry Potter</h1>
              <p className={s.header__subtitle}>
                View all characters from the Harry Potter universe
              </p>
            </div>
            <div className={s.header__search}>
              <Input inputHandler={inputHandler} />
              <Select selectHandle={selectHandle} />
            </div>
          </>
        )}
      </Container>
    </header>
  );
};

import { useState } from 'react';
import { Input } from '../../ui/Input/Input';
import { Select } from '../../ui/Select/Select';
import { Container } from '../Container/Container';
import s from './Header.module.scss';

export const Header = ({ inputHandler, selectHandle }) => {
  return (
    <header className={s.header}>
      <Container>
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
      </Container>
    </header>
  );
};

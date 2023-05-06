import React from 'react';
import { CardList } from './CardList/CardList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <CardList />
    </>
  );
};

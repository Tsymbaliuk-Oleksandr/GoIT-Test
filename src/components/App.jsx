import React from 'react';
import { CardList } from './CardList/CardList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';
import { useSelector } from 'react-redux';
import { getPage } from 'redux/userSelectors';
import { togglePage } from 'redux/userSlice';

const LIMIT = 4;
const maxPages = 12;

export const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const users = useSelector(state => state.users.items);
  // console.log(page);

  useEffect(() => {
    dispatch(fetchUsers({ page, limit: LIMIT }));
  }, [dispatch, page]);

  const loadMore = () => {
    if (users.length === maxPages) {
      return;
    }
    dispatch(togglePage(page + 1));
  };

  return (
    <>
      <CardList />
      <ButtonLoadMore children="Load more" onClick={loadMore} />
    </>
  );
};

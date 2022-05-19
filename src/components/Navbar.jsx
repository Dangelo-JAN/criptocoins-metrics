import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins } from '../redux/Coins/Coins';

const Navbar = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  useEffect(() => {
    if (!coins.length) dispatch(getCoins());
  }, [dispatch]);

  return (
    <>
      <h1>Hello micronauts</h1>
      <button type="button" onClick="">Verificando la API</button>
    </>
  );
};

export default Navbar;

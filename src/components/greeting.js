import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';

const Greetings = () => {
  const { greetings } = useSelector((store) => store.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <>
      <h1>Welcome to our application</h1>
      {greetings.greeting}
    </>
  );
};

export default Greetings;

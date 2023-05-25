import React, { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import getWeatherData from '../../apis/weather';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [location, setLocation] = useState('kota bharu');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeatherData(location).then((res) => {
      setWeather(res.data);
    });
  }, []);

  
  const handleSearch = () => {
    getWeatherData(location).then((res) => {
      setWeather(res.data);
    });
  };

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <h1>Weather App</h1>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {weather && (
          <div>
            <h2>{weather.name}</h2>
            <h3>{weather.weather[0].main}</h3>
            <h3>{weather.weather[0].description}</h3>
          </div>
        )}
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

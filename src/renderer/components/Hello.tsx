import React, {useState, useEffect} from 'react';

export default function Hello() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setSeconds(n => n + 1)
    }, 1000)
  }, [])
  return <h1>Hello: {seconds}</h1>
};

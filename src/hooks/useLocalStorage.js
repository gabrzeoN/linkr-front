import { useState } from 'react';

export default function useLocalStorage( key, initialValue ) {
  const [ storedValue, setStoredValue ] = useState( ()=> {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  function setValue( value ) {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}

// !COMO USAR! :(para fazer logout é só usar: setUser(null))
// const [user, setUser] = useLocalStorage('user', null)
import React, { useState, useEffect } from 'react';

const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  const reset = () => setState(props);

  useEffect(() => {
    console.log(111)
  })

  useEffect(() => {
    console.log(222)
  }, [])

  useEffect(() => {
    console.log(333)
  }, [name])

  return (
    <>
      <p>name: {state.name}, price: {price}</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={reset}>Reset</button>

      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}
export default App;

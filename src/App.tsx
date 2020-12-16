import _ from "lodash";
import Icon from "./img/icon.png";
import Print from "./print";
import React from "react";
// import { hot } from 'react-hot-loader/root'

function App() {
  return (
    <div className='hello'>
      {_.join(['Hello', 'webpack'], ' ')}
      <img src={Icon} onClick={() => Print('hello, webpack!')}  alt='icon'/>
    </div>
  );
};

// export default hot(App);
export default App;

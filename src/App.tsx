import _ from "lodash";
import React from "react";
// import { hot } from 'react-hot-loader/root'
import { throttle, debounce } from "./utils";
import Style from "./App.module.scss";

function App() {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value, Date.now() / 1000);
  }

  return (
    <div className={Style.red}>
      {_.join(["Hello", "webpack"], " ")}
      <input className={Style.blueBorder} onChange={throttle(onChange, 1000)} />
      <input className={Style.blueBorder} onChange={debounce(onChange, 1000)} />
    </div>
  );
}

// export default hot(App);
export default App;

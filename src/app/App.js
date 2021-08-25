import React, { useEffect } from "react";
import Helmet from "./Helmet"
import Component from '../components'
import AOS from 'aos';

const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div>
      <Helmet />
      <Component />
    </div>
  )
}

export default App;

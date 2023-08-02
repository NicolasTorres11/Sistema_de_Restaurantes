import React from 'react';
import {Navigation} from "./routers";
import {AdminLayout} from "./layouts/index"


export default function App() {
  return (
    <div className='app'>
      <h1 className='app__title'>Hola Mundo!!!</h1>
      <Navigation />
    </div>
  )
}

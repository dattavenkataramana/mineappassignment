 import React from 'react';
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
 import Home from './components/Home'
 import NotPound from './components/NotPound'
 

function App() {
  return (
     <BrowserRouter>
           <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/" element={<NotPound />} />
              <Route />
           </Routes>
     </BrowserRouter>
  );
}

export default App;
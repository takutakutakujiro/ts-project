import React, { FC } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './container/home';
import Blog from './container/blog';

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/blog' component={Blog} />
    </div>
  </BrowserRouter>
)

export default App;

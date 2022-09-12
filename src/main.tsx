import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import './styles/global.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Post } from './components/Posts';
import { Redirect } from './components/Redirect';
import { NoteFound } from './components/NotFound';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Post />} /> */}
        <Route path='/posts' element={<Post />}>
          <Route path=':id' element={<div>Outlet</div>} />
        </Route>
        <Route path='/posts' element={<Post />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NoteFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

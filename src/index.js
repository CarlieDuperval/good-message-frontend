import React from 'react';
import ReactDOM from 'react-dom/client';
import AddGoodMessage from './components/AddNewMessage';
import GoodMessages from './components/GoodMessage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoodMessages />
    <AddGoodMessage />
  </React.StrictMode>
);




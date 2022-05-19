import React from 'react';
import RequestIdentity from './components/RequestIdentity';
import './App.css';

export default function App() {
  return (
    <div className='center'>
      <div>
        <p className='center text-params'>DOGS</p>
        <RequestIdentity />
      </div> 
    </div>
  )
}

/** @format */

import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Counter from './Components/Counter';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Counter />
    </div>
  );
}

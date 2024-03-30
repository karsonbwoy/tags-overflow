import React from 'react';
import './App.css';
import Filter from './components/Filter';
import TagCard from './components/TagCard';
import { Stack } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Stack spacing={2}>
        <Filter />
        <TagCard tagName='React' posts={3129} />
      </Stack>
    </div>
  );
}

export default App;

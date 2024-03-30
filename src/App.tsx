import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Tags from './components/Tags';
import { Stack } from '@mui/material';
import { useFilterStore } from './store';

const fetchedData = [
  {
    tagName: 'React',
    posts: 1,
  },
  {
    tagName: 'JS',
    posts: 2,
  },
  {
    tagName: 'SB',
    posts: 3,
  },
  {
    tagName: 'C++',
    posts: 4,
  },
  {
    tagName: 'React',
    posts: 1,
  },
  {
    tagName: 'JS',
    posts: 2,
  },
  {
    tagName: 'SB',
    posts: 3,
  },
  {
    tagName: 'C++',
    posts: 4,
  },
  {
    tagName: 'React',
    posts: 1,
  },
  {
    tagName: 'JS',
    posts: 2,
  },
  {
    tagName: 'SB',
    posts: 3,
  },
  {
    tagName: 'C++',
    posts: 4,
  },
  {
    tagName: 'React',
    posts: 1,
  },
  {
    tagName: 'JS',
    posts: 2,
  },
  {
    tagName: 'SB',
    posts: 3,
  },
  {
    tagName: 'C++',
    posts: 4,
  },
  {
    tagName: 'React',
    posts: 1,
  },
  {
    tagName: 'JS',
    posts: 2,
  },
  {
    tagName: 'SB',
    posts: 3,
  },
  {
    tagName: 'C++',
    posts: 4,
  },
  {
    tagName: 'React',
    posts: 1,
  },
  {
    tagName: 'JS',
    posts: 2,
  },
  {
    tagName: 'SB',
    posts: 3,
  },
  {
    tagName: 'C++',
    posts: 4,
  },
  {
    tagName: 'React',
    posts: 1,
  },
  {
    tagName: 'JS',
    posts: 2,
  },
  {
    tagName: 'SB',
    posts: 3,
  },
  {
    tagName: 'C++',
    posts: 4,
  },

]

function App() {
  const { count, isAscending } = useFilterStore((state) => (state))
  return (
    <div className="App">
      <Stack spacing={2}>
        <Filter />
        <Tags fetchedData={fetchedData.slice(0, parseInt(count))} />
      </Stack>
    </div>
  );
}

export default App;

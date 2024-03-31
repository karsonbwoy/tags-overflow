import { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import Tags from './components/Tags';
import PageSelect from './components/PageSelect';
import { Stack } from '@mui/material';
import { useFilterStore } from './store';
import axios from 'axios';

const pageCount = 99
const base = 'https://api.stackexchange.com/'
const fakeData = [
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
  const { pageSize, isAscending, page } = useFilterStore((state) => (state))
  const pathURL = base + `2.3/tags?page=${page}&pagesize=${parseInt(pageSize)}&order=${isAscending ? 'asc' : 'desc'}&sort=popular&site=stackoverflow`
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    setIsLoading(true);
    setError(null)
    axios(pathURL)
      .then(response => setData(response.data.items))
      .catch(error => {
        console.log('Error', error);
        setError(error);
      })
      .finally(() => setIsLoading(false))
  }, [pathURL])

  return (
    <div className="App">
      <Stack spacing={2}>
        <Filter />
        <PageSelect count={pageCount} />
        {isLoading && 'Loading'}
        {error && 'Failed to fetch data.'}
        {!isLoading && !error && <Tags fetchedData={fakeData.slice(0, parseInt(pageSize))} />}
      </Stack>
    </div>
  );
}

export default App;

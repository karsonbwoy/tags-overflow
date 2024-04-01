import { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import Tags from './components/Tags';
import PageSelect from './components/PageSelect';
import Loading from './components/Loading';
import Fail from './components/Fail'
import { Stack } from '@mui/material';
import { useFilterStore } from './store';
import axios from 'axios';

const pageCount = 99
const base = 'https://api.stackexchange.com/'

type fetchedTags = {
  has_synonyms: boolean,
  is_moderator_only: boolean,
  is_required: boolean,
  count: number,
  name: string
}[] | null

function App() {
  const { pageSize, isAscending, page } = useFilterStore((state) => (state))
  const pathURL = base + `2.3/tags?page=${page}&pagesize=${parseInt(pageSize)}&order=${isAscending ? 'asc' : 'desc'}&sort=popular&site=stackoverflow`
  const [data, setData] = useState<fetchedTags>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    setIsLoading(true);
    setError(null)
    axios(pathURL)
      .then(response => setData(response.data.items))
      .catch(error => {
        console.log('Error', error);
        // setError(error);
      })
      .finally(() => setIsLoading(false))
  }, [pathURL])

  return (
    <div className="App">
      <Stack spacing={2} >
        <Filter />
        <PageSelect count={pageCount} />
        {isLoading && <Loading />}
        {error && <Fail />}
        {data && <Tags fetchedData={data.map((el, i) => ({ tagName: el.name, posts: el.count }))} />}
      </Stack>
    </div>
  );
}

export default App;

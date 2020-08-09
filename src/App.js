import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useFetchJobs from './useFetchJobs';

const App = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing.</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  )
}

export default App;

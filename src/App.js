import React from 'react';
import { Container } from 'react-bootstrap';
import useFetchJobs from './useFetchJobs';

const App = () => {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing.</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  )
}

export default App;

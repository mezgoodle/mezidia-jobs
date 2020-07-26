import React from 'react';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MDBContainer } from 'mdbreact';

function App() {
  return (
    <div>
      <Navbar />
      <MDBContainer>
        <div className="text-center">
          <h1 className="h1">Mezidia jobs</h1>
          <p>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
        Donec sed odio operae,
        eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
        purus sit amet fermentum.</p>
        </div>
      </MDBContainer>
      <MDBContainer>
        
      </MDBContainer>
      <Table />
      <Footer />
    </div>
  );
}

export default App;

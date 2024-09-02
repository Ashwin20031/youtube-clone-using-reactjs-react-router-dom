import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './Layout';
import Detail from './pages/Detail';


function App() {
  return (
    <>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />


        </Routes>
      </Layout>
    </>
  );
}

export default App;

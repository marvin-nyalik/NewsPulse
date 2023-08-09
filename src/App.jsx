import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Home from './components/Home.jsx';

function App() {
  const NewsDetail = React.lazy(() => import('./components/NewsDetail.jsx'));

  return (
     <Router>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news/detail/:name' 
          element={<Suspense fallback={<div>Loading...</div>}><NewsDetail /></Suspense>} />
       </Routes> 
     </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Home from './components/Home.jsx';
import Failing from './components/Failing.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './main.jsx';

function App() {
  const NewsDetail = React.lazy(() => import('./components/NewsDetail.jsx'));

  return (
     <Router>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path="/failing"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { console.log('Error'); }}>
              <Failing />
            </ErrorBoundary>
          }
        />
        <Route path='/news/detail/:title'
          element={<Suspense fallback ={<div> Loading ... </div>}> <NewsDetail /> </Suspense> } />
       </Routes> 
     </Router>
  )
}

export default App

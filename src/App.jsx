/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Home from './components/Home.jsx';
import Failing from './components/Failing.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './main.jsx';

function App() {
  const NewsDetail = React.lazy(() => import('./components/NewsDetail.jsx'));

  const RouteWrapper = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { console.log('Error'); }}>
     {children}
  </ErrorBoundary>
  )

  return (
     <Router>
       <Routes>
          <Route path='/' element={<RouteWrapper> <Home /></RouteWrapper>} />
          <Route path="/failing" element={<RouteWrapper> <Failing /></RouteWrapper>} />
          <Route path='/news/detail/:title'
            element={<Suspense fallback ={<div> Loading ... </div>}> <NewsDetail /> </Suspense> } />
       </Routes> 
     </Router>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import ProductsManagement from './components/ProductsManagement/ProductsManagement';
import OrdersManagement from './components/OrdersManagement/OrdersManagement';
import OrdersCalendarView from './components/OrdersCalendarView/OrdersCalendarView';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/products" element={<ProductsManagement />} />
         <Route path="/orders" element={<OrdersManagement />} />
         <Route path="/calendar" element={<OrdersCalendarView />} />
       </Routes>
     </Router>
  );
 }

export default App;

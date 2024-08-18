import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Form from './pages/Form';
import List from './component/List';
import FileUpload from './component/FileUpload';

function App() {
  

  return (
    <div>
      
        
      

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form />} />  
         <Route path="/FileUpload" element={<FileUpload />} />
         
        </Routes>
      </BrowserRouter>
      {/* <List tasks={tasks} /> */}
      
    </div>
  );
}

export default App;

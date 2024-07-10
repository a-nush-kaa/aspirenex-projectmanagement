import React from 'react';
import AppLayout from "./components/AppLayout";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar'; // Import the Navbar component
import './index.css'; // Make sure the path to index.css is correct

function App() {
  console.log('render app..')
  return (
    <div className="bg-custom min-h-screen">
      <AppLayout>
        <Toaster
          position="top-right"
          gutter={8}
        />
        <Routes>
          <Route path="/:projectId" element={<Task />} />
          <Route path="/" element={
            <div className="flex flex-col items-center w-full pt-10">
              <img src="./image/welcome.png" className="w-5/12 mt-5" alt="" />
              <h1 className="text-lg text-gray-600 mt-2">Select or create new project</h1>
            </div>
          } />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;

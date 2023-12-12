import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './layout/MainLayout'
import 'react-circular-progressbar/dist/styles.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <MainLayout />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  </React.StrictMode>,
)

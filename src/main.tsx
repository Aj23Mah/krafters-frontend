import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import '@mantine/core/styles.css'
import '@mantine/tiptap/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
          theme="dark"
        />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);

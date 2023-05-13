import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MultiPlayerApp from "./MultiPlayerApp"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "multiplayer",
    element: <MultiPlayerApp />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

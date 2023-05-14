import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MultiPlayerApp from "./MultiPlayerApp"
import GetLink from "./GetLink"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "multiplayer",
    element: <MultiPlayerApp />,
  },
  // { path: "multiplayer/:roomId", element: <GetLink /> },
  { path: "multiplayer/:roomId/:username", element: <GetLink /> },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

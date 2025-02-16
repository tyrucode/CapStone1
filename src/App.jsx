// react router imports
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router"
//pages

//layouts

//loader functions

//routes for all pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)
//actual app
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

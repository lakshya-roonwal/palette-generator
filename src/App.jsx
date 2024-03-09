import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home"
import { Button } from "./components/ui/button"
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<>
        <SignedIn>
          <Dashboard/>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn/>
        </SignedOut>
        </>
      }/>
    </>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import MainLayout from "./layout/MainLayout";
import Review from "./components/Review/Review";

function App() {
   
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/quiz/:title',
          element: <Quiz/>
        },
        {
          path:'/review',
          element:<Review/>
        }
      ]
    }

  ]) 

  return ( <RouterProvider router={routes}/>);
}

export default App;

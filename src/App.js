import './App.css';
import Body from './components/Body';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OrderDetails from './components/OrderDetails';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/orderDetails/:orderId",
      element: <OrderDetails/>,
    },
  ]);
  return (
    <div className="App">
       <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Auth Provider/AuthProvider';
import About from './Components/About/About';
import AllProducts from './Components/All Products/AllProducts';
import Home from './Components/Home/Home';
import ManageAllOrders from './Components/Manage All Orders/ManageAllOrders';
import PrivateRoute from './Components/Private Route/PrivateRoute';
import Purchase from './Components/Purchase/Purchase';
import DashBoard from './Pages/Dash Board/DashBoard';
import LogIn from './Pages/Log In/LogIn';
import ManageProducts from './Pages/Manage Products/ManageProducts';
import MyOrder from './Pages/My Orders/MyOrder';
import Register from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/dash-board'>
              <DashBoard></DashBoard>
            </Route>
            <PrivateRoute path='/purchase/:productId'>
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path='/all-products'>
              <AllProducts></AllProducts>
            </PrivateRoute>
            <Route path='/manage-all-orders'>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path='/my-orders'>
              <MyOrder></MyOrder>
            </Route>
            <Route path='/manage-products'>
              <ManageProducts></ManageProducts>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

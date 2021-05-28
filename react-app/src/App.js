import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import AuthNavBar from "./components/auth/AuthNavBar";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Product from "./components/Product"
import SingleProduct from "./components/SingleProduct"
import Review from "./components/Review";
import Cart from "./components/Cart"
import CreateReview from "./components/CreateReview";
import EditReview from "./components/EditReview";
import Favorite from "./components/Favorite";
import { displayProducts } from './store/product';
import { displayItems } from './store/cart'
import { authenticate } from "./store/session";

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(displayProducts());
      // await dispatch(displayItems(user.id));
      setLoaded(true);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     if (user) {
  //       await dispatch(displayItems(user.id));
  //     }
  //   })();
  // }, [dispatch, user]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {user?<NavBar/>:<AuthNavBar/>}
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/favorites" exact={true} >
          <Favorite />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} >
          <Product />
        </ProtectedRoute>
        <ProtectedRoute path="/products/:productId" exact={true} >
          <SingleProduct />
        </ProtectedRoute>
        <ProtectedRoute path="/products/:productId/reviews" exact={true} >
          <Review />
        </ProtectedRoute>
        <ProtectedRoute path="/products/:productId/reviews/new" exact={true} >
          <CreateReview />
        </ProtectedRoute>
        <ProtectedRoute path="/products/:productId/reviews/:reviewId/update" exact={true} >
          <EditReview />
        </ProtectedRoute>
        <ProtectedRoute path="/cart" exact={true} >
          <Cart />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

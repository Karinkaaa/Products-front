import React from "react";
import {Route, Switch} from "react-router";
import ProductCart from "../containers/products/ProductCart";
import ProductCards from "../containers/products/ProductCards";
import ProductList from "../containers/products/ProductList";
import UserList from "../containers/users/UserList";
import CreateUserForm from "../containers/users/CreateUserForm";
import CreateProductForm from "../containers/products/CreateProductForm";
import Profile from "../containers/users/Profile";
import News from "../containers/news/News";
import {
    APP,
    CREATE_PRODUCT_FORM,
    CREATE_USER_FORM,
    PRODUCT_CARDS,
    PRODUCT_CART,
    PRODUCT_LIST,
    PRODUCT_UPDATE,
    SHOW_NEWS,
    USER_LIST,
    USER_PROFILE,
    USER_UPDATE
} from "../additionalData/links/front";

export default () => (
    <Switch>
        <Route exact path={APP}>
            <ProductCards/>
        </Route>

        <Route path={PRODUCT_LIST}>
            <ProductList/>
        </Route>

        <Route path={CREATE_PRODUCT_FORM}>
            <CreateProductForm/>
        </Route>

        <Route path={PRODUCT_CARDS}>
            <ProductCards/>
        </Route>

        <Route path={PRODUCT_CART}>
            <ProductCart/>
        </Route>

        <Route path={PRODUCT_UPDATE}>
            <CreateProductForm/>
        </Route>

        <Route path={USER_LIST}>
            <UserList/>
        </Route>

        <Route path={USER_PROFILE}>
            <Profile/>
        </Route>

        <Route path={USER_UPDATE}>
            <CreateUserForm/>
        </Route>

        <Route path={CREATE_USER_FORM}>
            <CreateUserForm/>
        </Route>

        <Route path={SHOW_NEWS}>
            <News/>
        </Route>
    </Switch>
);
import React, { useEffect, useState } from "react";
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {Layout} from './shared/Layout';
import { UserContextProvider } from "./shared/context/userContext";
import { PostContextProvider } from "./shared/context/postContext";

import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "./store/reducer";
import thunk from "redux-thunk";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Post } from "./shared/Post";
import { ErrorPage } from "./shared/Error/ErrorPage";
import { HomePage } from "./shared/HomePage/HomePage";
import { RecoilRoot } from "recoil";


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

function AppComponent() {
  const [ mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <RecoilRoot>
      <Provider store={store}>
        <UserContextProvider>
          <PostContextProvider>
            {mounted && (
              <BrowserRouter>
                <Layout>
                  <Header />
                  <Content>
                    <Switch>
                      <Route exact path="/">
                        <HomePage />
                      </Route>
                      <Route path="/auth" >
                        <Redirect to="/posts" />
                      </Route>
                      <Route path="/posts/:id">
                        <>
                          <CardsList />
                          <Post />
                        </>
                      </Route>
                      <Route path="/posts" >
                        <CardsList />
                      </Route>
                      <Route path="*">
                        <ErrorPage/>
                      </Route>
                    </Switch>
                  </Content>
                </Layout>
              </BrowserRouter>
            )}
          </PostContextProvider>
        </UserContextProvider>
      </Provider>
    </RecoilRoot>
  );
}

export const App = hot(() => <AppComponent />);
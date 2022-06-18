import './App.css'

import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={5}
                  country="IN"
                  category="general"
                />
              }
            >
              <Route
                path="/entertainment"
                element={
                  <News
                    key="entertainment"
                    pageSize={5}
                    country="IN"
                    category="entertainment"
                  />
                }
              />
              <Route
                path="/health"
                element={
                  <News
                    key="health"
                    pageSize={5}
                    country="IN"
                    category="health"
                  />
                }
              />
              <Route
                path="/sports"
                element={<News pageSize={5} country="IN" category="sports" />}
              />
              <Route
                path="/general"
                element={<News pageSize={5} country="IN" category="general" />}
              />
              <Route
                path="/science"
                element={<News pageSize={5} country="IN" category="science" />}
              />
              <Route
                path="/technology"
                element={
                  <News pageSize={5} country="IN" category="technology" />
                }
              />
              <Route
                path="/business"
                element={<News pageSize={5} country="IN" category="business" />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

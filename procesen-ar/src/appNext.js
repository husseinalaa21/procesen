import React from 'react'
import HeaderMain from './header';

export default function App() {
    return (
        <Router>
        <Switch >
        <Router  path="/">
              <HeaderMain />
        </Router>
        </Switch>
          <Switch>
        <Router  path="/callUs">
            <div>
              fuck me
            </div>
        </Router>
          </Switch>
        </Router>
    )
}

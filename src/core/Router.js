import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Unauthorized, SignIn, SignUp, Product } from '../containers'

export default ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route path="*" component={props => <Unauthorized {...props} />} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path="/" component={props => <Home {...props} />} />
      <Route path="/sign-in" component={props => <SignIn {...props} />} />
      <Route path="/sign-up" component={props => <SignUp {...props} />} />
      <Route path="/product" component={props => <Product {...props} />} />
      <Route path="*" component={props => <Unauthorized {...props} />} />
    </Switch>
  )
}

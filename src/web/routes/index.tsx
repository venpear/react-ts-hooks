import * as React from 'react'
import { Switch, RouteProps, Route } from 'react-router-dom'
import Loading from '../components/loading'
const { lazy, Suspense } = React
// const Home = req
const Home = lazy(() => (
  import(/* webpackChunkName:"home" */ "../components/home")
))
const Banner = lazy(() => (
  import(/* webpackChunkName:"banner" */ "../components/banner")
))
const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home
  }, {
    path: '/banner',
    exact: true,
    component: Banner
  }
]
const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {
        routes.map(r => { 
          const { path, exact, component } = r
          const LazyComponet = component
          return (<Route key={path + ''} exact={exact} path={path} render={() => <LazyComponet/> }></Route>)
        })
      }
    </Switch>
  </Suspense>
)

export default Routes


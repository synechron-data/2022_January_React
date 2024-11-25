import { lazy, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";

// Eager Loading
import HomeComponent from "../components/home/HomeComponent";
import LoaderAnimation from '../components/common/LoaderAnimation';

// Lazy Loading
const AboutComponent = lazy(() => import("../components/about/AboutComponent"));
const HOCDemoComponentOne = lazy(() => import("../components/hoc/HOCDemoComponentOne"));
const HOCDemoComponentTwo = lazy(() => import("../components/hoc/HOCDemoComponentTwo"));
const CounterContainer = lazy(() => import("../containers/counter/CounterContainer"));
const FCounterComponent = lazy(() => import("../components/f-counter/FCounterComponent"));
const FCounterRoot = lazy(() => import("../components/f-counter/FCounterRoot"));
const ProductsContainer = lazy(() => import("../containers/products/ProductsContainer"));
const ManageProductContainer = lazy(() => import("../containers/products/ManageProductContainer"));

const img404 = require('../assets/http-404.jpg');

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/hoc1" component={HOCDemoComponentOne} />
            <Route path="/hoc2" component={HOCDemoComponentTwo} />
            <Route path="/counter" component={CounterContainer} />
            <Route path="/fcounter" component={FCounterComponent} />
            <Route path="/fcounterroot" component={FCounterRoot} />
            <Route path="/products" component={ProductsContainer} />
            <Route path="/product/:id" component={ManageProductContainer} />
            <Route path="/product" component={ManageProductContainer} />

            {/* <Route path="/hoc1" render={
                (props) => (
                    <HOCDemoComponentOne data={"Data from the Router"} {...props} />
                )
            } />
            <Route path="/hoc2" render={
                (props) => (
                    <HOCDemoComponentTwo data={"Data from the Router"} {...props} />
                )
            } /> */}
            <Route path="**" render={
                () => (
                    <div className="text-center">
                        <article>
                            <h1 className="text-danger">No Route Configured!</h1>
                            <h4 className="text-danger">Please check your Route Configuration</h4>
                        </article>
                        <div className="mt-2">
                            <img src={img404} alt="Not Found" className="rounded" />
                        </div>
                        <h2 className="mt-2">
                            <Link exact className="nav-link" to="/">Back to Home</Link>
                        </h2>
                    </div>
                )
            } />
        </Switch>
    </Suspense>
);
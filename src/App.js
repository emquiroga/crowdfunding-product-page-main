import React from "react";
import Header from './components/Header'
import Hero from "./components/Hero";
import Stadistics from "./components/Stadistics";

export default function App () {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Stadistics />
        </React.Fragment>
    )
}
import React from "react";
import Header from './components/Header'
import Hero from "./components/Hero";
import Stadistics from "./components/Stadistics";
import About from "./components/About";


export default function App () {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Stadistics />
            <About />
        </React.Fragment>
    )
}
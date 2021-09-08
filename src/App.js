import React from "react";
import Header from './components/Header'
import Hero from "./components/Hero";
import Stadistics from "./components/Stadistics";
import About from "./components/About";
import Project from "./components/Project-Modal";

export default function App () {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Stadistics />
            <About />
            <Project />
        </React.Fragment>
    )
}
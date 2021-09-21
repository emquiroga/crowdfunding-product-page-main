import React from "react";
import Product from "./Product";

export default function About(props) {
    return (
        <section className="about">
            <h2 className="about-tittle">About this project</h2>
            <p className="about-description">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
             to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

            <p className="about-description">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <Product
            title="Bamboo Stand"
            legend="Pledge $25 or more"
            description= "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            numberLeft= "101"
            stock={true}
            />
            <Product
            title="Black Edition Stand"
            legend="Pledge $75 or more"
            description= "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            numberLeft= "64"
            stock={true}
            />
            <Product
            title="Mahogany Special Edition"
            legend="Pledge $200 or more"
            description= "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
            numberLeft= "0"
            stock={false}
            />
        </section>
    )
}
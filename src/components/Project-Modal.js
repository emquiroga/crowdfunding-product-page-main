import React from "react";
import Input from "./Product-Input";


export default function Project() {
return (
    <form className="project-modal">
        <h2>Back this project</h2>
        <p className="project-description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <Input
        stock={true}
        id="no-reward" 
        title="Pledge with no reward"
        pledge=""
        numberLeft=""
        description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
        />
        <Input
        stock={true}
        id="bamboo-stand" 
        title="Bamboo Stand"
        pledge="Pledge $25 or more"
        numberLeft="101"
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        />
        <Input
        stock={true}
        id="black-edition" 
        title="Black Edition Stand"
        pledge="Pledge $75 or more"
        numberLeft="64"
        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        />
        <Input
        stock={false}
        id="mahogany" 
        title="Mahogany Special Edition"
        pledge="Pledge $200 or more"
        numberLeft="0"
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        />
       
    </form>
)
}
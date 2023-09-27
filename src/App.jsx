import React from "react"
import data from "./data"
import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  const airbnbData= data.map(x =>  
    <Card 
    key = {x.id}
    item= {x}
    />) 

    return (
    <div>
        <Navbar/>
        <Hero/>
        <section className="cards-list">
        {airbnbData}
        </section>
    </div>
)
}

export default App

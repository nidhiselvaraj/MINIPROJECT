import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Offerzone = () => {
  return (
    <>
      <section className='Portfolio top' id='offer'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>See Our Restarent 24/7 Famous Menu</h4>
            <h1>Offer ends soon Book Fast...</h1>
            
            
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })}

            
          </div>
        </div>
      </section>
    </>
  )
}

export default Offerzone

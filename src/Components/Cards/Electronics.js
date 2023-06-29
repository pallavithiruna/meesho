import React from 'react'
import Cards from './Card';
import './Card.css';
import Nav from '../Navbar/Nav';
function Electronics() {
    const electronic=[
        {
            productImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Yr6yR_-mbHmnPS7h4-rajmj3Qb6ep4dRkw&usqp=CAU" ,
             productName: "ear-pads",
             price: "2,500",
             rating: "90%",
         },
         {
            productImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHI1a_5N8e0e2eQvIuYlwnujH5cK0CROt2SGFwAYIs7_AliampZ46FQjfiuEiXIrJxXok&usqp=CAU" ,
             productName: "ear-pads",
             price: "1,500",
             rating: "60%",
         },
         {
            productImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIQAap346FLNqhNOV3qgufS6jTC1OdB9nyg&usqp=CAU" ,
             productName: "reading-light",
             price: "2,000",
             rating: "56%",
         },
         {
            productImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBGH6bTI069xWdAi5gfFk2dYuGwup_K3-gw&usqp=CAU" ,
             productName: "watch",
             price: "3,000",
             rating: "78%",
         }
    ]
  return (
    
      <div className='common'>
      <Nav/>
      {electronic.map((prod, idx)=> (<Cards
      key = {idx}
      idx = {idx}
      prod = {prod}
      />))}
    </div>
  )
}

export default Electronics

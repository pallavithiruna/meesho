import React from 'react'
import Cards from './Card'
import Nav from '../Navbar/Nav'

function Men() {
    const mendata=[
        {
           productImage:
             "data:image/jpeg;base64,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" ,
            productName: "wedding-wear",
            price: "2,300",
            rating: "40%",
        },
        {
            productImage:
              "data:image/jpeg;base64,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" ,
             productName: "cool-outfit",
             price: "4,500",
             rating: "60%",
         },
         {
            productImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvEOt77uQGIyIN5IHy8zyj5gp5T31n3QWj1w&usqp=CAU" ,
             productName: "haldi-wear",
             price: "1,000",
             rating: "70%",
         },
         {
            productImage:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSML8-TNzflbSIKpdiMZ45Ei9VpgzdGtBO-6Q&usqp=CAU" ,
             productName: "coat-suit",
             price: "6,000",
             rating: "78%",
         }
    ]
  return (
    <div>
       <div className='common'>
        <Nav/>
      {mendata.map((prod,idx)=>(<Cards
       key = {idx}
       idx = {idx}
       prod = {prod}
      />))
      }
    </div>
    </div>
  )
}

export default Men
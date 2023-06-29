import React from 'react';
import Cards from './Card';
import './Card.css';
import Nav from '../Navbar/Nav';
function Womensethic(){
      
    const data=[
        {
            productImage:
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdD8QKB9WhGxnE09kNQcKhZUM6CxnpL32qWJMhviO2kQ&s" ,
            productName: "banaras-silk",
            price: "10,000",
            rating: "91%",
          },
          {
            productImage:
             "https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=" ,
            productName: "kanchipuram-silk",
            price: "10,000",
            rating: "20%",
          },
          {
            productImage:
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcaMUJt-xVHHNWcAvd0zibJb_1gYQM1ZiaZ_-RMXV1Q&s" ,
            productName: "soft-silk",
            price: "8,000",
            rating: "60%",
          },
          {
            productImage:
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkQS_H0XmUuLjSxn19SCVwgJqpcdXDYGHDOIxEqko9A&s" ,
            productName: "ellampillai-saree",
            price: "9,000",
            rating: "40%",
          }
    ];
  return (
    <div className='common'>
      <Nav/>
     {data.map((prod, idx)=> (<Cards
      key = {idx}
      idx = {idx}
      prod = {prod}
      />))}
    </div>
  )
}

export default Womensethic

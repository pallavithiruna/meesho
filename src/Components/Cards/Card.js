import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Card.css';
function Cards({prod}) {
  
 
  return (
<div className='cards'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:"150px",heigth:"150px"}}src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>Rs.{prod.price}</Card.Text>
        <Card.Text>{prod.rating}</Card.Text>
        <Button variant="primary">+</Button>
        <Button variant="primary">-</Button>
      </Card.Body>
    </Card>
</div>
  )
}

export default Cards

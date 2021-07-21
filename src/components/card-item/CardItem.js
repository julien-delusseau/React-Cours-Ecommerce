import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './card-item.css'

function CardItem({ id, title, description, image, price }) {
  const reduceText = text => {
    if (text.length > 100) return text.substring(0, 99) + ' ...'
    else return text
  }

  return (
    <Card id='card__container' className='h-100'>
      <Card.Img
        style={{ maxHeight: '200px', objectFit: 'contain' }}
        variant='top'
        src={image}
      />
      <Card.Body id='card__body'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{reduceText(description)}</Card.Text>
        <Card.Text>{price + '€'}</Card.Text>
        <Button as={Link} to={`/item/${id}`}>
          Voir l'article
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardItem

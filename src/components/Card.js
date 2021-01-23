import React from 'react'

export const Card = (props) => {
  return (
    <div className ="MyCard">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
    
  )
}


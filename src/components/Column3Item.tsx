import React from 'react'

export interface Column3ItemType {
  image?: {
    src?: string,
    alt?: string
  },
  title?: string,
  description?: string
}

const Column3Item = ({
  image = {
    src: '',
    alt: ''
  },
  title = 'Insert text here',
  description = 'Add here your additional text'
}: Column3ItemType) => {
  return (
    <li 
    style={{
      "flexGrow":"1",
      "display":"flex",
      "flexDirection":"column",
      "alignItems":"center"
    }}
    data-block="Column3Item" 
    data-gjs-draggable="[data-column-list]" 
    data-gjs-droppable="false"
  >
    <img 
      data-gjs-draggable="false" 
      style={{
        "width":"100%",
        "height":"90px",
        "marginBottom":"25px"
      }}
      src={image.src}
      alt={image.alt}
    />
    <h3 
      data-gjs-draggable="false" 
      className="text-center"
      style={{
        "animationName":"highlight",
        "display":"inline",
        "position":"relative",
        "backgroundSize":"200% auto",
        "backgroundImage":"linear-gradient(to right, rgba(255,0,0,0) 50%,#ac99b4 50%)",
        "backgroundPosition":"0% 0",
        "animationDuration":"1s",
        "animationDelay":"0.8s",
        "animationIterationCount":"1",
        "animationFillMode":"forwards",
        "paddingLeft":"0.15em",
        "whiteSpace":"pre-wrap",
        "paddingRight":"0.15em",
        "fontSize":"28px",
        "color":"#1a2138",
        "fontWeight":"700",
        "margin":"0",
        "marginBottom":"12px"
      }}
    >
      {title}
    </h3>
    <p 
      data-gjs-draggable="false" 
      className="text-center"
      style={{
        "fontSize":"18px",
        "color":"#1a2138",
        "fontWeight":"400",
        "margin":"0px",
        "marginBottom":"12px"
      }}
    >
      {description}
    </p>
  </li>
  )
}

export default Column3Item

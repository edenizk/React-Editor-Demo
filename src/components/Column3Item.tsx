import React from 'react'

export interface Column3ItemType {
  icon?: string,
  title?: string,
  description?: string
}

const Column3Item = ({
  icon = 'check_box_outline_blank',
  title = 'Insert text here',
  description = 'Add here your additional text'
}: Column3ItemType) => {
  return (
    <li 
    style={{
      "flexGrow":"1",
      "display":"flex",
      "flexDirection":"column",
      "alignItems":"center",
      maxWidth: "356px"
    }}
    data-block="Column3Item" 
    data-gjs-draggable="[data-column-list]" 
    data-gjs-droppable="false"
    data-gjs-removable="false"
  >
    <span 
      data-gjs-type="iconPicker" 
      data-gjs-removable="false"
      className="material-icons"
      style={{
        fontSize: "90px",
        marginBottom: '25px',
      }}
    >
      {icon}
    </span>
    <h3 
      data-gjs-type="textHighlight"
      data-gjs-removable="false"
      data-gjs-draggable="false" 
      className="text-center"
      style={{
        "animationName":"highlight",
        "display":"inline",
        "position":"relative",
        "backgroundSize":"200% auto",
        "backgroundImage":"linear-gradient(to right, rgba(255,0,0,0) 50%,var(--highlight-text-color) 50%)",
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
        "marginBottom":"12px",
        "wordBreak": "break-all"
      }}
    >
      {title}
    </h3>
    <p 
      data-gjs-draggable="false"
      data-gjs-removable="false" 
      className="text-center"
      style={{
        "fontSize":"18px",
        "color":"#1a2138",
        "fontWeight":"400",
        "margin":"0px",
        "marginBottom":"12px",
        "wordBreak": "break-all"
      }}
    >
      {description}
    </p>
  </li>
  )
}

export default Column3Item

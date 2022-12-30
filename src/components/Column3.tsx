import React from 'react'
import parse from 'html-react-parser';
import { content } from '@blocks/Column3Block';

const Column3 = ({title, items}) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {
          items.map((item) => (
            parse(content({...item}))
          ))
        }
      </ul>
    </div>
  )
}

export default Column3

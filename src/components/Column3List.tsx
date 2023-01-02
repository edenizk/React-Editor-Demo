import React from 'react'
import parse from 'html-react-parser';
import Column3Item, { Column3ItemType } from '@components/Column3Item';
import ReactDOMServer from 'react-dom/server';

interface Column3ListType {
  title?: string;
  items?: Column3ItemType[]
}

const Column3List = ({
  title = 'Insert a title here',
  items = [
    {},
    {},
    {}
  ]
}: Column3ListType) => {
  return (
    <section 
      style={{"padding":"100px 20px", "maxWidth": "1140px", "margin": "0 auto"}}
      data-gjs-droppable="false"
      data-gjs-type="column3List"
      data-gjs-draggable='[data-gjs-type="wrapper"]' 
    >
    <h2 
      data-gjs-draggable="false" 
      style={{
        "color": "#1a2138",
        "fontSize": "40px",
        "fontWeight": "700",
        "margin": "0px",
        "marginBottom": "32px",
        "textAlign": "center"
      }}
    >
      {title}
    </h2>
    <ul 
      data-gjs-draggable="false" 
      className="flex justify-center" 
      style={{
        "display": "flex",
        "justifyContent": "center",
        "gap": "15px"
      }}
      data-column-list 
      // data-gjs-droppable="false"
    >
      {
        parse(items.map((item) => {
          const element = <Column3Item {...item}/>

          return ReactDOMServer.renderToStaticMarkup(element)
        }).join(''))
      }
    </ul>
  </section>
  )
}

export default Column3List

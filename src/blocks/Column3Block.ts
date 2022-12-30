import ReactDOMServer from 'react-dom/server';
import Column3List from '@components/Column3List';

const Column3Block = (editor) => {
  const element = Column3List({})

  editor.Blocks.add('Column3', {
    label: 'Column3',
    content: ReactDOMServer.renderToStaticMarkup(element),
    category: 'Sections',
  })

  // editor.Blocks.add('Column3Item', {
  //   label: 'Column3Item',
  //   content: content({}),
  //   category: 'Column3 Content',
  //   // content: { type: 'component-id', fromBlock: 'block-id'  },
  // })

  // editor.on('component:add', component => {
  //   const tag = component.getAttributes()['data-block']
  //   console.log('tagName', component);
  //     if (tag == 'Column3Item') {
  //         if (editor.getComponents().filter(comp => comp.getAttributes()['data-block'] == tag).length > 3) {
  //             component.remove()
  //         }
  //     }
  // })
}

export default Column3Block;

import ReactDOMServer from 'react-dom/server';
import Column3List from '@components/Column3List';
import Column3Media from '@static/img/blocks/Column3Block.png'

const Column3Block = (editor) => {
  const element = Column3List({})

  editor.Blocks.add('Column3', {
    label: 'Column3',
    content: ReactDOMServer.renderToStaticMarkup(element),
    media: `<img src="${Column3Media}" alt="Colum 3" />`,
    category: {
      order: -1,
      label: 'Sections',
    },
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

export const section = ({
  title = 'Insert a title here',
  items = [
    {},
    {},
    {}
  ]
}) => (`
  <section 
    style="padding: 100px 20px" 
    data-gjs-droppable="false"
  >
    <h2 
      data-gjs-draggable="false" 
      style="
        color: #1a2138;
        font-size: 40px;
        font-weight: 700;
        margin: 0px;
        margin-bottom: 32px;
        text-align: center;
      "
    >
      ${title}
    </h2>
    <ul 
      data-gjs-draggable="false" 
      class="flex justify-center" 
      style="
        display: flex;
        justify-content: center;
        gap: 15px;
      "
      data-column-list 
      data-gjs-droppable="false"
    >
      ${
        items.map((item) => (
          content({...item})
        )).join('')
      }
    </ul>
  </section>
`)

export const content = ({
  image = {
    src: '',
    alt: ''
  },
  title = 'Insert text here',
  description = 'Add here your additional text'
}) => (`
  <li 
    style="
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    "
    data-block="Column3Item" 
    data-gjs-draggable="[data-column-list]" 
    data-gjs-droppable="false"
  >
    <img 
      data-gjs-draggable="false" 
      style="
        width:100%;
        height: 90px;
        margin-bottom: 25px;
      " 
      src="${image.src}" 
      alt="${image.alt}" 
    />
    <h3 
      data-gjs-draggable="false" 
      class="text-center"
      style="
        animation-name: highlight;
        display: inline;
        position: relative;
        background-size: 200% auto;
        background-image: linear-gradient(to right, rgba(255,0,0,0) 50%,#ac99b4 50%);
        background-position: 0% 0;
        animation-duration: 1s;
        animation-delay: 0.8s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        padding-left: 0.15em;
        white-space: pre-wrap;
        padding-right: 0.15em;
        font-size: 28px;
        color: #1a2138;
        font-weight: 700;
        margin: 0;
        margin-bottom: 12px;
      "
    >${title}</h3>
    <p 
      data-gjs-draggable="false" 
      class="text-center"
      style="
      font-size: 18px;
      color: #1a2138;
      font-weight: 400;
      margin: 0px;
      margin-bottom: 12px;
      "
    >
      ${description}
    </p>
  </li>
`)

const Column3Block = (editor) => {
  editor.Blocks.add('Column3', {
    label: 'Column3',
    content: section({}),
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

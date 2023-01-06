import ReactDOMServer from 'react-dom/server';
import EmptySection from '@components/EmptySection';

const Column3Block = (editor) => {
  const element = EmptySection()

  editor.Blocks.add('EmptySection', {
    label: 'Section',
    content: ReactDOMServer.renderToStaticMarkup(element),
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>
    </svg>`,
    category: {
      order: -1,
      label: 'Sections',
    },
  })
}

export default Column3Block;

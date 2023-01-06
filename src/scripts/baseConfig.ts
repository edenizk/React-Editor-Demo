import gsBlocksBasics from 'grapesjs-blocks-basic';
import exportPlugin from 'grapesjs-plugin-export';
import customBlocks from '@blocks';
import customTraits from '@traits';
import grapesJSStylings from '@scripts/grapesJSStylings'

interface BlockManagerConfig {
  appendTo?: HTMLElement | string;
  blocks: Array<object>;
}

const baseConfig = (plugins) => ({
  height: '100%',
  showOffsets: true,
  noticeOnUnload: 0,
  storageManager: { autoload: false },
  container: '#gjs',
  fromElement: true,

  plugins: [gsBlocksBasics, exportPlugin, ...customBlocks, ...customTraits, ...plugins],
  pluginsOpts: {
    'grapesjs-plugin-export': { 
      root: {
        'index.html': ed => (
          `
          <head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <script src="https://cdn.tailwindcss.com"/>
          </head>
          <body>${ed.getHtml()}</body>
        `)
      }
    }
  },

  protectedCss: grapesJSStylings,
  canvas: {
    scripts: [
      'https://cdn.tailwindcss.com'
    ],
    styles: [
      'https://fonts.googleapis.com/icon?family=Material+Icons'
    ]
  },

  // pluginsOpts: {
  //   'grapesjs-plugin-export': { 
  //     root: {
  //       'index.html': ed => {
  //         console.log('ed',ed);
  //         return `
  //       <head>
  //         <link href="https://fonts.googleapis.com/icon?family=Material+Icons" .../>
  //         <script src="https://cdn.tailwindcss.com" .../>
  //       </head>
  //       <body>${ed.getHtml()}</body>
  //       `}
  //     }
  //   }
  // },

  layerManager: {
    appendTo: '.layers-container'
  },

  deviceManager: {
    devices: [{
        name: 'Desktop',
        width: '',
      }, {
        name: 'Tablet',
        width: "768px",
        widthMedia: "992px",
      }, {
        name: 'Mobile',
        width: '320px',
        widthMedia: '480px',
    }]
  },

  blockManager: {
    appendTo: '#blocks-mgr',
  } as BlockManagerConfig,

  styleManager: {
    appendTo: '#styles-or-traits-mgr #styles-mgr',
    sectors: [{
      name: 'General',
      open: false,
      buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
    },{
      name: 'Dimension',
      open: false,
      buildProps: [ 'width', 'height', 'max-width', 'min-height', 'margin', 'padding']
    },{
      name: 'Typography',
      open: false,
      buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow']
    },{
      name: 'Decorations',
      open: false,
      buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
    },{
      name: 'Extra',
      open: false,
      buildProps: ['opacity', 'transition', 'perspective', 'transform'],
      properties: [{
        type: 'slider',
        property: 'opacity',
        defaults: 1,
        step: 0.01,
        max: 1,
        min:0,
      }]
    }],
  },

  traitManager: {
    appendTo: '#styles-or-traits-mgr #traits-mgr'
  },

  panels: { defaults: [] },
})

export default baseConfig;

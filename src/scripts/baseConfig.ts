import gsBlocksBasics from 'grapesjs-blocks-basic';
import customBlocks from '@blocks';
import grapesJSStylings from '@scripts/grapesJSStylings'

interface BlockManagerConfig {
  appendTo?: HTMLElement | string;
  blocks: Array<object>;
}

const baseConfig = {
  height: '100%',
  showOffsets: true,
  noticeOnUnload: 0,
  storageManager: { autoload: false },
  container: '#gjs',
  fromElement: true,

  plugins: [gsBlocksBasics, ...customBlocks],

  protectedCss: grapesJSStylings,
  canvas: {
    scripts: [
      'https://cdn.tailwindcss.com'
    ]
  },

  // pluginsOpts: {
  //   'grapesjs-blocks-basic': {}
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
}

export default baseConfig;

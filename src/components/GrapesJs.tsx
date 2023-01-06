import React, {PropsWithChildren, useState, useEffect, useRef} from 'react';
import GrapesJS from 'grapesjs';
import baseConfig from '@scripts/baseConfig';
import EditorTools from '@components/EditorTools';
import GoogleIconPicker from '@components/GoogleIconPicker';
import 'grapesjs/dist/css/grapes.min.css';
import 'GrapesJS-devfuture/assets/css/custom-grapesjs.css'

export interface GrapesjsReactProps {

  onInit?(editor?: GrapesJS.Editor): void;

  plugins?: (string | GrapesJS.Plugin<object>)[]
}

const GrapesjsReact = (
  {
    onInit,
    children,
    plugins = [],
    ...options
  }: PropsWithChildren<GrapesjsReactProps> & Parameters<typeof GrapesJS.init>[0]
) => {
  const [editor, setEditor] = useState<GrapesJS.Editor>();
  const isEditorSet = useRef(false);
  const [device, setDevice] = useState('Desktop');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isStyleTabOpen, setIsStyleTabOpen] = useState(false);

  useEffect(() => {
    // const selector = `#${id}`;
    if (!isEditorSet.current) {
      const editor = GrapesJS.init({
        ...baseConfig(plugins),
      });
      setEditor(editor);
      isEditorSet.current = true;

      editor.Commands.add('set-device-desktop', {
        run: editor => editor.setDevice('Desktop')
      });
      editor.Commands.add('set-device-tablet', {
        run: editor => editor.setDevice('Tablet')
      });
      editor.Commands.add('set-device-mobile', {
        run: editor => editor.setDevice('Mobile')
      });

      editor.on('change:device' as GrapesJS.GrapesEvent, () => {
        setDevice(editor.getDevice())
      });

      editor.RichTextEditor.remove('wrap');

      editor.RichTextEditor.add('fontSize', {
        name: 'wrap',
        icon: `<svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
            </svg>`,
        attributes: { title: 'Wrap for style' },
        result: () => {
          setIsStyleTabOpen(true)
        },
      })

      editor.on('component:selected', (component) => {
        const commandToAdd = 'set-style';
        const commandIcon = 'fa fa-paint-brush';
    
        const defaultToolbar = component.get('toolbar');
    
        const commandExists = defaultToolbar.some(item => item.name === commandToAdd);
    
        if (!commandExists) {
          component.set({
            toolbar: [ 
              ...defaultToolbar, 
              {  
                attributes: {
                  class: commandIcon
                }, 
                name: commandToAdd,
                command: () => {
                  setIsStyleTabOpen(true)
                } 
              }
            ]
          });
        }
    
      });

      if (typeof onInit === 'function') {
        onInit(editor);
      }
    }
  }, [children, editor, onInit, options]);

  return (
  <div className="app-wrapper">
    <div className="app-main">
      <GoogleIconPicker editor={editor} />

      <div className={`app-content app-content-aside ${isFullScreen ? 'hide-sidebar' : ''}`} id="editor-area">
        <EditorTools
          editor={editor}
          device={device}
          setIsFullScreen={setIsFullScreen}
          styleTabState={[isStyleTabOpen, setIsStyleTabOpen]}
        />

        <div id="gjs">
          {children}
        </div>

      </div>
    </div>
  </div>

  );
}

export default GrapesjsReact;

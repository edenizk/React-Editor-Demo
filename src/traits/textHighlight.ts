interface TypeEvent {
  on: (event: string, functions: () => void) => void;
  getTrait: (value: string) => {
    getValue: () => string
  };
  model: {
    getTrait: (value: string) => {
      getValue: () => string;
    };
  };
}

export const textHighlight = (editor) => {
  const comps = editor.DomComponents;
  const defaultType = comps.getType('text');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  editor.DomComponents.addType('textHighlight', {
    ...(defaultType || []),
    model: {
      ...(defaultModel || []),
      defaults: {
        ...(defaultModel.default || []),
        stylable: true,
        resizable: true,
        editable: true,
        draggable: '.country__list',
        droppable: false,
        highlightColor: '#ac99b4',
        traits: [
          {
            type: 'color',
            label: 'Highlight Color',
            name: 'highlightColor',
            changeProp: 1,
          },
        ],
      },
      handleColorChange() {
        const getColorTrait =  (this as TypeEvent).getTrait('highlightColor');
        const getColor = getColorTrait.getValue();

        editor.Css.setRule(':root', { '--highlight-text-color': getColor });
      },
      init() {

        (this as TypeEvent).on('change:highlightColor', this.handleColorChange);
      },
    },
    view: defaultView.extend({
      onRender() {
        const getColorTrait =  (this as TypeEvent).model.getTrait('highlightColor');
        const getColor = getColorTrait.getValue();

        editor.Css.setRule(':root', { '--highlight-text-color': getColor });
      }
    })
  });
};

export default textHighlight;

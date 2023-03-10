export const iconPickerPopup = (editor) => {
  editor.DomComponents.addType('iconPicker', {
    view: {
      events: {
        click: 'onActive',
      },
      onActive() {
        const modal = document.getElementById('googleIconPicker');

        if (modal !== null) {
          modal.classList.add('active');
        }
      },
    },
  });
};

export default iconPickerPopup;

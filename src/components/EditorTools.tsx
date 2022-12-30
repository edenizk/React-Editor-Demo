import React, { useState, useEffect } from 'react'

const EditorTools = ({editor, device, isFullScreen, setIsFullScreen, styleTabState}) => {
  const [isStyleTabOpen, setIsStyleTabOpen] = styleTabState;
  const [isSideBarInnerActive2, setIsSideBarInnerActive2] = useState(false);
  const [isBorderActive, setIsBorderActive] = useState(false);

  useEffect(() => {
    if (!editor) return;

    if (!isBorderActive) {
      editor.Commands.stop('sw-visibility');
    } else {
      editor.Commands.run('sw-visibility');
    }
  }, [isBorderActive])

  const exportPDF = () => {

  }
  

  // if (!editor) return <></>

  return (
    <>
      <a className="nav-link floating-button" id="editor-fullscreen" href="#" onClick={() => setIsFullScreen(false)}>
        <i className="fa fa-compress"></i>
        {' '}Exit
      </a>
      <div className="app-content--sidebar app-content--sidebar__sm" id="sidebar-inner-1">
          
          <div className="app-content--sidebar__header py-3 text-center gjs-pn-buttons">
            <button 
              type="button" 
              className={`btn btn-sm btn-link device-type ${device === 'Desktop' ? 'bg-neutral-first' : ''}`}
              id="desktop-view"
              onClick={() => {editor.Commands.run('set-device-desktop');}}
            >
              <span className="btn-wrapper--icon">
                <i className="fa fa-desktop"></i>
              </span>
            </button>

            <button 
              type="button" 
              className={`btn btn-sm btn-link device-type ${device === 'Tablet' ? 'bg-neutral-first' : ''}`}
              id="tablet-view"
              onClick={() => {editor.Commands.run('set-device-tablet');}}
            >
              <span className="btn-wrapper--icon">
                <i className="fa fa-tablet"></i>
              </span>
            </button>

            <button 
              type="button" 
              className={`btn btn-sm btn-link device-type ${device === 'Mobile' ? 'bg-neutral-first' : ''}`}
              id="mobile-view"
              onClick={() => {editor.Commands.run('set-device-mobile');}}
            >
              <span className="btn-wrapper--icon">
                <i className="fa fa-mobile"></i>
              </span>
            </button>
          </div>
          <div className="app-content--sidebar__header py-3 text-center gjs-pn-buttons">
            <button type="button" className="btn btn-link btn-sm" id="editor-undo" onClick={() => {editor.Commands.run('core:undo');}}>
              <span className="btn-wrapper--icon">
                <i className="fa fa-undo"></i>
              </span>
            </button>

            <button type="button" className="btn btn-link btn-sm" id="editor-styles" style={{display: "block"}} onClick={() => {setIsStyleTabOpen(true)}}>
              <span className="btn-wrapper--icon">
                <i className="fa fa-sliders"></i>
              </span>
            </button>

            <button type="button" className="btn btn-sm btn-link" id="editor-redo" onClick={() => {editor.Commands.run('core:redo');}}>
              <span className="btn-wrapper--icon">
                <i className="fa fa-repeat"></i>
              </span>
            </button>
          </div>
          <div className="app-content--sidebar__content scrollbar-container ps ps--active-y" style={{flexGrow: 1}}>
            <ul className="nav nav-pills nav-pills-hover flex-column">
              <li className="nav-header">
                <i className="fa fa-cogs"></i>
                {' '}Settings
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${isBorderActive ? 'active' : ''}`} 
                  id="sw-visibility" 
                  href="#" 
                  onClick={() => {setIsBorderActive(!isBorderActive)}}
                >
                  <i className="fa fa-square"></i>
                  {' '}Show borders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="editor-fullscreen" href="#" onClick={() => setIsFullScreen(true)}>
                  <i className="fa fa-expand"></i>
                  {' '}Fullscreen
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  data-toggle="modal" 
                  id="export" 
                  data-target="#editor-export" 
                  href="#" 
                  onClick={() => {editor.Commands.run('gjs-export-zip')}}
                >
                  <i className="fa fa-code"></i>
                  {' '}Export HTML
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  data-toggle="modal" 
                  id="import" 
                  data-target="#editor-import" 
                  href="#"
                  onClick={() => {exportPDF()}}
                >
                  <i className="fa fa-file"></i>
                  {' '}Export PDF
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" id="canvas-clear" href="#" onClick={() => {editor.Commands.run('core:canvas-clear');}}>
                  <i className="fa fa-trash"></i>
                  {' '}Clear canvas
                </a>
              </li>
            </ul>
            <div className="nav-header">
              <i className="fa fa-bars"></i>
              <span>{' '}Layers</span>
            </div>

            <div className="py-2 layers-container"></div>

            <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
              <div className="ps__thumb-x" tabIndex={0} style={{left: "0px", width: "0px"}}></div>
            </div>
            <div className="ps__rail-y" style={{top: "0px", height: "396px", right: "0px"}}>
              <div className="ps__thumb-y" tabIndex={0} style={{top: "0px", height: "322px"}}></div>
            </div>
          </div>
          <div className="app-content--sidebar__footer">
            <button 
              type="button" 
              className="btn btn-block btn-success btn-sm" 
              id="editor-add"
              onClick={() => {setIsSideBarInnerActive2(true)}}
            >
              <span className="btn-wrapper--icon">
                <i className="fa fa-plus"></i>
                {' '}Add
              </span>
            </button>
            <button type="button" className="btn btn-block btn-info btn-sm" id="editor-preview" onClick={() => setIsFullScreen(true)}>
              <span className="btn-wrapper--icon">
                <i className="fa fa-eye"></i>
                {' '}Preview
              </span>
            </button>
          </div>
        </div>
        <div className={`app-content--sidebar ${isSideBarInnerActive2 ? 'visible' : ''}`} id="sidebar-inner-2">
          <div className="app-content--sidebar__content scrollbar-container" id="blocks-mgr">

          </div>
          <div className="app-content--sidebar__footer">
            <button type="button" className="btn btn-block btn-dark btn-sm" id='editor-close-bm' onClick={() => {setIsSideBarInnerActive2(false)}}>
              <span className="btn-wrapper--icon">
                <i className="fa fa-times"></i>
                {' '}Close
              </span>
            </button>
          </div>
        </div>
        <div className={`app-content--sidebar ${isStyleTabOpen ? 'visible' : ''}`} id="sidebar-inner-3">
          <div className="app-content--sidebar__content scrollbar-container" id="styles-or-traits-mgr">
            <div id="traits-mgr">

            </div>
            <div id="styles-mgr">

            </div>
          </div>
          <div className="app-content--sidebar__footer">
            <button type="button" className="btn btn-block btn-dark btn-sm" id='editor-close-stmgr' onClick={() => {setIsStyleTabOpen(false)}}>
              <span className="btn-wrapper--icon">
                <i className="fa fa-times"></i>
                {' '}Close
              </span>
            </button>
          </div>
        </div>
    </>
  )
}

export default EditorTools

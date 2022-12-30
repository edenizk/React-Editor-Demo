import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageContext } from '@providers/page/pageContext';

const PageList = () => {
  const {state, dispatch} = usePageContext();

  const addNewPage = (e) => {
    e.preventDefault();

    const form = e.target;
    const formFields = form.elements;

    const pageName = formFields.pageName;

    dispatch({type: 'addNewPage', payload: {id: state.pages.length, name: pageName.value}})
    // setPages(() => [...pages, {id: pages.length, name: pageName.value}])
  }

  if (!state.pages) return <></>

  return (
    <div>
      <form onSubmit={addNewPage}>
        <input placeholder="page name" name="pageName" type="text" />
        <button>Add</button>
      </form>
      <ul>
        {state.pages.map(page => (
          <li key={page.id}>
            <Link to={`/page/${page.id}`}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PageList

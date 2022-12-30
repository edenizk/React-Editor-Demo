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
      <ul className="d-flex flex-wrap">
        {state.pages.map(page => (
          <li 
            key={page.id}
            className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Link to={`/page/${page.id}`}>
              <div>
                <img className="rounded-t-lg object-cover w-full" src="https://placekitten.com/g/200/254" style={{'height': '200px'}} height="200" width="254" alt="" />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{page.name}</h5>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Edit Page
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PageList

import React from 'react'
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
    form.reset();
  }

  if (!state.pages) return <></>

  return (
    <div className="container mx-auto px-2 mt-2">
      <form onSubmit={addNewPage}>   
        <label htmlFor="pageName" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add Page</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#3c44b1] text-xl">
            <i className="fa fa-plus"></i>
          </div>
          <input 
            type="pageName" 
            id="pageName" 
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow-md " 
            placeholder="Page Name" 
            required
          />
          <button 
            type="submit" 
            className="text-white absolute right-2.5 bottom-2.5 bg-[#3c44b1] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Add Page
          </button>
        </div>
      </form>
      {/* <form onSubmit={addNewPage}>
        <input placeholder="page name" name="pageName" type="text" />
        <button>Add</button>
      </form> */}
      <ul className="grid flex-wrap gap-4 mt-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {state.pages.map(page => (
          <li 
            key={page.id}
            className="bg-white rounded-lg shadow-md min-w-[19rem]"
          >
            <Link className="h-full flex flex-col" to={`/page/${page.id}`}>
              <div>

                <img className="rounded-t-lg object-cover w-full" src="https://placekitten.com/g/314/200" style={{'height': '200px'}} height="200" width="254" alt="" />
              </div>
              <div className="p-5 grow flex flex-col">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#3c44b1]">{page.name}</h5>
                <div className="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3c44b1] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    Edit Page
                    <i className="fa fa-arrow-right pl-2 ml-auto"></i>
                    {/* <svg aria-hidden="true" className="w-4 h-4 pl-2 ml-auto -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
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

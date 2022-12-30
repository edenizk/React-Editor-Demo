import React, { useReducer } from 'react'
import PageContext from '@providers/page/pageContext'
import pageReducer, { initialPages } from '@providers/page/pageReducer'

const PageProvider = ({children}) => {
  const [state, dispatch] = useReducer(pageReducer, initialPages);

  return (
  <PageContext.Provider
    value={{
      state,
      dispatch
    }}
  >
    {children}
  </PageContext.Provider>
  )
}

export default PageProvider

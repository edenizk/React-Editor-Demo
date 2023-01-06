import { createContext, Dispatch, useContext } from 'react'
import type { ActionType, StateType } from '@providers/page/pageReducer';

// type PageContextType = { state: any; dispatch: Dispatch<any>; } | undefined

interface PageContextType {
  state: StateType; 
  dispatch: Dispatch<ActionType>;
}

const PageContext = createContext<PageContextType>({} as PageContextType);

export const usePageContext = () => {
  return useContext(PageContext);
}

export default PageContext;

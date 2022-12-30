export const initialPages: StateType = {
  pages: [
    {
      id: 0, 
      name: 'demo' 
    }
  ],
};

interface PageType {
  id: number;
  name: string;
}

export interface StateType {
  pages: PageType[]
}

export interface ActionType {
  type: 'addNewPage',
  payload: PageType
}

const pageReducer = (state: StateType, action: ActionType) => {
  console.log('state', state, 'action', action);
  switch (action.type) {
    case "addNewPage":
      return {
        ...state, 
        pages: [...state.pages, action.payload]
      };
    default:
      return state;
  }
};

export default pageReducer;

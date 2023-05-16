const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: null,
    postsFiltered: [],
    postSelected: null
    
}

export const postsReducer = (state = INITIAL_STATE, action) => {

switch (action.type){
case "LOADING":

return {...state, loading: true}

case "GET_POSTS":
    return {...state, loading: false, posts: [...action.contenido] }

case "ERROR":
    return {...state, loading: false, posts: [], error: action.contenido }

case "SELECT_POST":
     return {...state,  postSelected: {...action.contenido}  }

 case "DELETE":
     return {...state, posts: [...action.contenido], postsFiltered: [...action.contenido] }

     case "CREATE_POST":
        return {...state, loading: false, posts: [...state.posts, action.contenido] }



default: return state

}
}

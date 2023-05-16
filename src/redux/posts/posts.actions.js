import store from "../store.js";

const {dispatch} = store;

const getPosts = async () => {

    dispatch({type: "LOADING"})

try {
const result = await fetch("https://jsonplaceholder.typicode.com/posts");
const res = await result.json();

dispatch ({type: "GET_POSTS", contenido: res})

} catch (error) {
    dispatch ({type: "ERROR", contenido: "ERROR DE PETICION"})
}

}

const selectPost = (post) => {

    dispatch ({type: "SELECT_POST", contenido: post})

}

const deletePost = (posts, postToDelete) => {
 
 const nuevosPosts = posts.filter((post) => post !== postToDelete)
 dispatch({type: "DELETE", contenido: nuevosPosts})


}

const createPost = (datosformulario) => {  
    
dispatch ({ type: "CREATE_POST", contenido: datosformulario})
 }


export { getPosts, selectPost, deletePost, createPost }

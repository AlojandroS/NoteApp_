import { useEffect } from "react"
import "./Post.css"
import { deletePost, getPosts, selectPost } from "../../redux/posts/posts.actions"
import { useSelector } from "react-redux"

const Posts = () => {

  useEffect(() => {
    getPosts();
  }, [])

const {loading, posts} = useSelector((state) => state.posts)



return (
  <>
    <div className="posts">
      {posts.map((post) => {
        return (
          <div className="post" key={post.id} onClick = {() => selectPost(post)}>
          <img 
           className="basura"
            src ="/assets/icono-basura.png"
             onClick={() => deletePost(posts, post)}

             />
           <div className="post-title">
            <h2> {post.title}</h2>
            </div>
            <div className="post-body">
            <h3>Mensaje: {post.body}</h3>
            </div>
            <div className="idPost">
            <p>Usuarido ID:{post.userId}</p>
            <p>Nº Post{post.id}</p>
            </div>
          </div>
                  )
      })}
    </div>
  </>
)
}


export default Posts
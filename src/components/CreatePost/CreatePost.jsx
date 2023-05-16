import "./CreatePost.css"
import { useModal } from "../../customHooks/useModal"
import { useForm } from "react-hook-form"
import { createPost } from "../../redux/posts/posts.actions"
import { useState } from "react"

const CreatePost = () => {

  const {isOpen, onOpen, onClose } = useModal()
  const [postCreated, setPostCreated] = useState(false);

  const {register, handleSubmit, reset} = useForm()

  
  const onSubmit = (data) => {
    createPost(data)
    setPostCreated(true);
    reset()
    
}

const handleCreatePostClick = () => {
  setPostCreated(false);
  onOpen();
}

return (
  <>
    <button className="button-crear" onClick={handleCreatePostClick}>Crear post</button>
    <div className={isOpen ? "open" : "close"}>
      {!postCreated ? (
        <form onSubmit={handleSubmit(onSubmit)} className="create-post-form">
          <button className="button-close" onClick={onClose}>X</button>
          <input type="text" {...register("title")} placeholder="Título" />
          <textarea {...register("body")} placeholder="Cuerpo"></textarea>
          <button className="button-submit" type="submit">PUBLICAR</button>
        </form>
      ) : (
        
          <button className="button-crear" onClick={handleCreatePostClick}>Crear otro post</button>
        
      )}
    </div>
  </>
);
};

export default CreatePost;
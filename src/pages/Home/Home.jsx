import CreatePost from "../../components/CreatePost/CreatePost";
import Posts from "../../components/post/post";


const Home = () => {
  return (
    <>
      <div>
        <CreatePost/>
      </div>
      <div>
        <Posts/>
      </div>
    </>
  );
};

export default Home

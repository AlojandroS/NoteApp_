import CreatePost from "../../components/CreatePost/CreatePost";
import Posts from "../../components/Post/Post";


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

import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post/Post";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPosts, createPost } from "../../actions/posts";
import { CircularProgress } from "@material-ui/core";
import FlipMove from 'react-flip-move'

function Feed() {
  const dispatch = useDispatch();
  const { isLoading, posts } = useSelector((state) => state.posts);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const [postData, setPostData] = useState({
    name: "",
    description: "",
    message: "",
    photoUrl: "",
  });

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const sendPost = async (e) => {
    e.preventDefault();

    dispatch(createPost(postData, user.result.fullname, user.result.email));

    setPostData({ ...postData, message: "" });
  };

  if (!posts?.length && !isLoading) return "No posts";

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70b5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#7fc15e" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#e7a33e" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#f5987e"
          />
        </div>
      </div>
      { isLoading ? <CircularProgress size='8rem'/> :
        <FlipMove>
        {posts.map((post) => (
        <Post
          key={post._id}
          name={post.name}
          description={post.description}
          message={post.message}
          photoUrl={post.photoUrl}
        />
        )) }
      </FlipMove>
      }
    </div>
  );
}

export default Feed;

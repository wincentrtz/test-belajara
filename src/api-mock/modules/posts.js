import configs from "../../configs";

const { posts } = configs.urls;

const getPostData = {
  method: "GET",
  url: posts.getPosts,
  code: 200,
  message: "success",
  data: [
    {
      id: 1,
      name: "Post 1",
      userName: "User 1"
    },
    {
      id: 2,
      name: "Post 2",
      userName: "User 2"
    },
    {
      id: 3,
      name: "Post 3",
      userName: "User 3"
    },
    {
      id: 4,
      name: "Post 4",
      userName: "User 4"
    }
  ]
};

const getPostByIdData = {
  method: "GET",
  url: posts.getPostById(1),
  code: 200,
  message: "success",
  data: {
    id: 1,
    name: "Post 1",
    userName: "User 1"
  }
};

export default [getPostData, getPostByIdData];

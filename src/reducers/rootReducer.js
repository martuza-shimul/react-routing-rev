const initState = {
  posts: [
    {
      id: "1",
      title: "Matal is a womenizer",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: "2",
      title: "Samiul is a playboy",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: "3",
      title: "Kana is a dirty-playboy",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;

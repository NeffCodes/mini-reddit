const url = 'https://www.reddit.com';

export const fetchRedditPosts = async subreddit => {
  const endpoint = `${url}/${subreddit}.json`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data.children;
};

export const fetchSubredditAbout = async subreddit => {
  const endpoint = `${url}/${subreddit}/about.json`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data;
};

export const fetchPostComments = async permalink => {
  const endpoint = `${url}/${permalink}.json`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json[1].data.children.map(comment => comment.data);
};

export const fetchUserAvatar = async user => {
  const endpoint = `${url}/user/${user}/about.json`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data;
};

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

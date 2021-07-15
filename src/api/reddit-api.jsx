const url = 'https://www.reddit.com';

export const fetchRedditPosts = async (subreddit = 'hot') => {
  const endpoint = `${url}/${subreddit}.json`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data.children;
};

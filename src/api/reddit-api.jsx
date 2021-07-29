const url = 'https://www.reddit.com';

//Post Filter Feed Pull
export const fetchSubFilter = async (subreddit, filter) => {
  const endpoint =
    subreddit !== filter
      ? `${url}/${subreddit}${filter}.json`
      : `${url}/${filter}.json`;
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

//Search Pull
export const fetchSearchResult = async term => {
  const endpoint = `${url}/search.json?q=${term}`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data.children;
};

//Aside Pull
export const fetchAsideList = async () => {
  const endpoint = `${url}/subreddits.json`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data.children.map(sub => {
    return {
      name: sub.data.display_name,
      prefix_name: sub.data.display_name_prefixed,
      icon: sub.data.icon_img,
      id: sub.data.id,
      url: sub.data.url,
    };
  });
};

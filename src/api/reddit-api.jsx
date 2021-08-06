const url = 'https://www.reddit.com';

//Used to clean/limit data provided from api
const cleanData = arr => {
  return arr.map(sub => {
    const mediaBool =
      sub.data.post_hint === 'image' ||
      sub.data.is_video ||
      sub.data.post_hint === 'rich:video';

    return {
      name: sub.data.subreddit,
      prefix_name: sub.data.subreddit_name_prefixed,
      icon: sub.data.icon_img,
      id: sub.data.id,
      url: sub.data.url,
      url_overridden_by_dest: sub.data.url_overridden_by_dest,
      permalink: sub.data.permalink,
      time: sub.data.created_utc,
      author: sub.data.author,
      comment_count: sub.data.num_comments,
      nsfw: sub.data.over_18,
      spoiler: sub.data.spoiler,
      title: sub.data.title,
      body: sub.data.selftext,
      domain: sub.data.domain,
      hasMedia: mediaBool,
      post_hint: sub.data.post_hint,
      image: sub.data.url_overridden_by_dest,
      is_video: sub.data.is_video,
      media: sub.data.media,
      thumbnail: sub.data.thumbnail,
    };
  });
};

//Post Filter Feed Pull
export const fetchSubFilter = async (subreddit, filter) => {
  const endpoint =
    subreddit !== filter
      ? `${url}/${subreddit}${filter}.json?limit=100`
      : `${url}/${filter}.json?limit=100`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return cleanData(json.data.children);
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
  return cleanData(json.data.children);
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

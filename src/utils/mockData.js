export const mockPostData = [
  {
    subreddit: 'ExampleSubreddit',
    subreddit_name_prefixed: 'r/ExampleSubreddit',
    title: 'Example title',
    timeStamp: 2,
    author: 'Example Author',
    thumbnail: 'https://via.placeholder.com/96',
    num_comments: 251,
  },
  {
    subreddit: 'AnotherSubreddit',
    subreddit_name_prefixed: 'r/AnotherSubreddit',
    title: 'Another title',
    timeStamp: 5,
    author: 'Another Author',
    thumbnail: 'https://via.placeholder.com/96',
    num_comments: 23,
  },
];

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function delayedMockPostData() {
  await timeout(3000);
  return mockPostData;
}

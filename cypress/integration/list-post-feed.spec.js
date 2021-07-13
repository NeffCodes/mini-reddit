describe('Post Feed', () => {
  it('shows posts from the server', () => {
    const post1 = {
      subreddit: 'ExampleSubreddit',
      subreddit_name_prefixed: 'r/ExampleSubreddit',
      title: 'Example title',
      timeStamp: 2,
      author: 'Example Author',
      thumbnail: 'https://via.placeholder.com/96',
      num_comments: 251,
    };
    const post2 = {
      subreddit: 'AnotherSubreddit',
      subreddit_name_prefixed: 'r/AnotherSubreddit',
      title: 'Another title',
      timeStamp: 5,
      author: 'Another Author',
      thumbnail: 'https://via.placeholder.com/96',
      num_comments: 113,
    };

    cy.server({ force404: true });

    cy.route({
      method: 'GET',
      url: '/',
      response: [
        { id: 1, name: post1 },
        { id: 2, name: post2 },
      ],
    });

    cy.visit('/');
    cy.contains(post1.subreddit);
    cy.contains(post2.subreddit);
  });
});

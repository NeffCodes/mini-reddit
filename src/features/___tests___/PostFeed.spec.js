import { render } from '@testing-library/react';
import { PostFeed } from '../Post/PostFeed';

import { mockPostData } from '../../utils/mockData';

describe('Post Feed', () => {
  const posts = mockPostData;
  let loadPosts;
  let context;

  beforeEach(() => {
    loadPosts = jest.fn().mockName('loadPosts');
    context = render(<PostFeed posts={posts} loadPosts={loadPosts} />);
  });

  it('loads posts on first render', () => {
    expect(loadPosts).toHaveBeenCalled();
  });
  it('displays the posts', () => {
    const { queryByTestId } = context;
    expect(queryByTestId('ExampleSubreddit')).not.toBeNull();
    expect(queryByTestId('AnotherSubreddit')).not.toBeNull();
  });
});

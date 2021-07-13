import { render } from '@testing-library/react';
import { PostFeed } from '../Post/PostFeed';

describe('Post Feed', () => {
  it('loads posts on first render', () => {
    const loadPosts = jest.fn().mockName('loadPosts');

    render(<PostFeed loadPosts={loadPosts} />);

    expect(loadPosts).toHaveBeenCalled();
  });
});

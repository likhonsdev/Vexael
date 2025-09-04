const { createGist } = require('../src/integrations/githubGist');

describe('Integration Tests', () => {
  test('createGist should return a URL', async () => {
    const url = await createGist({}, 'test gist');
    expect(url).toContain('https://gist.github.com/');
  });
});

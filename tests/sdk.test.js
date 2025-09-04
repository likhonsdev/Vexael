const { generateText } = require('../src/sdk/vercelAI');

describe('SDK Tests', () => {
  test('generateText should return a string', async () => {
    const result = await generateText('test');
    expect(typeof result).toBe('string');
  });
});

const CoreAgent = require('../src/agents/coreAgent');

describe('Agent Tests', () => {
  test('CoreAgent should be instantiable', () => {
    const agent = new CoreAgent();
    expect(agent).toBeInstanceOf(CoreAgent);
  });
});

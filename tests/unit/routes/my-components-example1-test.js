import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | myComponentsExample1', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:my-components-example1');
    assert.ok(route);
  });
});

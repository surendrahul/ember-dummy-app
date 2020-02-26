import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | programers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:programers');
    assert.ok(route);
  });
});

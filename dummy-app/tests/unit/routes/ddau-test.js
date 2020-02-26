import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ddau', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ddau');
    assert.ok(route);
  });
});

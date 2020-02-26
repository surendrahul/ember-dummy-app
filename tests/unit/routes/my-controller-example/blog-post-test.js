import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | myControllerExample/blogPost', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:my-controller-example/blog-post');
    assert.ok(route);
  });
});

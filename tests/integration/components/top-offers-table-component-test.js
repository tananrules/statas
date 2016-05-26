import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('top-offers-table-component', 'Integration | Component | top offers table component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{top-offers-table-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#top-offers-table-component}}
      template block text
    {{/top-offers-table-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

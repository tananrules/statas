import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('campaigns-table-component', 'Integration | Component | campaigns table component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{campaigns-table-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#campaigns-table-component}}
      template block text
    {{/campaigns-table-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

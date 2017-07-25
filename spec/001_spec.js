describe('Jasmine tests with Jasmine-jQuery', () => {
  it('shoud allow to use jQuery', () => {
    setFixtures('<div id="fixture" class="fixture-class">fixture content</div>');
    expect($('#fixture')).toHaveText('fixture content');
    expect(jQuery('#fixture')).toHaveClass('fixture-class');
  });
});

'use strict';

jasmine.getFixtures().fixturesPath = "base/test/fixtures";

describe('test test', function () {
  var $fj;
  loadFixtures('template.html');

  // HACK (marcus): the following line of code is needed to mock search query params with phantom js
  // http://stackoverflow.com/questions/2494213/changing-window-location-without-triggering-refresh
  window.history.replaceState( {}, '', 'http://localhost:8080/context.html?type=Water');

  it('should filter Water items', function () {
    $fj = $('[data-filterable]').filterjitsu();
    expect($('[data-count]').text()).toBe('3 items');
  });
});

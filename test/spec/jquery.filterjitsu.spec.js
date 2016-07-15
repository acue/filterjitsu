'use strict';

jasmine.getFixtures().fixturesPath = "base/test/fixtures";

describe('test test', function () {
  var $fj;

  beforeEach(function () {
    loadFixtures('template.html');

    // HACK (marcus): the following line of code is needed to mock search query params with phantom js
    // http://stackoverflow.com/questions/2494213/changing-window-location-without-triggering-refresh
    window.history.replaceState( {}, '', 'http://localhost:8080/context.html?type=Water');

    $fj = $('[data-filterable]').filterjitsu();
  });

  it('should filter down to 3 items', function () {
    expect($('[data-count]')).toHaveText('3 items');
  });

  it('should show water items', function () {
    expect($('[data-filterable][data-type="Water"]')).toBeVisible();
  });

  it('should hide land items', function () {
    expect($('[data-filterable][data-type!="Water"]')).toBeHidden();
  });
});

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
  /**
   * Extract search queries from url
   * @return {Array} list of strings of search queries
   */
  function searchQueries () {
    return window.location.search.replace('?', '').split('&');
  }

  /**
   * Extract parameters from search queries list
   * @return {Object} Search keys with values
   */
  function parameters () {
    var results = {};

    $.each(searchQueries(), function (_index, query) {
      var splitQuery = query.split('=');

      if (splitQuery.length === 2) {
        results[splitQuery[0]] = splitQuery[1]
      }
    });

    return results;
  }

  /**
   * Hide rows that do not match the desired data field
   * @param  {Object} $filterjitsuEl - main jQuery object this plugin is called on
   * @param  {Object} params   - search query parameters from `parameters()`
   */
  function hideUnmatchedRows ($filterjitsuEl, params) {
    var key;

    for (key in params) {
      if (params.hasOwnProperty(key) && params[key] !== 'Video') {
        // filter the elements that match `$('tbody tr')` by the
        // `'[data-' + key + '!=' + params[key] + ']'` selector and hide the resulting rows
        $filterjitsuEl
          .filter('[data-' + key + '][data-' + key + '!=' + params[key] + ']')
          .hide();
      }
    }
  }

  /**
   * Update the count of visible rows
   */
  function updateCount () {
    var videoText,
        count = $('tbody tr:visible').length; // todo (marcus) need new count mechanism

    videoText = (count === 1) ? 'video' : 'videos';

    $('#count').text(count + ' ' + videoText);
  }

  /**
   * Build bootstrap style alert with category type string
   * @param  {String} categoryType
   * @param  {String} pathname
   * @return {String} valid bootrap html for an alert
   */
  function buildHtmlAlert(categoryType, pathname) {
    return (
      '<div id="info" class="alert alert-info text-center col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">' +
      '  You are viewing only ' + categoryType + '. <a href="' + pathname + '">View all videos.</a>' +
      '</div>'
    );
  }

  /**
   * Replace or append an alert to the view
   * @param  {Object} params - search query parameters from `parameters()`
   */
  function replaceOrAppendAlert (params) {
    var html,
        categoryType = [],
        categories = {};

    if (typeof params['type'] !== 'undefined' && params['type'] !== 'Video') {
      if (typeof params['category'] !== 'undefined') {
        categoryType.push(categories[params['category']]);
      }

      categoryType.push(params['type'].replace('Video', ' videos'));
      html = buildHtmlAlert(categoryType.join(' '), window.location.pathname);

      if ($('#info').length > 0) {
        $('#info').replaceWith(html);
      } else {
        $('.breadcrumb').after(html);
      }
    }
  }

  /**
   * filterjitsue plugin definition
   * @param  {Object} options - options to be passed into the jQuery plugin
   */
  $.fn.filterjitsu = function (options) {
    var defaults = {},
        opts = $.extend({}, defaults, options),
        params = parameters(),
        $this = this;

    function init() {
      hideUnmatchedRows($this, params);
      updateCount();
      replaceOrAppendAlert(params);
    }

    init();
  }
}));

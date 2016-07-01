(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
  /**
   * filterjitsue plugin definition
   * @param  {Object} options - options to be passed into the jQuery plugin
   */
  $.fn.filterjitsu = function(options) {
    var defaults = {},
        opts = $.extend({}, defaults, options),
        $this = this;

    function init() {
      console.log('initializing');
    }

    init();
  }
}));

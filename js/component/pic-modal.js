define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(picModal);

  /**
   * Module function
   */

  function picModal() {
    this.defaultAttrs({

    });

    this.show = function(e) {
      var targ = $(e.relatedTarget);
      this.$node.find('.pic').attr('src', targ.attr('src'));
      var title = targ.attr('title');
      if(!title || title.length === 0) {
        title = '&nbsp;';
      }
      this.$node.find('.modal-title').html(title);
    };

    this.after('initialize', function () {
      this.on('show.bs.modal', this.show);
    });
  }

});

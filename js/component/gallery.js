define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');


  /**
   * Module exports
   */

  return defineComponent(gallery);

  /**
   * Module function
   */

  function gallery() {
    var picNodes = [];

    this.defaultAttrs({

    });

    this.createPics = function(e, data) {
      var picList = this.attr.pics;
      picList.empty();
      picNodes = [];
      $.each(data.data, function(idx, pic){
        var p = $('<li><img data-toggle="modal" data-target=".my-pic-modal" title="'+pic.title+'" src="'+pic.src+'"/></li>').appendTo(picList);
        picNodes.push(p);
      });
    }

    this.after('initialize', function () {
      var $node = this.$node;
      $node.append('<h1>Our Germany Trip 2014</h1>');
      this.attr.pics = $('<ul class="pics"></ul>').appendTo($node);
      this.on(document, 'picsData', this.createPics);
      this.trigger('getPicsData');
    });
  }

});

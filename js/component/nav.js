define(function (require) {


  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(nav);

  /**
   * Module function
   */

  function nav() {
    var cityNodes = [];

    this.defaultAttrs({

    });

    this.filterPics = function(e) {
      this.$node.find('li.active').removeClass('active');
      var targ = $(e.target);
      targ.closest('li').addClass('active');
      this.trigger('getPicsData', {city: targ.data('city')});
    };

    this.createNav = function(e, data) {
      var $node = this.$node;
      var that = this;
      $node.append('<p class="navbar-text">Cities</p>');
      $node.append('<ul class="nav navbar-nav"></ul>');
      var cityList = $node.find('.navbar-nav');
      
      var li = $('<li class="active"></li>').appendTo(cityList);
      var c = $('<a href="#">All</a>').appendTo(li);
      that.on(c, 'click', that.filterPics);

      $.each(data.data, function(idx, city){
        var name = city[0].city;
        li = $('<li></li>').appendTo(cityList);
        c = $('<a href="#" data-city="'+name+'">'+name+' ('+city.length+')</a>').appendTo(li);
        that.on(c, 'click', that.filterPics);
        cityNodes.push(c);
      });
    }

    this.after('initialize', function () {
      this.on(document, 'citiesData', this.createNav);
      this.trigger('getCitiesData');
    });
  }

});

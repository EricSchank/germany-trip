define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(data);

  /**
   * Module function
   */

  function data() {
    var cities = {};
    var pics = [];

    this.defaultAttrs({

    });

    this.pics = function (e, d) {
      var res = pics;
      if(d && d.city) {
        res = cities[d.city];
      }
      this.trigger('picsData', {type: 'pic', data: res});
    };

    this.cities = function () {
      this.trigger('citiesData', {type: 'city', data: cities});
    };

    this.addPic = function(pic) {
      pics.push(pic);
      var c = cities[pic.city];
      if(!c) {
        c = [];
        cities[pic.city] = c;
      }
      c.push(pic);
    };

    this.loadData = function () {
      this.addPic({
        title: '',
        src: 'https://lh6.googleusercontent.com/-dC0ODBvTJLY/UxzYJ6N8dbI/AAAAAAAABjM/trxgRyL3I90/w968-h1296-no/IMG_2175.jpg',
        city: 'Hannover'
      });

      this.addPic({
        title: '',
        src: 'https://lh5.googleusercontent.com/-TL33iEn8nko/UyYn4N_PU-I/AAAAAAAAB6A/b9MbJ38iurk/w1944-h1296-no/IMG_8320.JPG',
        city: 'Hannover'
      });

      this.addPic({
        title: 'City Hall',
        src: 'https://lh6.googleusercontent.com/-e_UGTZWfe2s/Uyi4MDE8m2I/AAAAAAAAC6o/y_gfoiGPxNU/w514-h772-no/IMG_8553.jpg',
        city: 'Augsburg'
      });

      this.addPic({
        title: 'My House',
        src: 'https://lh6.googleusercontent.com/-p3nt36EJThc/UyY4KgYmIHI/AAAAAAAACcA/Wlx8I01a1a0/w1030-h772-no/IMG_2476.JPG',
        city: 'Augsburg'
      });

      this.addPic({
        title: 'K in front of the Castle',
        src: 'https://lh3.googleusercontent.com/-4jz38sneTuk/UysPCss6K2I/AAAAAAAADqw/WSUZJ0pKlR0/w1030-h772-no/IMG_2594.JPG',
        city: 'Neuschwanstein'
      });

    };

    this.after('initialize', function () {
      this.loadData();
      this.on(document, 'getCitiesData', this.cities);
      this.on(document, 'getPicsData', this.pics);
    });
  }

});

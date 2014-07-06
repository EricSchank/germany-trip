define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var Data = require('component/data');
  var Gallery = require('component/gallery');
  var Nav = require('component/nav');
  var PicModal = require('component/pic-modal');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    Data.attachTo(document);
    Nav.attachTo('.navbar .container');
    Gallery.attachTo('.gallery');
    PicModal.attachTo('.modal');
  }

});

import jQuery from 'jquery';

(function ($) {
  'use strict';

  $(document).ready(function () {
    console.log('jQuery loaded');

    $('#btn-toggle-jquery').on('click', function () {
      if ($('.card-body').hasClass('hidden')) {
        $('.card-body').removeClass('hidden');
      } else {
        $('.card-body').addClass('hidden');
      }
    });
  });
})(jQuery);

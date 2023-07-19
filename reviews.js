
(function($) {
$(function() {
  
  $('.formRadio.radio').on('click', '.radio:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div-reviewes').find('reviewes').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});
})(jQuery);

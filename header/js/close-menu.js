$(function() {
    $('#nav-content li a').on('click', function(event) {
      $('#nav-input').prop('checked', false);
    });
});
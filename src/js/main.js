$(function() {
  var cheatSheetTemplate = $('#csg-cheat-sheet-template').html();

  $.ajax({
    dataType: 'json',
    url: 'test.json',
    success: function(data) {
      $('.csg-container').html(_.template(cheatSheetTemplate)(data));
    }
  });
});
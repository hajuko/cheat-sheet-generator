$(function() {
  var cheatSheetTemplate = $('#csg-cheat-sheet-template').html();

  $.ajax({
    dataType: 'json',
    url: 'test.json',
    success: function(data) {
      $('.csg-cheat-sheet-container').html(_.template(cheatSheetTemplate)(data));
    }
  });
});
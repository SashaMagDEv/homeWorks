"use strict";

$(document).ready(function () {
  $('#addTask').click(function () {
    var textTask = $('#inputTask').val().trim();
    if (textTask !== '') {
      var $li = $('<li></li>').addClass('list-group-item bg-light rounded p-2 d-flex justify-content-between');
      var $span = $('<span></span>').text(textTask).css('cursor', 'pointer').click(function () {
        $('#modalTaskText').text($(this).text());
        var modal = new bootstrap.Modal(document.getElementById("taskModal"));
        modal.show();
      });
      var $btn = $('<button></button>').addClass('btn btn-danger btn-sm').text('Видалити').click(function () {
        $li.remove();
      });
      $li.append($span).append($btn);
      $('#listTask').append($li);
      $('#inputTask').val('');
    } else {
      alert('Введіть завдання!');
    }
  });
  $('#inputTask').keypress(function (e) {
    if (e.which === 13) {
      $('#addTask').click();
    }
  });
});

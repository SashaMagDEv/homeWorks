$(document).ready(function () {
    $('#addTask').click(function () {
        const textTask = $('#inputTask').val().trim();

        if (textTask !== '') {
            const $li = $('<li></li>')
                .addClass('list-group-item bg-light rounded p-2 d-flex justify-content-between')


            const $span = $('<span></span>')
                .text(textTask)
                .css('cursor', 'pointer')
                .click(function () {
                    $('#modalTaskText').text($(this).text());
                    const modal = new bootstrap.Modal(document.getElementById("taskModal"))
                    modal.show();
                })

            const $btn = $('<button></button>')
                .addClass('btn btn-danger btn-sm')
                .text('Видалити')
                .click(function () {
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

'use strict';

$('.txtb').on('keyup', function(e) {
    // 13 === "ENTER" button
    if (e.keyCode == 13 && $('.txtb').val() != '') {
        let task = $('<div class="task"></div>').text($('.txtb').val());
        let del = $('<i class="fas fa-trash-alt"></i>').click(function() {
            let parent = $(this).parent();
            parent.fadeOut(function() {
                parent.remove();
            })
        });
        let check = $('<i class="fas fa-check"></i>').click(function() {
            let parent = $(this).parent();
            parent.fadeOut(function() {
                $('.comp').append(parent);
                parent.fadeIn();
            });
            $(this).remove();
        });
        
        task.append(del, check);
        $('.notcomp').append(task);
        //to clear the input
        $('.txtb').val('');
    }
});
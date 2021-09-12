$('#selectUl li:not(":first")').addClass('unselected');
// Used to hide the 'unselected' elements in the ul.

$('#selectUl').hover(
    function(){
    // mouse-over
        $(this).find('li').click(
            function(){
                $('.unselected').removeClass('unselected');
                // removes the 'unselected' style

                $(this).siblings('li').addClass('unselected');
                // adds 'unselected' style to all other li elements

                var index = $(this).index();
                $('select option:selected').removeAttr('selected');
                // deselects the previously-chosen option in the select

                $('select[name=size]')
                    .find('option:eq(' + index + ')')
                    .attr('selected',true);
                // assumes a 1:1 relationship between the li and option elements
            });
    },
    function(){
    // mouseout (or mouseleave, if they're different, I can't remember).
    });

function alertABC(){
    alert("abc")
}
    $('.header').click(
        function(){
            alertABC();
        });
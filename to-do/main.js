$(document).ready(function(){
	// functions for adding items to the to-do list
	$("button, input[type='button']").click(function(){
		add();
	});
	$("#todo-form").submit(function(){
		add();
		return false;
	});
	$('#sortable').sortable();
	
	// functions for the save and clear controls
	var $ul = $('ul');
    $('#save').click( function(){
        localStorage.setItem('list', $ul.html());
        return false;
    });
    $('#clear').click( function(){
        localStorage.clear('list');
        location.reload();
    });
    if(localStorage.getItem('list')){
        $ul.html(localStorage.getItem('list'));
    };
    $("ul").on("click", "button", function(e) {
    	e.preventDefault();
    	$(this).parent().remove();
	});

    // function used for clear the input field
    function clearInput(){
    	$('input:text').val('');
    };
	$('input:text').focus(function(){
		clearInput();
	});

	// function used to add items to the to-do list
	function add(){
		var $input = $('form :input').val();
		if($input.length > 0){
			$('ul').append('<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>' + $input + '<button class="del">delete</button></li>');
			$('.sortable').sortable();	
			clearInput();
		} else {
			alert("Please enter something");
		};
	};
});
// ==================================================================
// FONCTIONS
// ==================================================================
function nbMessage() {
	return $('p').length - 2;
};

// LISTENER TRASH / CLICK
$(".trash").click(
	function() {
		$(this).parent().remove();
		$("#count").text(" " + $('p').length - 2);
	}
)

// LISTENER TRASH / CLICK
$("#btn_add").click(
	function() {
    $(".row").last().removeClass("last-row");
    $(".row").last().addClass("row");
    var msgHTML = "";
    msgHTML += '  <div class="row last-row">' + '\n'
    msgHTML += '    <img class="avatar" src="./avatar-1.jpg">' + '\n'
  	msgHTML += '    <div>' + '\n'
  	msgHTML += '      <h6>Thierry L.</h6>' + '\n'
  	msgHTML += '      <p>'+ $("#new_message").val() + '</p>' + '\n'
    msgHTML += '    </div>' + '\n'
    msgHTML += '    <img class="trash" src="./trash.png">' + '\n'
    msgHTML += '  </div>' + '\n'
    $("body").append(msgHTML);
		$("#count").text($('p').length - 2);
    $(".trash").click(
    	function() {
    		$(this).parent().remove();
    		$("#count").text(" " + $('p').length - 2);
    	}
    )
	}
)

// LISTENER TRASH / CLICK
$("#btn_search").click(
	function() {
    var v_criteria = $("#search_message").val();
    $(".row").show;
    if (v_criteria.length > 0) {
      $("h6").each(
        function () {
          // **console.log("OK on recherche");
          if ($(this).text() != v_criteria) {
            $(this).parent().parent().hide()
          }
        }
      )
    }
    else {
      // **console.log("NOP");
    }

    // **console.log("Search...", v_criteria);
		$("#count").text(" " + $('p').length - 2);
	}
)

// INITIALISATION
$("#count").text($('p').length - 2);

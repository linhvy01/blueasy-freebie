
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.element',
		  layoutMode: 'fitRows',
		  getSortData: {
		    // name: '.name',
		    // symbol: '.symbol',
		    // number: '.number parseInt',
		    // category: '[data-category]',
		    // weight: function( itemElem ) {
		    //   var weight = $( itemElem ).find('.weight').text();
		    //   return parseFloat( weight.replace( /[\(\)]/g, '') );
		    // }
		  }
		});

		// filter functions
		// var filterFns = {
		//   // show if number is greater than 50
		//   numberGreaterThan50: function() {
		//     var number = $(this).find('.number').text();
		//     return parseInt( number, 10 ) > 50;
		//   },
		//   // show if name ends with -ium
		//   ium: function() {
		//     var name = $(this).find('.name').text();
		//     return name.match( /ium$/ );
		//   }
		// };

		// bind filter button click
		$('#filters').on( 'click', 'a', function(e) {
		  e.preventDefault();
		  var filterValue = $( this ).attr('data-filter');
		  // use filterFn if matches value
		  // filterValue = filterFns[ filterValue ] || filterValue;
		  $grid.isotope({ filter: filterValue });
		});

		// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'a', function() {
		    $buttonGroup.find('.is-checked').removeClass('is-checked');
		    $( this ).addClass('is-checked');
		  });
		});


// Jquery

$(document).ready(function(){
  $('a.back').on('click', function() {
  	$('html,body').animate({scrollTop: 0}, 'slow');
  	return false;
  })


  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("header .navbar-default .navbar-nav>li>a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

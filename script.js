$(document).ready(function() {

    // ====================================================      Navbar       ===========================================================
    $(".navBar-toggler").on("click", function(e){
        e.preventDefault();
        $(".bar-inner").removeClass("animate-nav-close");
        $(".bar-inner").addClass("animate-nav");
        setTimeout(function() 
            {
                $("#navbarNav").removeClass("hidden");
                $(".collapse").css("display", "flex");
            }, 300
        );
    });

    $(".close-btn").on("click", function(e) {
        e.preventDefault();
        $("#navbarNav").addClass("hidden");
        setTimeout(
            function() 
            {
                $(".bar-inner").removeClass("animate-nav");
                $(".bar-inner").addClass("animate-nav-close");
            }, 10);
        
    });

    // ====================================================      Pagination       ===========================================================
    var total = $('.total').attr('data-total'),
        current = $('.current'),
        n = current.attr('data-current');

    $('.right-arrow').on('click', function(e){
        e.preventDefault();
        (n + 1 > total) ? ( n = 0 ) : n;
        n++;
        current.attr('data-current', n).html(n);
    });

    $('.left-arrow').on('click', function(e){
        e.preventDefault();
        (n - 1 < 1) ? (n=3) :  n;
        n--;
        current.attr('data-current', n).html(n);
    });

    $('.nextProject-box-link').on('click', function(e){
        e.preventDefault();
        (n + 1 > total) ? ( n = 0 ) : n;
        n++;
        current.attr('data-current', n).html(n);
    });


   

    $(".gallery-filter-item").on("click", function(e){
        e.preventDefault();
        $(".gallery-item").addClass("hidden");

        var filter = this.id;

        $(".gallery-item").each(function() {
            ( $(this).hasClass(filter)) ? 
                $(this).removeClass("hidden").css("display", "inline").css("float", "left")&&$(".gallery").css("display", "block")
            : $(this).addClass("hidden");
        });  
    });

    $(".all").on("click", function(e){
        e.preventDefault();
        $(".gallery").css("display", "flex");
        $(".gallery-item").removeClass("hidden");
        $(".gallery-item").css("display", "grid");
    });


    //  ==================================================       GoogleMap       ======================================================
    function myMap() {
        var uluru = {lat: 34.0623278, lng: -118.4282031};
        
        var map = new google.maps.Map(
            document.getElementById('googleMap'), {zoom: 15, center: uluru,
            });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
    };
    myMap();

    

})



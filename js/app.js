$(document).ready(() => {
    $("section").click(function (e) {
        let id = getParent(e.target);
        
        switch (id) {
            case "space":
                $("h1:first").text("Galería de imágenes de la NASA (Simple carousel)");

                $(".slider").html(`<div><img src='img/${id}/1200x675_cmsv2_814e5286-64d2-527c-b8cb-76c7e86412c1-7894368.webp'/></div><div><img src='img/${id}/nasa--5V6VZxSQRo-unsplash.jpg'/></div><div><img src='img/${id}/nasa-yZygONrUBe8-unsplash.jpg'/></div>`);   

                $('.slider').slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                });

                $("a").css("display", "block");

                break;
            
            case "nature":
                $("h1:first").text("Galería de imágenes de naturaleza (Center mode)");

                $(".slider").html(`<div><img src='img/${id}/Female_Woods_hike_732x549-thumbnail.avif'/></div><div><img src='img/${id}/marek-piwnicki-KoZnK1C2CgY-unsplash.jpg'/></div><div><img src='img/${id}/eberhard-grossgasteiger-PiUqyp65EWg-unsplash.jpg'/></div>`);   

                $('.slider').slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                });

                $("a").css("display", "block");
                
                break;
            
            case "tech":
                $("h1:first").text("Galería de imágenes de naturaleza (Autoplay)");

                $(".slider").html(`<div><img src='img/${id}/elon-musk-suggesting-the-cybertruck-is-bulletproof-is-reckless-and-nothing-new_49.jpg'/></div><div><img src='img/${id}/dell-1o5MZblCP50-unsplash.jpg'/></div><div><img src='img/${id}/sebastian-pandelache-NZDd8twmqk0-unsplash.jpg'/></div>`);   

                $('.slider').slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                });

                $("a").css("display", "block");

                break;
        }
    });
});

function getParent(element) {
    if ($(element).is("section")) {
        let id = $(element).attr("id");
        
        return id;
    } 

    return getParent($(element).parent());
}
let colorReverse = false;

$( document ).ready(function() {


    $('#btnOne').hover(function() {
        $("#descOne").fadeIn("slow");
    });
    $('#btnTwo').hover(function() {
        $("#descTwo").fadeIn("slow");
    });
    $('#btnThree').hover(function() {
        $("#descThree").fadeIn("slow");
    });
    $('#btnFour').hover(function() {
        $("#descFour").fadeIn("slow");
    });
    
    if ($('#promo_button').length) {

        document.getElementById("promo_button").addEventListener("click", function () {
            //alert('Khuyến mãi đeee !');

            var img = document.createElement("img");
            img.src = "/assets/img/scenery/pow.png";
            var src = document.getElementById("promoImage");

            if (colorReverse) {
                document.getElementById("titlePromo").setAttribute("style", "color:red;");
                //src.appendChild(img);
            } else {
                document.getElementById("titlePromo").setAttribute("style", "color:white;");
                //src.innerHTML = c;
            }
            colorReverse = !colorReverse;

        });
    }

    if ($('#list-service').length) {
        $( window ).scroll(function() {
            $('#list-service').append(`
            

            <div class="col-md-6 col-lg-4">
                <div class="card"><img class="card-img-top w-100 d-block" src="assets/img/scenery/beemo.jpg">
                    <div class="card-body">
                        <h4 class="card-title">Bán Thẻ Cà Rốt</h4>
                        <p class="card-text">Dịch vụ bán thẻ Cà Rốt tiện lợi, giá cả phải chăng nhất Việt Nam !</p>
                    </div>
                    <div><button class="btn btn-outline-primary btn-sm" type="button">Xem Chi Tiết</button></div>
                </div>
            </div>

            `);
        });
    }
});


var movielist = new Array();

movielist.push({imgSrc: 'images/thumbnails/phimhot-12angrymen.jpg', movieName: '12 Angry Men', movieNamevn: '12 Người Đàn Ông Giận Dữ'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-amadeus.jpg', movieName: 'Amadoeus', movieNamevn: 'Sự Đố Kỵ Của Thiên Tài'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-asgoodasitget.jpg', movieName: 'As Good as It Get', movieNamevn: 'Không Thể Tốt Hơn'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-downfall.jpg', movieName: 'Down Fall', movieNamevn: 'Ngày Tàn'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-enemyatthegates.jpg', movieName: 'Enemy at The Gate', movieNamevn: 'Quân Thù Trước Cửa'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-oneflewover.jpg', movieName: 'One Flew Over The Cuckoo Nest', movieNamevn: 'Bay Trên Tổ Chim Cúc Cu'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-pathofglory.jpg', movieName: 'Path of Glory', movieNamevn: 'Đường Đến Vinh Quang'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-princessbride.jpg', movieName: 'Princess Bride', movieNamevn: 'Cô Dâu Công Chúa'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-romanholiday.jpg', movieName: 'Roman Holiday', movieNamevn: 'Kỳ Nghỉ ở La Mã'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-schindlerlist.jpg', movieName: 'Schindlers list', movieNamevn: 'Danh sách Schindlers'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-thegirlwhokicked.jpg', movieName: 'The Girl Who Kicked The Hornets Nest', movieNamevn: 'Thiếu Nữ Báo Thù'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-thegraduate.jpg', movieName: 'The Graduate', movieNamevn: 'Sinh Viên Tốt Nghiệp'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-thegreatdictator.jpg', movieName: 'The Great Dictator', movieNamevn: 'Nhà Độc Tài Vĩ Đại'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-theshawshank.jpg', movieName: 'The Shawshank Redemption', movieNamevn: 'Nhà Tù Shawshank'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-titanic.jpg', movieName: 'Titanic', movieNamevn: 'Con Tàu Titanic'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-tokillamockingbird.jpg', movieName: 'To Kill a Mockingbird', movieNamevn: 'Giết Con Chim Nhại'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-touch_of_evil.jpg', movieName: 'Touch of Evil', movieNamevn: 'Ngọn Đuốc Của Quỷ'});
movielist.push({imgSrc: 'images/thumbnails/phimhot-whereeaglesdare.jpg', movieName: 'Where Eagles Dare', movieNamevn: 'Đột Kích Tổ Đại Bàng'});

function themDiv() {
    var htmlMovie = "";
    $.each (movielist, function(index, item) {
        var s = "<div class='col-md-3 col-sm-4 col-xs-6'>";
        s += "<div class='thumbnail'><a href='#'><img class='img-responsive' src='" + item.imgSrc + "'></a>";
        s += "<div class='caption'><a href='#'><p class='text-center'><strong>";
        s += item.movieName + "</strong></p></a>";
        s += "<a href='#'><p class='text-center'><small>";
        s += item.movieNamevn + "</small></p></a>";
        s += "</div></div></div>";
        htmlMovie += s;
    });
    $("#movie-list").html(htmlMovie);
}

var accountInfo = new Array();

accountInfo.push({accountID: 'admin', accountPW: '123'});

function checkLogin(u,p) {
    var success = false;
    $.each(accountInfo, function(index, item) {
        if(item.accountID === u && item.accountPW === p) {
            success = true;
            // break loop
            return false;
        }
    });

    return success;
}

function getCookie(username) {
    var name = username + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {

    $.each (accountInfo, function(index, item) {
        var i = getCookie("username");
        // console.log (i);
        if (i !== "admin") {
            event.preventDefault();
            swal({  title: "Tính Năng VIP",
                    text: "Bạn cần đăng nhập để truy cập nội dung này",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Đăng Nhập",
                    closeOnConfirm: false },
                function(){
                    window.location = "account.html";
                });
        }
        else {
            $('#vipOnly').unbind();
        }
    });
}




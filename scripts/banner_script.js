let banner_names = ["banner1.jpg", "banner2.jpg"]

let txt = "assets/images/"

let banner_pos = 0;

function changeBanner(){
    banner_pos = (banner_pos+1)%2;
    document.getElementById("banner_alternando").src = txt + banner_names[banner_pos];
}

setInterval(changeBanner, 2500);
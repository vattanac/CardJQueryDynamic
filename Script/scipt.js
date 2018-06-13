
$(document).ready(function(){

    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        for(var p in myObj.person){
            $(".row").append(card(myObj.person[p]));

        }

    }
};
xmlhttp.open("GET", "../json/perosn.json", true);
xmlhttp.send();

});


function card(person){
    var c = '<div class="col-md-3"><div class="card" style="width: 18rem;" >'+
    '<div class="card-img-top img-card" style="background-image: url('+person.img+');" alt="Card image cap"></div>'+
    '<div class="card-body">'+
    '<h5 class="card-title">'+person.name+'</h5>'+
    '<p class="card-text">'+person.info+'</p>'+
    '<a href="#" class="btn btn-primary">Go somewhere</a> </div></div></div>';

    return c;
}
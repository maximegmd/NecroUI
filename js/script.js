$(document).ready(function(){
    $.ajaxSetup({ cache: false });
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        options: {
            draggable: false
        }
    });

    var marker = new google.maps.Marker({
        map: map
    });

    var oldMarkers = {};
    var currPos = {lat: 0, lng: 0};
    var currEasedPos = {lat: 0, lng: 0};

    /*setInterval(function(){
        $.getJSON('data.json', {}, function(data) {
            if(currPos.lat == 0 && currPos.lng == 0)
                currEasedPos = data.currPos;
            currPos = data.currPos;

            $.each(data.forts, function(i, fort){
                if(!(fort.id in oldMarkers)) {
                    oldMarkers[fort.id] = new google.maps.Marker({
                        map: map
                    });
                }

                var icon;
                if(fort.type == 0) {
                    switch(fort.team) {
                    case 0: icon = ("img/gym_gray.png"); break;
                    case 1: icon = ("img/gym_blue.png"); break;
                    case 2: icon = ("img/gym_red.png"); break;
                    case 3: icon = ("img/gym_yellow.png"); break;
                    }
                }
                else if(fort.type == 1) {
                    if(new Date() > new Date(fort.cooldown))
                        icon = ("img/pokestop.png");
                    else
                        icon = ("img/pokestop_cooldown.png");
                }

                oldMarkers[fort.id].setPosition(fort.pos);
                oldMarkers[fort.id].setIcon(icon);
            });
        });

        $.get('stats.txt', {}, function(data) {
            $('#stats').text(data);
        });

        $.get('log.txt', {}, function(data) {
            $('#log').html(data);
        });
    }, 1000);

    setInterval(function() {
        currEasedPos.lat = ((currEasedPos.lat * 29) + currPos.lat) / 30

        currEasedPos.lng = ((currEasedPos.lng * 29) + currPos.lng) / 30

        map.setCenter(currEasedPos);
        marker.setPosition(currEasedPos);
    }, 50);*/
}
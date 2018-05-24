$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}


// Add all path IDs to array
var stateAbbrev = [];
var states = [];

$("#g5").find("path").each(function(){
  //Add path Ids to array
  stateAbbrev.push(this.id);

  // Add state names to array to create URLs
  if ($(this).attr('data-info')) {
    states.push($(this).attr('data-info').toLowerCase());
  }

});

// Loop through states to remove spaces
for (var x = 0; x < states.length; x++) {
  //console.log(states[x]);
  states[x] = states[x].replace(/\s/g, '');
}

//Loop through states and apply URL
$.each(states, function(x){

  // To do
    // If class="regulated" -> window.open('https://www.nachi.org/cpi-requirements.htm');

  $("#" + stateAbbrev[x]).bind("click", function(){
    window.open("https://nachi.org/" + states[x]);
  })
})

//Apply URL for DC
$("#DC").click(function(){
  window.open("https://www.nachi.org/dc-certified-licensed-home-inspector.htm");
})

// TO-DO

// Test for all working links

// Create array of 'regulated' states
var regulated = ['AL','AK','AZ','AR','CT','DE','FL','IL','IN','KY','LA','MD','MA','MS','NV','NH','NJ','NY','NC','OK','OR','PA','RI','SC','SD','TN','TX','VT','VA','WA','WV','WI'];
  $.each(regulated, function(x){
    // Add CSS class .regulated
    $("#" + regulated[x]).addClass('regulated');


  })



  // Send unregulated states to 'https://www.nachi.org/cpi-requirements.htm'

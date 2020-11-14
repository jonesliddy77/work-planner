var currentDate = document.getElementById('currentDay');
var time = moment().format('LT').slice(0,moment().format('LT').indexOf(':'));
var timeArray = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
function localText(){
  var timeblocks = {
    '9am': '',
    '10am':'',
    '11am':'',
    '12pm':'',
    '1pm': '',
    '2pm': '',
    '3pm': '',
    '4pm': '',
    '5pm': '',
    '6pm': '',
    '7pm': '',
    '8pm': '',
  }
  
  if(localStorage.getItem('timeText')===null){
    localStorage.setItem('timeText', JSON.stringify(timeblocks));
  }
  var localBlocks = JSON.parse(localStorage.getItem('timeText'));
  for(var i = 0; i < timeArray.length; i++){
    $('#'+timeArray[i]).val(localBlocks[timeArray[i]])
  }
}
function layout(){
  console.log(time);
  for(var i = 0; i<timeArray.length; i++){
    var hourEl= $('<div>').addClass('hour');
    var imputArea = $('<div>');
    var text = $('<textarea>');
    imputArea.append(text);
    imputArea.append('<button>');
    text.attr('id',timeArray[i]);
    hourEl.text(timeArray[i]);
    hourEl.append(imputArea)
    $('.container').append(hourEl);
    $('button').addClass('saveBtn');
    $('.saveBtn').html("save");
  }
  $('.saveBtn').on("click",function(){
    var timeblocksSave = {
      '9am': $('#9am').val(),
      '10am':$('#10am').val(),
      '11am':$('#11am').val(),
      '12pm':$('#12pm').val(),
      '1pm': $('#1pm').val(),
      '2pm': $('#2pm').val(),
      '3pm': $('#3pm').val(),
      '4pm': $('#4pm').val(),
      '5pm': $('#5pm').val(),
      '6pm': $('#6pm').val(),
      '7pm': $('#7pm').val(),
      '8pm': $('#8pm').val(),
    }
  localStorage.setItem('timeText', JSON.stringify(timeblocksSave));
  });
}
function checkTimes(){
  for (var i = 0; i < 12; i++) {
      var section = document.getElementById(timeArray[i]);
      if(time === 4){
          $(timeArray[5]).addClass("past");
      }
      else if(time < i){
          $(timeArray[i]).addClass("future");
      }
      else {
          $(timeArray[i]).addClass("present");
      }
  }
}


var timeSet= function() {
  currentDate
  .innerHTML = moment().format('MMMM Do YYYY, HH:mm:ss a');
  
}
setInterval(timeSet,1000);
layout();
checkTimes(time);
localText();


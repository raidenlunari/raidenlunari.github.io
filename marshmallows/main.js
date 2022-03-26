var gameData = {
    marsh: 0,
    marshPerClick: 1
  }
  
  function duplicateMarsh() {
    gameData.marsh += gameData.marshPerClick
    document.getElementById("marshDuplicated").innerHTML = gameData.marsh + " Marshmallows Duplicated"
  }
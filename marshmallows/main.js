var gameData = {
    marsh: 0,
    marshPerClick: 1,
    marshPerClickCost: 10
  }
  
  function duplicateMarsh() {
    gameData.marsh += gameData.marshPerClick
    document.getElementById("marshDuplicated").innerHTML = gameData.marsh + " Marshmallows Duplicated"
  }

  function dupMarshPerClick() {
    if (gameData.marsh >= gameData.marshPerClickCost) {
      gameData.marsh -= gameData.marshPerClickCost
      gameData.marshPerClick += 1
      gameData.marshPerClick *= 2
    }
  }

  var mainGameLoop = window.setInterval(function() {
    duplicateMarsh()
  }, 1000)
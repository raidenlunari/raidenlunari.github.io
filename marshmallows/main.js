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
      gameData.marshPerClickCost *= 2
      document.getElementById("marshDuplicated").innerHTML = gameData.marsh + " Marshmallows Duplicated"
      document.getElementById("perClickUpgrade").innerHTML = "Improve Duplication (Currently Level " + gameData.marshPerClick + ") Cost: " + gameData.marshPerClickCost + " Marshmallows"
    }
  }

  var mainGameLoop = window.setInterval(function() {
    duplicateMarsh()
  }, 1000000)
var gameData = {
    marsh: 0,
    marshPerClick: 1,
    marshPerClickCost: 10,
    marshVillageCost: 100,
    marshVillage: 0,
    marshFactoryCost: 2500,
    marshFactory: 0,
  }
  
  function duplicateMarsh() {
    gameData.marsh += gameData.marshPerClick
    document.getElementById("marshDuplicated").innerHTML = Math.round(gameData.marsh) + " Marshmallows Duplicated"
  }

  function dupMarshPerClick() {
    if (gameData.marsh >= gameData.marshPerClickCost) {
      gameData.marsh -= gameData.marshPerClickCost
      gameData.marshPerClick += 1
      gameData.marshPerClickCost *= 2
      document.getElementById("marshDuplicated").innerHTML = Math.round(gameData.marsh) + " Marshmallows Duplicated"
      document.getElementById("perClickUpgrade").innerHTML = "Improve Duplication (Currently Level " + gameData.marshPerClick + ") Cost: " + Math.round(gameData.marshPerClickCost) + " Marshmallows"
    }
  }

  function makeMarshVillage() {
      if (gameData.marsh >= gameData.marshVillageCost) {
          gameData.marsh -= gameData.marshVillageCost
          gameData.marshPerClick = 1
          gameData.marshVillage += 1
          gameData.marshPerClickCost = 10/(1.1^(gameData.marshVillage))
          gameData.marshVillageCost *= 2
          document.getElementById("marshDuplicated").innerHTML = Math.round(gameData.marsh) + " Marshmallows Duplicated"
          document.getElementById("perVillageUpgrade").innerHTML = "Create Village (Currently " + gameData.marshVillage + " Villages) Cost: " + Math.round(gameData.marshVillageCost) + " Marshmallows"
      }
  }

  function makeMarshFactory() {
      if (gameData.marsh >= gameData.marshFactoryCost) {
          gameData.marsh -= gameData.marshFactoryCost
          gameData.marshFactory += 1
          gameData.marshFactoryCost *= 1.5
          document.getElementById("marshDuplicated").innerHTML = Math.round(gameData.marsh) + " Marshmallows Duplicated"
          document.getElementById("perFactoryUpgrade").innerHTML = "Build Factory (Currently " + gameData.marshFactory + " Factories) Cost: " + Math.round(gameData.marshFactoryCost) + " Marshmallows"
      }
  }

  var mainGameLoop = window.setInterval(function() {
    duplicateMarsh()
  }, 10000/(1.1^gameData.marshFactory))
  
  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("marshmallowSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("marshmallowSave"))
  if (savegame !== null) {
    gameData = savegame
  }

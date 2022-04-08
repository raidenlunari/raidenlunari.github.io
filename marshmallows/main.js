var gameData = {
    marsh: 0,
    marshPerClick: 1,
    marshPerClickCost: 10,
    marshVillageCost: 100,
    marshVillage: 0,
    marshFactoryCost: 2500,
    marshFactory: 0,
    marshAutoTicks: 10000,
  }

var blankGameData = gameData

console.log(blankGameData)

// Visual Updates
  function updateVisual() {
    document.getElementById("marshDuplicated").innerHTML = Math.round(gameData.marsh) + " Marshmallows Duplicated"
    document.getElementById("perClickUpgrade").innerHTML = "Improve Duplication (Currently Level " + gameData.marshPerClick + ") Cost: " + Math.round(gameData.marshPerClickCost) + " Marshmallows"
    document.getElementById("perVillageUpgrade").innerHTML = "Create Village (Currently " + gameData.marshVillage + " Villages) Cost: " + Math.round(gameData.marshVillageCost) + " Marshmallows"
    document.getElementById("perFactoryUpgrade").innerHTML = "Build Factory (Currently " + gameData.marshFactory + " Factories) Cost: " + Math.round(gameData.marshFactoryCost) + " Marshmallows"
  }

// Duplicate Marshmallows

  function duplicateMarsh() {
    gameData.marsh += gameData.marshPerClick
    updateVisual()
  }

  function dupMarshPerClick() {
    if (gameData.marsh >= gameData.marshPerClickCost) {
      gameData.marsh -= gameData.marshPerClickCost
      gameData.marshPerClick += 1
      gameData.marshPerClickCost *= 2
      updateVisual()
    }
  }

// Marshmallow village
  function makeMarshVillage() {
    if (gameData.marsh >= gameData.marshVillageCost) {
      gameData.marsh -= gameData.marshVillageCost
      gameData.marshPerClick = 1
      gameData.marshVillage += 1
      gameData.marshPerClickCost = 10/(1.1^gameData.marshVillage)
      gameData.marshVillageCost *= 2
      updateVisual()
      }
  }
// Marshmallow factory
  function makeMarshFactory() {
    if (gameData.marsh >= gameData.marshFactoryCost) {
      gameData.marsh -= gameData.marshFactoryCost
      gameData.marshFactory += 1
      gameData.marshFactoryCost *= 1.5
      gameData.marshAutoTicks /= 1.1
      updateVisual()
    }
  }

// <!-- Key press detection -->
  document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    var commandPrompt = prompt("Enter Command (cancel, save, reset)")

    console.log(commandPrompt)
    switch(commandPrompt) {
      case 'reset':
        gameData = blankGameData
        localStorage.setItem('marshmallowSave',JSON.stringify(blankGameData))
        updateVisual()
        alert('Progress reset.')
      case 'save':
        localStorage.setItem("marshmallowSave",JSON.stringify(gameData))
    }
    }
  });

// Main Loop
  var mainGameLoop = window.setInterval(function() {
    duplicateMarsh()
  }, gameData.marshAutoTicks)

// Save loop
  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("marshmallowSave", JSON.stringify(gameData))
  }, 15000)

// Loads the game
  var savegame = JSON.parse(localStorage.getItem("marshmallowSave"))
  if (savegame !== null) {
    gameData = savegame
  }

  // Updates visuals
  updateVisual()

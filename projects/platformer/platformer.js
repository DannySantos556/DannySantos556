$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
    createCollectable("steve", 200, 170, 6, 0.7); //your example function call
    // TODO 1
    // Create platforms
    createPlatform(500, 630, 200, 150);
    createPlatform(700, 560, 200, 220); 
    createPlatform(900, 460, 200, 1020); 
    createPlatform(1100, 360, 200, 1020);
    createPlatform(700, 230, 250, 10);
    createPlatform(700, 130, 10, 100);
    createPlatform(700, 130, 248, 10);
    // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)



    
    // TODO 2
    // Create collectables
    createCollectable("steve", 500, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
createCollectable("grace", 690, 300, 10, 0.5);
createCollectable("max", 900, 300, 30, 0.5)
createCollectable("max", 710, 170, 10, 0.5) // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)



    
    // TODO 3
    // Create cannons
    createCannon("left", 600, 13000);
    createCannon("left", 500, 1300); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 400, 1600); 
    createCannon("right", 400, 1500); 
    
    
    
    // cannon on left wall, 600px down, shooting once per second

    
    // cannon on left wall, 600px down, shooting once per second

    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)



    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});

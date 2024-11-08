// Game variables
let playerX, playerY;
let coinX, coinY; //coinCollected;
let obstacleX, obstacleY;
let score = 0;
let hits = 0;
let gameOver = false;
let obstacleSpeed = 5;

function setup() {
  createCanvas(400, 400);
  initializeGame();
}

function initializeGame() {
  // Initialize player position (bottom center)
  playerX = width / 2;
  playerY = height - 20;

  // Initialize coin position
  newCoin();

  // Initialize obstacle position
  obstacleX = random(20, width - 20);
  obstacleY = 0;
}

function draw() {
  background(220);

  if (gameOver) {
    displayGameOver();
  } else {
    // Draw game elements
    drawPlayer();
    drawCoin();
    drawObstacle();

    // Handle movement
    movePlayer();
    moveObstacle();

    // Check for collisions
    checkCoinCollection();
    checkCollisions();

    // Display game stats
    displayStats();
  }
}

function drawPlayer() {
  fill(0, 0, 255); // Blue player
  circle(playerX, playerY, 20);
}

function drawCoin() {
  fill(255, 255, 0); // Yellow coin
  circle(coinX, coinY, 10);
}

function drawObstacle() {
  fill(255, 0, 0); // Red obstacle
  rect(obstacleX, obstacleY, 20, 20);
}

// Basic left/right movement provided
function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    playerY -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY += 5;
  }
}

function moveObstacle() {
  // TODO: Move obstacle from up to down
  // HINT: Increase obstacleX by obstacleSpeed
  // TODO: Reset obstacle when it goes off screen
  // HINT: Check if obstacleX > width
  // Reset to top and new random X position
  obstacleX += 1;
  obstacleX = random(20, width - 20);
  obstacleY = 0; 
}

function checkCoinCollection() {
  // TODO: Check if player touches coin
  if (dist(playerX, playerY, coinX, coinY) < 10) {
    newCoin();
    score += 1;
    obstacleSpeed += 0.5;
  }
  // HINT: Use dist(playerX, playerY, coinX, coinY)
  // If distance < 15:
  //   - Increase score
  //   - Create new coin
  //   - Increase obstacle speed slightly
}

function checkCollisions() {
  // TODO: Check if player hits obstacle
  // HINT: Similar to coin collection
  // If hit (distance < 20):
  //   - Increase hits
  //   - Check for game over (hits >= 3)
  //   - Reset positions
  if (dist(playerX, playerY, obstacleX, obstacleY) < 20) {
    newCoin();
    hits += 1;
    initializeGame();
  }
}

function displayStats() {
  fill(0);
  textSize(16);
  text("Score: " + score, 10, 20);
  text("Hits: " + hits, 10, 35);
  // TODO: Add display for hits and speed
}

function displayGameOver() {
  // TODO: Show game over screen
  // HINT: Use textAlign(CENTER, CENTER)
  // Show:
  //   - "Game Over" message
  //   - Final score
  //   - "Press R to Restart"
}

function newCoin() {
  // Generate random position for coin
  coinX = random(20, width - 20);
  coinY = random(20, height - 20);
}

function resetGame() {
  // TODO: Reset all game variables
  // HINT: Reset score, hits, speed
  // Set gameOver to false
  // Call initializeGame()

  score = 0;
  hits = 0;
  initializeGame();
}

function keyPressed() {
  // TODO: Check for 'R' key to restart game
  // HINT: Use key === 'r' || key === 'R'
  // Only works when game is over
  if (key === "r") {
    resetGame();
  }
}

// Helper function you might need
function distance(x1, y1, x2, y2) {
  return dist(x1, y1, x2, y2);
}

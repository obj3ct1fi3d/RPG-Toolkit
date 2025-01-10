let mode = 'none';

function setup() {
    const canvasContainer = document.getElementById('canvas-container');
    const canvas = createCanvas(800, 600);
    canvas.parent(canvasContainer);
    noLoop();

    document.getElementById('world-maker-btn').addEventListener('click', () => {
        mode = 'maker';
        drawWorldMaker();
    });

    document.getElementById('world-travel-btn').addEventListener('click', () => {
        mode = 'travel';
        drawWorldTravel();
    });
}

function drawWorldMaker() {
    clear();
    background(200);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('World Maker Mode', width / 2, height / 2);

    // Example: Draw a grid
    stroke(0);
    for (let x = 0; x < width; x += 40) {
        for (let y = 0; y < height; y += 40) {
            rect(x, y, 40, 40);
        }
    }
}

function drawWorldTravel() {
    clear();
    background(100, 150, 250);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('World Travel Mode', width / 2, height / 2);

    // Example: Display an NPC
    fill(255, 0, 0);
    ellipse(width / 2, height / 2, 50, 50);
    fill(0);
    textSize(16);
    text('NPC', width / 2, height / 2 + 40);
}

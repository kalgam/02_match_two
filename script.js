var bg = []

function appInit() {

    for (var i=0; i<20; i++) {
        bg.push(14);
        bg.push(14);

        bg.push(15);
        bg.push(14);
    }

    for (var i=0; i<20; i++) {
        bg.push(14);
        bg.push(15);

        bg.push(15);
        bg.push(15);
    }
}

function appUpdate(dt) {
    if (mouseBtn(0)) {
        reload();
    }
}

// drawSprite(x, y, tileX, tileY)
// drawSprite(x, y, tileX, tileY, spriteWidth, wpriteHeight)
// drawMap(x, y, [tileX, tileY], coloms, rows)
function appDraw() {
    drawSprite(0, 0, 0, 0, 16, 16);

    drawMap(30, 30, bg, 40, 2);
}

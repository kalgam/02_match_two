var bg = []
var off = 0

function appInit() {

    for (var j=0; j<15; j++) {
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
}

function appUpdate(dt) {
    off += dt * 5;
    if (off>16) {
        off-=16;
    }
    if (mouseBtn(0)) {
        reload();
    }
}

// drawSprite(x, y, tileX, tileY)
// drawSprite(x, y, tileX, tileY, spriteWidth, wpriteHeight)
// drawMap(x, y, [tileX, tileY], coloms, rows)
function appDraw() {
    drawMap(-off, -off, bg, 40, 30);

    drawSprite(0, 0, 0, 0, 16, 16);

    for (var y = 0; y<5; y++) {
        for (var x = 0; x<5; x++) {
            drawSprite(50 + x * 16, 50 + y * 16, 0, 0, 2, 2);
        }
    }
}

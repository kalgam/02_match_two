var bg = [];
var off = 0;
var cols = 8;
var rows = 6;

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
    var w = screenWidth();
    var h = screenHeight();
    var cx = w/2;
    var cy = h/2;
    drawMap(-off, -off, bg, 40, 30);

    drawSprite(0, 0, 0, 0, 16, 16);

    for (var y = 0; y<rows; y++) {
        for (var x = 0; x<cols; x++) {
            drawSprite((w - cols * 16) / 2 + x * 16, (h - rows * 16) / 2 + y * 16, 0, 0, 2, 2);
        }
    }
}

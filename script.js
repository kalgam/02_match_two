var bg = [];
var off = 0;
var rows = 4;
var cols = 4;

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

    for (var y = 0; y<rows; cols++) {
        for (var x = 0; x<cols; rows++) {
            drawSprite((w - cols * 16) / 2, (h - rows * 16) / 2, 0, 0, 2, 2);
        }
    }
}

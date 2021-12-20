function appInit() {
   
}

function appUpdate(dt) {
    if (mouseBtn(0)) {
        reload();
    }
}

function appDraw() {
    drawSprite(0, 0, 0, 0, 16, 16);
}

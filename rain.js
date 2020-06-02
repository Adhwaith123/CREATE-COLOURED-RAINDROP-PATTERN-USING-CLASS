var bb;
var bbVel;
var bbSize;

function updateBubbles() {
    touch = false;
    for (var i = 0; i < bb.length; i++) {
        push();
        bb[i].add(bbVel[i]);

        
        if (bb[i].x > height + bbSize / 2) {
            bb[i].x = 0
        }
        if (bb[i].x < -bbSize / 2) {
            bb[i].x = 400
        }
        if (bb[i].y > height + bbSize / 2) {
            bb[i].y = 400
        }
        if (bb[i].y < -bbSize / 2) {
            bb[i].y = 400
        }



        fill(255);
        stroke("black");
        ellipse(bb[i].x, bb[i].y, bbSize);
        pop();
    }


}
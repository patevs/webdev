
/**
 *  src/dino.js
 * 
 * @param {p5} p 
 */

// p5 sketch dino
export default function dinosketch (p) {

    p.setup = function () {
        p.createCanvas(380, 420, p.WEBGL);
    };

    p.draw = function () {
        p.background(100);
        p.noStroke();
        //p.background(bg);
    };

};


// EOF


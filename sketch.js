// [ [x, y, h, s, v, a], ...]
var dpsAgentData = [];

function setup() {
    colorMode(HSB, 1.0, 1.0, 1.0, 1.0);
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
    noStroke();

    for(var i=0; i<1000; i++) {
        var r = random();
        dpsAgentData[dpsAgentData.length] = [   random(windowWidth),        // x 
                                                random(windowHeight),       // y
                                                random(0.6,0.7),            // h
                                                1.0,                        // s
                                                (r > 0.1) ? 1.0 : 0.0,      // v
                                                (r > 0.1) ? 0.04 : 0.4];    // a
    }
}

function draw() {
    for(var i=0; i < dpsAgentData.length; i++) {
        fill(dpsAgentData[i][2], dpsAgentData[i][3], dpsAgentData[i][4], dpsAgentData[i][5]);
        ellipse(dpsAgentData[i][0], dpsAgentData[i][1], 15, 15);
       
        dpsAgentData[i][0] += random(-0.5, 2);
        dpsAgentData[i][1] += random(-0.5, 2);
        dpsAgentData[i][0] %= windowWidth;
        dpsAgentData[i][1] %= windowHeight;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

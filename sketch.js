// [ [x, y, h, s, v, a], ...]
var dpsAgentData = [];
var numAgents = 2000;
var agentWidth;

function setup() {
    
    colorMode(HSB, 1.0, 1.0, 1.0, 1.0);
    createCanvas(windowWidth, windowHeight);
    agentWidth = (windowWidth > windowHeight) ? windowWidth / 100.0 : windowHeight / 100.0;
    background(0);
    frameRate(30);
    noStroke();
    
    seedAgents();
}

function draw() {

    for(var i=0; i < dpsAgentData.length; i++) {
        
        fill(dpsAgentData[i][2], dpsAgentData[i][3], dpsAgentData[i][4], dpsAgentData[i][5]);
        ellipse(dpsAgentData[i][0], dpsAgentData[i][1], agentWidth, agentWidth);
       
        dpsAgentData[i][0] += random(-0.25, 1);
        dpsAgentData[i][1] += random(-0.25, 1);
        dpsAgentData[i][0] %= windowWidth;
        dpsAgentData[i][1] %= windowHeight;
    }
}

function windowResized() {
    
    resizeCanvas(windowWidth, windowHeight);
    background(0);
    seedAgents();
}

function seedAgents() {

    for(var i=0; i<numAgents; i++) {
        var r = random();
        dpsAgentData[dpsAgentData.length] = [   random(windowWidth),        // x 
                                                random(windowHeight),       // y
                                                random(0.6,0.7),            // h
                                                0.0,                        // s
                                                (r > 0.22) ? 1.0 : 0.0,      // v
                                                (r > 0.22) ? 0.04 : 0.3];    // a
    }
}

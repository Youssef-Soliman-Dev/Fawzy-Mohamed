let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;
let c7 = 0;
let c8 = 0;
let c9 = 0;
let c10 = 0;
let c11 = 0;
let c12 = 0;
const count1 = document.getElementById("count1");
const count2 = document.getElementById("count2");
const count3 = document.getElementById("count3");
const count4 = document.getElementById("count4");
const count5 = document.getElementById("count5");
const count6 = document.getElementById("count6");
const count7 = document.getElementById("count7");
const count8 = document.getElementById("count8");
const count9 = document.getElementById("count9");
const count10 = document.getElementById("count10");
const count11 = document.getElementById("count11");
const count12 = document.getElementById("count12");


function reset() {
    c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = c10 = c11 = c12 = 0;
    update();
}


function inc1() {
    if (c1 < 33) {
        c1++;
        update();
    }
}
function inc2() {
    if (c2 < 33) {
        c2++;
        update();
    }
}
function inc3() {
    if (c3 < 33) {
        c3++;
        update();
    }
}
function inc4() {
    if (c4 < 33) {
        c4++;
        update();
    }
}
function inc5() {
    if (c5 < 33) {
        c5++;
        update();
    }
}
function inc6() {
    if (c6 < 33) {
        c6++;
        update();
    }
}
function inc7() {
    if (c7 < 33) {
        c7++;
        update();
    }
}
function inc8() {
    if (c8 < 33) {
        c8++;
        update();
    }
}
function inc9() {
    if (c9 < 33) {
        c9++;
        update();
    }
}
function inc10() {
    if (c10 < 33) {
        c10++;
        update();
    }
}
function inc11() {
    if (c11 < 33) {
        c11++;
        update();
    }
}
function inc12() {
    if (c12 < 33) {
        c12++;
        update();
    }
}

function update() {
    count1.textContent = c1;
    count2.textContent = c2;
    count3.textContent = c3;
    count4.textContent = c4;
    count5.textContent = c5;
    count6.textContent = c6;
    count7.textContent = c7;
    count8.textContent = c8;
    count9.textContent = c9;
    count10.textContent = c10;
    count11.textContent = c11;
    count12.textContent = c12;
}
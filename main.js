
window.onresize = function () { onWindowResize(); };
window.onscroll = function (e) {
    var h = window.innerHeight * 4 / 5;
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        document.querySelector('nav').style.top = 0;
    } else {
        document.querySelector('nav').style.top = '-100%';
    }
}
function drawHeaderLogo(elmnt, ctx) {
    var cx = elmnt.width / 2;
    var cy = elmnt.height / 2;
    var r = 96;//Math.min(cx*3/4, 200);
    var scale = {
        x: 32 * Math.cos(Math.PI * 2 / 7),
        y: 32 * Math.sin(Math.PI * 2 / 7)
    }

    // ring
    ctx.strokeStyle = '#3DB8D8';
    ctx.beginPath();
    ctx.lineWidth = 64;
    ctx.arc(cx, cy, r, 3 * Math.PI / 7, Math.PI / 7);
    ctx.stroke();
    ctx.closePath();

    // traingle
    var rx = cx + scale.x;
    var ry = cy + scale.y;
    ctx.fillStyle = '#FFE455';
    ctx.beginPath();
    ctx.lineWidth = 48;
    ctx.moveTo(rx, ry);
    ctx.arc(rx, ry, 128, Math.PI / 7, 3 * Math.PI / 7);
    ctx.fill();
    ctx.closePath();

    // pen
    var px = rx + scale.x * 3;
    var py = ry + scale.y * 3;
    ctx.fillStyle = '#FFF';
    ctx.strokeStyle = '#FFF';
    // pen - line
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.moveTo(rx, ry);
    ctx.lineTo(px, py);
    ctx.stroke();
    ctx.closePath();
    // pen - dot
    ctx.beginPath();
    ctx.lineWidth = 64;
    ctx.moveTo(px, py);
    ctx.arc(px, py, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
function onWindowResize() {
    // handle header canvas
    var c = document.getElementById('header-canvas');
    var cParent = document.querySelector('header .item1');
    var ctx = c.getContext('2d');

    c.width = cParent.clientWidth;
    c.height = cParent.clientHeight;
    drawHeaderLogo(c, ctx);

}
// canvas init
onWindowResize();

// handle mask menu view
var mask = document.querySelector('.mask');
mask.addEventListener('click', function () {
    mask.style.display = 'none';
});
document.querySelector('#navbar button').addEventListener('click', function () {
    mask.style.display = 'flex';
});

// handle mockup ani
var mockupEle = document.querySelector('.mockup');
var timer = window.setInterval(function () {
    var d = new Date();
    switch (d.getSeconds() % 4) {
        case 0: mockupEle.style.backgroundImage = "url('image/mockup.png')"; break;
        case 1: mockupEle.style.backgroundImage = "url('image/mockup2.png')"; break;
        case 2: mockupEle.style.backgroundImage = "url('image/mockup3.png')"; break;
        case 3: mockupEle.style.backgroundImage = "url('image/mockup4.png')"; break;
        default: mockupEle.style.backgroundImage = "url('image/mockup.png')"; break;
    }
}, 1000);

// handle interesting button & form
var target = document.querySelectorAll('input[type=submit]');
for (let i = 0; i < target.length; i++) {
    target[i].addEventListener('click', function (e) {
        if (e.target.classList.contains('item10')) {
            if (!document.querySelector('input.item7').value) {
                window.alert('Email field is empty!');
                return false;
            } else {
                window.alert('Thank you for your submission!');
                window.location.replace('https://wachemanston.github.io/QuickNote/#contact');
            }
        } else {
            window.alert('Thank you for your support!');
        }
    })
}
// scollspy
var spyElmnt = document.querySelectorAll('section');
var navbarLinkElmnt = document.querySelectorAll('#navbar  a');
for (let i = 0; i < navbarLinkElmnt.length; i++) {
    navbarLinkElmnt[i].addEventListener('click', function () {
        document.querySelector('#navbar  a.active').classList.remove('active');
        this.classList.add('active');
    });
}
for (let i = 0; i < spyElmnt.length; i++) {
    spyElmnt[i].addEventListener('mouseenter', function () {
        document.querySelector('#navbar  a.active').classList.remove('active');
        navbarLinkElmnt[i + 1].classList.add('active');
        
    });
}
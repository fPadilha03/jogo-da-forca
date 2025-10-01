const canvas = document.getElementById('drawing')
const ctx = canvas.getContext('2d')
ctx.lineWidth = 3

function drawBase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.moveTo(10, 240);
    ctx.lineTo(190, 240);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(40, 240);
    ctx.lineTo(40, 20);
    ctx.lineTo(120, 20);
    ctx.lineTo(120, 40);
    ctx.stroke();
}

function drawDummy(errors) {
    switch(errors) {
        case 0:
            drawBase()
            break
        case 1:
            ctx.beginPath();
            ctx.arc(120, 60, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;

        case 2:
            ctx.beginPath();
            ctx.moveTo(120, 80);
            ctx.lineTo(120, 140);
            ctx.stroke();
            break;

        case 3:
            ctx.beginPath();
            ctx.moveTo(120, 100);
            ctx.lineTo(90, 120);
            ctx.stroke();
            break;

        case 4:
            ctx.beginPath();
            ctx.moveTo(120, 100);
            ctx.lineTo(150, 120);
            ctx.stroke();
            break;

        case 5:
            ctx.beginPath();
            ctx.moveTo(120, 140);
            ctx.lineTo(90, 180);
            ctx.stroke();
            break;

        case 6:
            ctx.beginPath();
            ctx.moveTo(120, 140);
            ctx.lineTo(150, 180);
            ctx.stroke();
            break;
    }
}
function update() {

}

function render() {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas_width, canvas_height);
}

function step() {
    update();
    render();
    animate(step);
}
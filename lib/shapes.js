class Circle { }
Circle.prototype.render = function (setColor) {
    return `<circle cx="150" cy="100" r="90" fill="${setColor}" />`;
};

class Triangle { }
Triangle.prototype.render = function (setColor) {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${setColor}" />`;
};

class Square { }
Square.prototype.render = function (setColor) {
    return `<rect x="60" y="10" width="180" height="180" fill="${setColor}" />`;
};
function renderLogo(data) {
    let shape;
    switch (data.logoShape) {
        case "circle":
            shape = new Circle;
            break;
        case "triangle":
            shape = new Triangle;
            break;
        case "square":
            shape = new Square;
            break;
    }
    return shape.render(data.shapeColor)
}
module.exports = {
    Circle,
    Triangle,
    Square,
    renderLogo
    }

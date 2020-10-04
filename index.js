// hi javascript

let oscar = {
    name: 'Oscar',
    the_guy_infrontof: undefined,
    age: 19,
    greet: function() {
        console.log(this.name + ' says hello ' + this.the_guy_infrontof + '!')
    }
}
oscar.the_guy_infrontof = 'Cindy';
oscar.greet();

//Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Draw');
        }
    };
}
const circle = createCircle(2);
circle.draw();

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const anothercircle = new Circle(1);
anothercircle.draw();
// hi javascript

let oscar = {
    name: 'Oscar',
    the_guy_infrontof: undefined,
    age: 19,
    greet: function() {
        console.log(this.name + ' says hello ' + 
        this.the_guy_infrontof + '!')
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

for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

//Constructor Function
function Circle(radius) {
    let defaultlocation = { x: 0, y: 0 };
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    Object.defineProperty(this, 'defaultlocation',
        { get: function() {
            return defaultlocation;
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('Invalid location.');
            defaultlocation = value;
        }
    });
}
const anothercircle = new Circle(1);
anothercircle.defaultlocation = {x: 1, y: 1};
console.log(anothercircle.defaultlocation);
anothercircle.draw();
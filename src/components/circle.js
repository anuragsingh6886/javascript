// import using require

// declare class
class Circle extends Shape{
	var radius;
	constructor(color,radius){
		super(color);
		this.radius = radius;
	}
	calculateArea(){
		return 3.14*radius*radius;
	}
}

// export class using module.exports

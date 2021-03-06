// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(cuboidAttributes){
    this.length = cuboidAttributes.length;
    this.width  = cuboidAttributes.width;
    this.height = cuboidAttributes.height;
  }
volume(){
    return(this.length * this.width * this.height);
    }
surfaceArea(){
    return(2* (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}
const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height:5
  });
console.log('Using Class:');  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(cubeAttributes){
        super(cubeAttributes);
    }
    /* volume of cube of side a is a^3 */
    cubeVolume(){
        return(Math.pow(this.length,3));
    }
    /* Surface Area of cube of side a is 6asquared */
    cubeSurfaceArea(){
        return(6* (Math.pow(this.length,2)));
    }
}

const myCube = new CubeMaker({
    length:5,
    width:5,
    height:5
})
console.log('Stretch on Class:');
console.log(`Volume of Cube : ${myCube.cubeVolume()}`); /* has to be 125 */
console.log(`Surface Area of Cube : ${myCube.cubeSurfaceArea()}`);/* be 150*/
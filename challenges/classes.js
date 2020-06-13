// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(length,width,height) {
//     this.length = length
//     this.width = width
//     this.height = height
//     this.volume = function() {
//       return length * width * height
//     }
//     this.surfaceArea = function() {
//       return 2 * (length * width + length * height + width * height)
//     }
//   }
  
  class CuboidMaker2 {
    constructor(length,width,height) {
    this.length = length
    this.width = width
    this.height = height
    }
    volume() {
      return this.length * this.width * this.height
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
  }
      let cuboid2 = new CuboidMaker2(4,5,5)
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(length,width,height) {
    super(length,width,height)
    }
    volume() {
        return this.length * this.width * this.height
    }
    cubeSurfaceArea() {
        let s = this.length * 6
        return Math.pow(s,2)
    }
}

let newCube = new CubeMaker(4,5,5)

console.log(newCube.volume())
console.log(newCube.cubeSurfaceArea())
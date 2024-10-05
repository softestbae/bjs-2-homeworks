function parseCount(number) {
  let amount = Number.parseFloat(number);
  if(amount === NaN || !Number.isInteger(amount)) {
    throw new Error('Невалидное значение');
  }
  return amount;
}

function validateCount(number) {
    try {
      parseCount(number)
    } catch(error) {
      return error;
    }
}

class Triangle {
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.perimeter = null;
        this.area = null;

        if(this.side1 + this.side2 <= this.side3 || this.side1 + this.side3 <= this.side2 || this.side2 + this.side3 <= this.side1) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
    }
    
    perimeterAndArea() {
      get perimeter() {
        return this.side1 + this.side2 + this.side3;
      }

      get area() {
        return (Math.sqrt(perimeter / 2 * (perimeter / 2 - side1)(perimeter / 2 - side2)(perimeter / 2 - side3))).toFixed(3);
      }
    }
}

function getTriangle(side1, side2, side3) {
    try { return Triangle 
    } catch(error) { 
        return perimeterAndArea;
        console.log('Ошибка! Треугольник не существует');
    }
}
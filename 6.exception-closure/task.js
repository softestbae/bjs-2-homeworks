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
    }

    checkTriangle() {
        if(this.side1 + this.side2 <= this.side3 || this.side1 + this.side3 <= this.side2 || this.side2 + this.side3 <= this.side1) {
            throw new Error ('Треугольник с такими сторонами не существует';)
        }
    }

    set perimeter(side1, side2, side3) {
       let _perimeter = this.side1 + this.side2 + this.side3;
    }

    get perimeter() {
        return _perimeter;
    }
}
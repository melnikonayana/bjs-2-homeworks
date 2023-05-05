function parseCount(parseValue) {
    const number = parseFloat(parseValue);
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;

        if (firstSide + secondSide < thirdSide || firstSide + thirdSide < secondSide || secondSide + thirdSide < firstSide) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area() {
        const p = 0.5 * this.perimeter;
        const s = Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide));
        return parseFloat(s.toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
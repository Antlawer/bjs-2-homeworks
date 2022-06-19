// Задача 1

function parseCount(number) {
    const pars = Number.parseInt(number);
    if (isNaN(pars)) {
        throw new Error("Невалидное значение");
    }
    return pars;
}



function validateCount(number) {

    try {
        parseCount(number);
    } catch(error) {
        return error;
    }
    return parseCount(number);
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        if (((a + b) > c) && ((b + c) > a) && ((a + c) > b)) {
            this.a = a;
            this.b = b;
            this.c = c; 
        } else {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    getPerimeter() {
        const perimetr = this.a + this.b + this.c;
        return perimetr;
    }

    getArea() {
        const halfPerimetr = this.getPerimeter() * 0.5;
        const area = Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    let triang;

    try {
        triang = new Triangle(a, b, c);
    } catch(error) {
        return triang = {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }   
        };
    } finally {
        return triang; 
    }  
}
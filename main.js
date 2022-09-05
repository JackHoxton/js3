console.log('Sample JavaScript #3 HW #15');

/*
 * #1
 *
 * Создайте функцию counter(), которая должна реализовать счетчик с помощью замыкания:
 * функция может принимать число в качестве аргумента counter(n)
 * если число передано в функцию – счет начинается с указанного числа
 * если нет – то счет продолжается
 */

function fn() {
    var count = 0;
    return function (num) {
        count = num === undefined ? count : num;
        return count++;
    };
};

var counter = fn()

console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());

/*
 * #2
 *
 * Создайте функцию counting, которая должна реализовать три метода с помощью замыкания:
 * первоначальное значение счетчика – 0
 * counting.value() – возвращает значение счетчика
 * counting.value(n) – устанавливает значение счетчика, возвращает новое значение
 * counting.increment() – увеличивает значение счетчика на 1
 * counting.decrement() – уменьшает значение счетчика на 1
 */
var counting = function () {
    var count = 0;
    return {
        value(num) {
            if (num !== undefined) count = num;
            return count;
        },
        decrement() {
            count--;
        },
        increment() {
            count++;
        }
    };
}();

console.log(counting.value()); // 0
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value()); // 3
counting.decrement();
counting.decrement();
console.log(counting.value()); // 1
console.log(counting.value(100)); // 100
counting.decrement();
console.log(counting.value()); // 99
console.log(counting.value(200)); // 200
counting.increment();
console.log(counting.value()); // 201

/*
 * #3
 *
 * Создайте функцию myPow(a, b, myPrint). Внутри реализуйте рекурсию для подсчета результата возведения числа a в степень b.
 * функция myPrint(a, b, res) – глобальная функция, которая должна генерировать из параметров a, b, res строку вида 'a^b=res' и возвращать ее
 * myPrint() должна быть передана в myPow() как параметр и вызвана внутри как callback-функция
 * функция myPow() в качестве возвращаемого значения принимает результат myPrint()
 * Например:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */
var myPrint = (a, b, с) => `${a}^${b}=${с}`;
var myPow = (a, b, с) => {
    var pow = (x, n) => {
        if (n !== 1) return x *= pow(x, n - 1);
        return x;
    };
    return с(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8































function fullInfo() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

var yearNow = new Date().getFullYear();
var car = {
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrovar',
    year: 2010,
    info: fullInfo,
    get used() {
        return this.year !== yearNow ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};
var car2 = {
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infinite',
    year: 2019,
    info: fullInfo,
    get used() {
        return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};

console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info());
































/*
 * #7
 * Создайте функцию myMax(arr), которая в качестве параметра принимает
 * произвольный числовой массив и возвращает максимальное число из переданного ей массива.
 * В реализации функции должен быть применен метод Math.max() и apply().
 */
var list = [12, 23, 100, 34, 56, 9, 233];
var myMax = (arg) => Math.max.apply(Math, arg);
/*
 * apply - удобный способ передать массив данных в качестве параметров функции.
 * Помните, Math.max(list) вернет NaN и не будет работать,
 * потому что max не принимает массив в качестве входа.
 */

console.log(myMax(list));

/*
 * #8
 *
 * Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.
 */
function myMul(a, b) {
    return a * b;
}

console.log(myMul(99, 99))

/*
 * Создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */
var myDouble = myMul.bind(null, 2); // контекст фиксируем null, он не используется

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));

// Аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.
var myTriple = myMul.bind(null, 3); // контекст фиксируем null, он не используется

console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15



























var myUniq = (arr) => {
    var set = new Set();
    arr.forEach(function (val){
        set.add(val);
    });
    return set;
};

var notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
var notUniqStrings = [
    'Bob',
    'Kate',
    'Jhon',
    'Tom',
    'Jhon',
    'Kate',
    'Tom',
    'Bob',
    'Jhon',
    'Tom'
];

console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));

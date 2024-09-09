//Task_1
// 1. Написать код функции 'findUnique', которая за один проход вернет все уникальные числа (Не использовать Set).
// const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];
// function findUnique (arr) {
//     // ...
// }
// findUnique(array);

const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr) {
    const count = {};
    const unique = [];

    // Первый проход: считаем количество каждого элемента
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    // Второй проход: собираем уникальные числа
    for (let num of arr) {
        if (count[num] === 1) {
            unique.push(num);
        }
    }

    return unique;
}

console.log(findUnique(array)); // [2, 5]



// 2. В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел пропущено, остальные встречаются ровно по одному разу.  N заранее неизвестно. Определить пропущенное число.
//     const array = [ 2, 1, 3, 5 ];
// function findMissing(arr) {
//     // ...
// }
// findMissing(array);

const array = [2, 1, 3, 5];

function findMissing(arr) {
    // Находим максимальное число (это и будет N)
    const N = Math.max(...arr);

    // Вычисляем ожидаемую сумму всех чисел от 1 до N по формуле арифметической прогрессии как если бы у нас не было пропушено число
    const expectedSum = (N * (N + 1)) / 2;

    // Считаем сумму чисел в массиве
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    // Пропущенное число — это разница между ожидаемой и фактической суммой
    return expectedSum - actualSum;
}

console.log(findMissing(array)); // 4

// 3. Напишите код функции reversePrint(), которая выведет значения переданного ей односвязного списка в обратном порядке (4, 3, 2, 1). Для вывода значений используйте функцию console.log().
//     var someList = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// function reversePrint(linkedList) {
//     // ...
// }
// reversePrint(someList);

// Для решения задачи использую рекурсию. Рекурсия естественным образом подходит для решения задачи,
// потому что мы можем идти до конца списка и затем, возвращаясь по рекурсивным вызовам,
// выводить элементы в обратном порядке.

function reversePrint(linkedList) {
    // Базовый случай: если текущий узел null, мы дошли до конца списка
    if (linkedList === null) {
        return;
    }

    // Рекурсивно вызываем функцию для следующего элемента
    reversePrint(linkedList.next);

    // Когда достигнут конец, выводим текущий элемент
    console.log(linkedList.value);
}

const someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

reversePrint(someList); // Вывод: 4, 3, 2, 1


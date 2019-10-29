let app = new Vue ({
    el: '#app',
    data: {
        name: 'Вася',
        surname: 'Иванов',
        num: 5,
        num1: 1,
        num2: 2,
        num3: 3,
        arr: [1, 2, 3],
        obj: {a: 1, b: 2, c: 3},
        arr1: [1, 2, 3, 4, 5],
        arr2: ['user1', 'user2', 'user3'],
        arr3: ['user1', 'user2', 'user3'],
        obj1: {
            employee1: '100$',
            employee2: '200$',
            employee3: '300$',
        },
        hrefs: [
            {href: '1.html', text: 'ссылка 1'},
            {href: '2.html', text: 'ссылка 2'},
            {href: '3.html', text: 'ссылка 3'},
        ],
        products: [
            {name: 'product1', price: 100, quantity: 5},
            {name: 'product2', price: 200, quantity: 4},
            {name: 'product3', price: 300, quantity: 3},
        ],
        items: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'q', 'p'],
    },
});
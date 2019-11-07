let app = new Vue({
    el: '#app',
    data: {
        products: [
            {name: 'product1', price: 100, quantity: 4},
            {name: 'product2', price: 200, quantity: 5},
            {name: 'product3', price: 300, quantity: 6},
        ],
    },
    methods: {
        calc: function () {
            let summa = 0;
            for(let i = 0; i <= this.products.length - 1; i++) {
                summa += this.products[i].price * this.products[i].quantity;
            }
            return summa
        }
    }
});

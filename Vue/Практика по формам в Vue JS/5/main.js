let app = new Vue({
    el: '#app',
    data: {
        products: [],
        objectArr: {},
        name: '',
        price: '',
        quantity: '',
    },
    methods: {
        pushProduct: function () {
            this.objectArr.name = this.name;
            this.objectArr.price = this.price;
            this.objectArr.quantity = this.quantity;
            console.log(this.objectArr);
            this.products.push(this.objectArr);
            this.products = JSON.parse(JSON.stringify(this.products));
            console.log(this.products);
        },
        calc: function () {
            let summa = 0;
            for(let i = 0; i <= this.products.length - 1; i++) {
                summa += this.products[i].price * this.products[i].quantity;
            }
            return summa
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        products: [],
        objectArr: {},
        name: '',
        price: '',
        quantity: '',
        show: false,
        cName: '',
        cPrice: '',
        cQuantity: '',
    },
    methods: {
        pushProduct: function () {
            this.objectArr.name = this.name;
            this.objectArr.price = this.price;
            this.objectArr.quantity = this.quantity;
            this.products.push(this.objectArr);
            this.products = JSON.parse(JSON.stringify(this.products));
        },
        calc: function () {
            let summa = 0;
            for(let i = 0; i <= this.products.length - 1; i++) {
                summa += this.products[i].price * this.products[i].quantity;
            }
            return summa
        },
        deleteProduct: function (index) {
            if (index == this.products[this.products.length - 1]) {
                this.products.pop();
            } else if (index !== this.products[this.products.length - 1]) {
                this.products.splice(index, 1);
            }
        },
        showInput: function () {
            this.show = !this.show;
        },
        createName: function () {
            for(let i = 0; i <= this.products.length - 1; i++) {
                this.products[i].name = this.cName;
                this.products[i].price = this.cPrice;
                this.products[i].quantity = this.cQuantity;
            }
        },
    }
});
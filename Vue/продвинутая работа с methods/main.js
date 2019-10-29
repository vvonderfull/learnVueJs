let app = new Vue({
    el: '#app',
    data: {
        text: 'привет',
        items: [1, 2, 3, 4, 5],
        items2: [1, 2, 3, 4, 5],
        items3: ['Вася', 'Петя', 'Коля', 'Рома', 'Игорь'],
    },
    methods: {
        upperCaseFirst: function () {
            this.text = 'Привет';
        },
        upperCaseLast: function () {
            this.text = 'ПривеТ';
        },
        changeUser: function () {
            this.upperCaseFirst();
            this.upperCaseLast();
        },
        sayHello: function (name) {
            alert("Привет," + name + "!");
        },
        removeNumber: function (index) {
            this.items.splice(index,1);
        },
        doubleNumber: function (item, index) {
            this.$set(this.items2, index, item * item);
        },
        plusString: function (item, index) {
            this.$set(this.items3, index, item + "!");
        }
    }
});

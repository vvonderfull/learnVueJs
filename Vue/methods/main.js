let app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        num1: 1,
        num2: 2,
        num3: 3,
        text: 'hello',
        text1: '12345',
        items: [1, 5, 10, 15, 7],
    },
    methods: {
        show: function() {
            alert(this.num1 + this.num2 + this.num3);
        },
        changeMessage: function() {
            this.text1 = 'abcde';
        },
        addItem: function() {
            this.items = this.items.filter(function (elem) {
                if (elem > 0 && elem < 10) {
                    return true;
                } else {
                    return false;
                }
            });

        },
    }
});

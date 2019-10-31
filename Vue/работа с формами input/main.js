let app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        number: null,
        result: 0,
        number1: null,
        number2: null,
        resultSum: 0,
        text1: '',
        text2: '',
        FIO: '',
        name: '',
        fam: '',
        otch: '',
        items: ['la','la','la'],
        elem: '',
    },
    methods: {
        calc: function () {
            this.result = this.number * this.number;
        },
        sum: function () {
            this.resultSum = Number(this.number1) + Number(this.number2);
        },
        textSwap: function () {
            if (this.text1 !== 0 && this.text2 == 0) {
                this.text2 = this.text1;
                this.text1 = '';
            } else if (this.text2 !== 0) {
                let swap = this.text2;
                this.text1 = swap;
                this.text2 = '';
            }

        },
        cut: function () {
            this.name = this.FIO.split(' ')[0];
            this.fam = this.FIO.split(' ')[1];
            this.otch = this.FIO.split(' ')[2];
        },
        elemPush: function () {
            this.items.unshift(this.elem);
        },
        del1: function (index) {
            this.items.splice(index,1);
        }
    }
});

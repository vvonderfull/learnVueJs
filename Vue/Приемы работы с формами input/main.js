let app = new Vue({
    el: '#app',
    data: {
        text: '',
        year: '',
        textRev: '',
        text1: '',
        text2: '',
    },
    methods: {
        textReverse: function (textRev) {
            return textRev.split('').reverse().join('');
        },
        textSwap1: function () {
            this.text2 = this.text1;
            this.text1 = '';
        },
        textSwap2: function () {
            this.text1 = this.text2;
            this.text2 = '';
        },

    }
});

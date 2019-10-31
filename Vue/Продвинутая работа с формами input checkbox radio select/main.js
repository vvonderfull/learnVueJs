let app = new Vue({
    el: '#app',
    data: {
        message: '',
        text: '',
        items: [],
        check: true,
        check1: true,
        check2: true,
        arr: [],
        arr1: [],
        type: '',
        selected: '',
        sel: '',
        options: ['Овощи','Мясо','Фрукты']
    },
    methods: {
        formArr: function () {
            this.items = this.text.split(' ');
        }
    }
});

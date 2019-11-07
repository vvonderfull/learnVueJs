let app = new Vue({
    el: '#app',
    data: {
        start: '',
        cont: '',
        error: '',
        but: false,
    },
    methods: {
        go: function () {
            this.start = Math.floor(Math.random() * 101);
            console.log(this.start);
        },
        game: function () {
            if (this.cont < this.start) {
                this.error = 'Введите число побольше!';
                this.cont = '';
            } else if (this.cont > this.start) {
                this.error = 'Введите число поменьше!';
                this.cont = '';
            } else if (this.cont = this.start) {
                this.error = 'Вы угадали! Поздравляем!';
                this.but = !this.but;
            }
        },
        letsGo: function () {
            this.start = Math.floor(Math.random() * 101);
            this.but = !this.but;
        }
    }
});

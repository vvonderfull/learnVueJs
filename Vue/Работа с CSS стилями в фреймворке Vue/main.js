let app = new Vue({
    el: '#app',
    data: {
        color: 'black',
        arr: [],
        styles: {
            color: this.arr,
        }
    },
    methods: {
        swap: function () {
            if (this.color == 'black') {
                this.color = 'red';
            } else {
                this.color = 'black';
            }
        }
    }
});

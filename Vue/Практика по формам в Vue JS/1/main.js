let app = new Vue({
    el: '#app',
    data: {
        cont: '',
        result: '',
    },
    methods: {
        fn: function () {
            if (this.cont !== 0) {
                this.result = (this.cont - 32) / 1,8;
            }
        }
    }
});

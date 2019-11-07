let app = new Vue({
    el: '#app',
    data: {
        cssClasses: 'logo',
        isValid: true,
        isDone: false,
    },
    methods: {
        fDone: function () {
            this.isDone = !this.isDone
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        str: 'main',
        dis: true,
    },
    methods: {
        mood: function () {
            this.dis = !this.dis;
        }
    }
});

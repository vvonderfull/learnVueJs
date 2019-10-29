let app = new Vue({
    el: '#app',
    data: {
        showName: true,
        name: 'Вася',
        toggle: true,
        items: [1,2,3,4,5],
        items1: [5,4,3,2,1],
        showItems: false,
        hello: true,
        nameUser: 'Вася',
        day: 3,
        age: 23,
        temp: true,
    },
    methods: {
        hideName1: function () {
            this.showName = false;
        },
        hideName2: function () {
            this.showName = true;
        },
        toggleElem: function () {
            this.toggle = !this.toggle;
        },
        showItem: function () {
            this.showItems = !this.showItems;
        },
        showww: function () {
            this.showName = !this.showName;
        },
        username: function () {
            this.hello = !this.hello;
        },
        tempClick: function () {
            this.temp = !this.temp;
        }

    }
});

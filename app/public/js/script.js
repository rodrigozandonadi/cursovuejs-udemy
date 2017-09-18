var app = new Vue({
    el: '#app',
    data: {
        title: 'Vue.js -> Udemy Course',
        message: 'Welcome to Vue.js course',
        user: 'Rodrigo Zan'
    } 
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: false
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: 'Learn JavaScript', category: 'Linguagem de programação' },
            { text: 'Learn Angular', category: 'Framework JavaScript' },
            { text: 'Learn React', category: 'Biblioteca JavaScript' },
            { text: 'Learn Vue', category: 'Framework JavaScript' }
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Olá Vue'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Two way data binding com v-model'
    }
})
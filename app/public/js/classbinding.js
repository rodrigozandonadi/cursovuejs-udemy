var root = new Vue({
    el: '#root', //identificação do id da div principal - root
    data: {
        titulo: 'título modificado pelo javascript',
        outroTitulo: 'testando o short code do vue.js',
        className: 'color-blue',     
        isLoading: false,
        isBlue: false,
        classBackgroundGrenn: 'back-green',
        azul: 'blue',
        styleObject: {
            color: 'purple',
            fontSize: '13px'
        }
    },
    computed: {
        classObject: function() {
            return{
                'is-loading': true,
                'color-blue': this.isBlue
            }
            
        }
    },
    methods: {
        toggleClass(){
            this.isLoading = !this.isLoading;
            this.isBlue = !this.isBlue;
        }
    }
});
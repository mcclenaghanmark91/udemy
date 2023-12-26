const app = Vue.createApp({
    //data, functions, component template
    //template: '<h2>I am a template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount('#app')
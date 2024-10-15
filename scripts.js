var todos = [
    {
        text: 'oi',
        done: true
    }
]

const todosApp = {
    data(){
        return {
            todos: window.todos
        }
    }
};

Vue.createApp(todosApp).mount('#app')
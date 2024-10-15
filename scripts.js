var todos = [{
    text: 'oi',
    done: true
}]

const todosApp = {
    data() {
        return {
            todos: window.todos,
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function () {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };

            } else {
                alert("Tarefa obrigatória")
            }
        }
    }
};

Vue.createApp(todosApp).mount('#app')
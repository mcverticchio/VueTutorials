//Remember:  when you create an instance of a component, it gets its own isolated scope
// So use props to pass data between the parent and the child
Vue.component('todo-item', {
	template: `
		<li>
			{{ title }}
			<button>X</button>
		</li>
	`,
	props: ['title']
})


new Vue({
	el:'#root',
	data: {
		newTodoText: '',
		todos: [
			'Do the dishes',
			'Take out the trash',
			'Mow the lawn'
		]
	},
	methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  }
})

var app = new Vue({
	el: '#root',

	data: {
		// message: 'Hello World',
		tasks: [
			{ description: 'Go to the store', completed: true },
			{ description: 'Finish screencase', completed: false },
			{ description: 'Make donation', completed: false },
			{ description: 'Clear inbox', completed: false },
			{ description: 'Make dinner', completed: false },
			{ description: 'Clean room', completed: true }
		]
	},

	computed: {
		// reversedMessage() {
		// 	return this.message.split('').reverse().join('');
		// }
		incompleteTasks() {
			return this.tasks.filter( task => !task.completed);

		},
		completeTasks() {
			return this.tasks.filter( task => task.completed);

			//	ES5 Version
			// this.tasks.filter(function(tast) {
			// 	return ! task.completed;
			// })
		},
	}
})

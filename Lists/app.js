var app = new Vue({
	el: '#root',
	/*\
	|*| We want to filter through each item in an array (similar to result of an ajax request) and display
	\*/
	data: {
		newName: '',
		names: ['Joe', 'Mary', 'Jane', 'Jack']
	},
	/*\
	|*| How can we clean this up to reflect vue?
	\*/
	// mounted() {
	// 	document.querySelector('#button').addEventListener('click', () => {
	// 		let name = document.querySelector('#input');
	//
	// 		app.names.push(name.value);
	//
	// 		name.value='';
	// 	})
	// }

	/*\
	|*| Any custom methods we have should be nested within the methods object
	\*/
	methods: {
		// addName: function() {
		// 	traditional syntax!  Will work as well.
		// }
		addName() {
			// alert('adding name');
			this.names.push(this.newName);
			this.newName = '';
		}
	}

})

/*\
|*| Here is the long/javascipt oriented way of adding an event listener and adding input to our list of names
\*/
// document.querySelector('#button').addEventListener('click', () => {
// 	let name = document.querySelector('#input');
//
// 	app.names.push(name.value);
//
// 	name.value='';
// })

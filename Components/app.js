Vue.component('task-list', {

	/*\
	|*| Whenever you have a template in a component it has to have a single root element - just like REACT!
	\*/

	template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',

	data() {
		return {
			tasks: [
				{task: 'Go to store', complete: true},
				{task: 'Go to bank', complete: false},
				{task: 'Go to farm', complete: true},
				{task: 'Go to work', complete: false},
			]
		};
	}
});

Vue.component('task', {

	template: '<li><slot></slot></li>',

});

new Vue({
	el: '#root'
});

/*\
|*| For regular vue instance can set data = object,  cant do that for component b/c it is not linked to a single instance.
|*| Make data a fnction that returns an object.
\*/

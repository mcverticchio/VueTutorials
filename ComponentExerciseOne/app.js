Vue.component('message', {

	props: ['title', 'body'],

	data() {
		return {
			isVisible: true
		};
	},

	template: `
		<article class="message" v-show="isVisible">

	  		<div class="message-header">
				{{ title }}

				<button type="button" @click="hideModal">x</button>
	  		</div>

			<div class="message-body">
				{{ body }}
			</div>

		</article>
	`,

	methods: {
		hideModal() {
			this.isVisible = false;
			/*\
			|*| this refers to this single instance NOT every message on the page
			\*/
		}
	}
});

new Vue({
	el: '#root'
});

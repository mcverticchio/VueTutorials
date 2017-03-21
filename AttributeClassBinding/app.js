var app = new Vue({
	el: '#root',
	data: {
		// title: 'Now the title is being set through JS'
		// className: 'color-red'
		isLoading: false,
		isdisabled: false
	},
	methods: {
		toggleClass() {
			this.isLoading = true;
			this.isdisabled = true;
		}
	}
})

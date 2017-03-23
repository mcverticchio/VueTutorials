Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

Vue.component('service', {
	template: `
	 	<div>
			<ul>
				<li v-for="(service, index) in services" :key="service" v-bind:class="{ 'active' : service.active }" @click="test(service)"> {{ service.name }} <span>$ {{ service.price | currency }}</span></li>
			</ul>
			<h1>Total: {{ total() | currency}}</h1>
	 	</div>
	`,
	props: {
		services: { required: true},
	},
	methods: {
		test(s) {
			s.active = !s.active;
		},
		total: function() {
			var total = 0;

			this.services.forEach(function(s){
				if (s.active){
					total+= s.price;
				}
			});

			return total;
		}
	}
});

new Vue({
	el: '#root',
	data: {
		services: [
			{name: 'Web Development', price: 300, active: false},
			{name: 'Design', price: 400, active: false},
			{name: 'Integration', price: 250, active: false},
			{name: 'Training', price: 220, active: false}
		]
	}
});

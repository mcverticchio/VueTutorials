
window.Event = new Vue();


Vue.component('coupon', {
	template: '<input placeholder="Enter your coupon" @blur="onCouponApplied">',

	methods: {
		onCouponApplied() {
			// alert('applied!')
			Event.$emit('applied');    					//we emit using $emit

			// this.$on('applied', function() {
			//
			//
			// })				//we can listen by using $on
		}
	}
});

/*\
|*| always declare root vue instance after the components
\*/
new Vue({
	el: '#root',

	data: {
		couponApplied: false
	},

	// methods: {
	// 	onCouponApplied() {
	// 		// alert('It was applied');
	// 		this.couponApplied = true;
	// 	}
	// },

	created() {
		Event.$on('applied', () => alert('Handing it!'));
	}
});

new Vue({
	el: '#root',
	data: {
		greeting: 'Hello World',
		loggedIn: true,
		inventory: [
			{name: 'MacBook Air', price: 1000},
			{name: 'MacBook Pro', price: 1800},
			{name: 'Lenovo W530', price: 1400},
			{name: 'Acer Aspire One', price: 300}
		],
		x: 1,
		userGuess: 0,
		randomGuess: 5
	},
	methods: {
		sayHello: function() {
			console.log('Hey there ' + this.greeting);
		},
		login: function() {
			this.loggedIn = !this.loggedIn;
		},
		randomize: function(min, max) {
			return Math.floor(Math.random() * (max-min + 1)) + min;
		}
	},
	//Useful in scenarios where the value of one variable depends on one or more other variables.
	computed: {
		doubleX: function() {
			return this.x*2;
		},
		message: function(){
			if(this.userGuess == this.randomGuess) {
				this.randomGuess = this.randomize(1, 10);
				return 'You Got it right!';
			} else {
				this.randomGuess = this.randomize(1, 10);
				return 'Incorrect, try again!'
			}

		}
	}
})

Vue.component('modal', {
	template: `
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<slot></slot>
				</div>

			</div>
			<button class="modal-close" @click="$emit('close')"></button>
		</div>



	`
});

//To close modal: cannot just put @click="showModal = false"  B/C of scope.
//showModal does not exist on the modal component -- it has its own scope.
//WHAT WE WANT TO DO: notify the root instance that the display/active status of the modal has changed.
//when modal-close is clicked we will emit an event called "close"
//Attach a custom event listener in the html.

new Vue({
	el: '#root',

	data: {
		showModal: false
	}
});

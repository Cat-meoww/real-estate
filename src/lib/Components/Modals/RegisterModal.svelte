<script>
	import { PUBLIC_APPNAME } from '$env/static/public';
	import { registermodal } from '$Components/stores.js';
	import { applyAction, deserialize } from '$app/forms';
	import Modal from './Modal.svelte';
	import Button from '../Button.svelte';
	import Heading from '../Heading.svelte';

	// function handle({ form, data, action, cancel }) {
	// 	// `form` is the `<form>` element
	// 	// `data` is its `FormData` object
	// 	// `action` is the URL to which the form is posted
	// 	// `cancel()` will prevent the submission
	// 	//cancel();

	// 	console.log({ form, data, action, cancel });
	// 	return async (response) => {
	// 		// `result` is an `ActionResult` object
	// 		console.log(response);
	// 		if (response.result.type === 'error') {
	// 			//await applyAction(result);
	// 		}
	// 	};
	// }

	async function handleSubmit(event) {
		const data = new FormData(this);

		const response = await fetch(this.action, {
			method: 'POST',
			body: data
		});
		/** @type {import('@sveltejs/kit').ActionResult} */
		const result = deserialize(await response.text());

		if (result.type === 'success') {
			// re-run all `load` functions, following the successful update
			await invalidateAll();
		}

		applyAction(result);
	}
</script>

<Modal bind:isOpen={$registermodal}>
	<svelte:fragment slot="title">Register</svelte:fragment>
	<svelte:fragment slot="body">
		<Heading title="Welcome to {PUBLIC_APPNAME}" subtitle="Create an account" />
		<form action="/api/auth/register/agent" method="POST" on:submit|preventDefault={handleSubmit}>
			<input type="text" name="username" value="ssdds" />
			<Button label="Continue" />
		</form>
	</svelte:fragment>
	<svelte:fragment slot="footer"><Button label="Continue" /></svelte:fragment>
</Modal>

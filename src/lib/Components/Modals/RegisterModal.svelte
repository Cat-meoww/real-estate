<script>
	import { PUBLIC_APPNAME } from '$env/static/public';
	import { registermodal } from '$Components/stores.js';
	import { enhance } from '$app/forms';
	import Modal from './Modal.svelte';
	import Button from '../Button.svelte';
	import Heading from '../Heading.svelte';

	function handle({ form, data, action, cancel }) {
		// `form` is the `<form>` element
		// `data` is its `FormData` object
		// `action` is the URL to which the form is posted
		// `cancel()` will prevent the submission

		console.log({ form, data, action, cancel });
		return async ({ result, update }) => {
			// `result` is an `ActionResult` object
			if (result.type === 'error') {
				await applyAction(result);
			}
		};
	}
</script>

<Modal bind:isOpen={$registermodal}>
	<svelte:fragment slot="title">Register</svelte:fragment>
	<svelte:fragment slot="body">
		<Heading title="Welcome to {PUBLIC_APPNAME}" subtitle="Create an account" />
		<form action="/api/auth/register/agent" method="POST" use:enhance={handle}>
			<input type="text" name="username" value="ssdds" />
			<Button label="Continue" />
		</form>
	</svelte:fragment>
	<svelte:fragment slot="footer"><Button label="Continue" /></svelte:fragment>
</Modal>

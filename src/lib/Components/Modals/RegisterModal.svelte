<script>
	import { PUBLIC_APPNAME } from '$env/static/public';
	import { registermodal } from '$Components/stores.js';
	import { applyAction, deserialize, enhance } from '$app/forms';
	// import { page } from '$app/stores';
	import Modal from './Modal.svelte';
	import Button from '../Button.svelte';
	import Heading from '../Heading.svelte';
	import Input from '../Inputs/Input.svelte';

	let form = null;
	let isLoading = false;

	function handleAgentRegister(handler) {
		// `form` is the `<form>` element
		// `data` is its `FormData` object
		// `action` is the URL to which the form is posted
		// `cancel()` will prevent the submission
		//cancel();

		//console.log({ form, data, action, cancel });
		return async ({ result }) => {
			form = result?.data ?? result;
			// `result` is an `ActionResult` object
			console.log({ form });
			// console.log(response.result.type);
			if (result.type === 'success') {
				// re-run all `load` functions, following the successful update
				//await invalidateAll();
				console.log('success');
				handler.form.reset();
			}
			//applyAction(result);
		};
	}
	$: console.log(form);

	// async function handleSubmit(event) {
	// 	const data = new FormData(this);

	// 	const response = await fetch(this.action, {
	// 		method: 'POST',
	// 		body: data,
	// 		headers: {
	// 			'x-sveltekit-action': 'true'
	// 		}
	// 	});
	// 	/** @type {import('@sveltejs/kit').ActionResult} */
	// 	const result = deserialize(await response.text());

	// 	if (result.type === 'success') {
	// 		// re-run all `load` functions, following the successful update
	// 		await invalidateAll();
	// 	}

	// 	applyAction(result);
	// }
</script>

<Modal bind:isOpen={$registermodal}>
	<svelte:fragment slot="title">Register</svelte:fragment>
	<svelte:fragment slot="body">
		<form action="?/RegisterAgent" method="POST" use:enhance={handleAgentRegister}>
			<div class="flex flex-col gap-4">
				<Heading title="Welcome to {PUBLIC_APPNAME}" subtitle="Create an agent account" />
				<Input id="email" label="Email" disabled={isLoading} value={form?.email ?? ''} required />
				<Input id="name" label="Name" disabled={isLoading} value={form?.name ?? ''} required />
				<Input
					id="password"
					label="Password"
					type="password"
					value={form?.password ?? ''}
					disabled={isLoading}
					required
				/>
				<Button label="Continue" />
				{#if form?.success}
					<p>Successfully logged in! Welcome back {form?.success}</p>
				{:else}
					<p>error {form?.success}</p>
				{/if}
			</div>
		</form>
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<div class="flex flex-col gap-4">
			<div class="text-neutral-500 text-center font-light">
				<p class="text-center">
					Already have an account?
					<span class="text-neutral-800 cursor-pointer hover:underline">Log in</span>
				</p>
			</div>
		</div>
	</svelte:fragment>
</Modal>

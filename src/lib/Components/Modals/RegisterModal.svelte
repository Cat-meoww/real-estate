<script>
	import { PUBLIC_APPNAME } from '$env/static/public';
	import { registermodal } from '$Components/stores.js';
	import { applyAction, deserialize, enhance } from '$app/forms';
	import toast from 'svelte-french-toast';
	// import { page } from '$app/stores';
	import Modal from './Modal.svelte';
	import Button from '../Button.svelte';
	import Heading from '../Heading.svelte';
	import Input from '../Inputs/Input.svelte';

	let form = null;
	let isLoading = false;

	function handleAgentRegister(handler) {
		isLoading = true;
		// `form` is the `<form>` element
		// `data` is its `FormData` object
		// `action` is the URL to which the form is posted
		// `cancel()` will prevent the submission
		//cancel();
		return async ({ result }) => {
			isLoading = false;
			form = result?.data ?? result;
			// `result` is an `ActionResult` object
			//console.log({ form });
			// console.log(response.result.type);
			if (result.type === 'success') {
				// re-run all `load` functions, following the successful update
				//await invalidateAll();
				console.log('success');
				toast.success('Registation Success', { duration: 1500 });
				handler.form.reset();
			}
			if (result.type === 'failure') {
				toast.error('Something went wrong', {
					duration: 1500
				});
			}
			//applyAction(result);
		};
	}
	$: console.log(form);
</script>

<Modal bind:isOpen={$registermodal}>
	<svelte:fragment slot="title">Register</svelte:fragment>
	<svelte:fragment slot="body">
		<form action="?/RegisterAgent" method="POST" use:enhance={handleAgentRegister}>
			<div class="flex flex-col gap-4">
				<Heading title="Welcome to {PUBLIC_APPNAME}" subtitle="Create an agent account" />
				<Input
					id="email"
					label="Email"
					disabled={isLoading}
					value={form?.data?.email ?? ''}
					required
					type="email"
					errors={form?.errors ?? []}
				/>
				<Input
					id="name"
					label="Name"
					disabled={isLoading}
					value={form?.data?.name ?? ''}
					required
					errors={form?.errors ?? []}
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					value={form?.data?.password ?? ''}
					disabled={isLoading}
					required
					errors={form?.errors ?? []}
				/>
				<Input
					id="passwordConfirm"
					label="Confirm Password"
					type="password"
					value={form?.passwordConfirm ?? ''}
					disabled={isLoading}
					required
					errors={form?.errors ?? []}
				/>
				<Button label="Continue" disabled={isLoading} />
			</div>
		</form>
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<div class="flex flex-col gap-4">
			{#if form?.success}
				<p>Successfully logged in! Welcome back {form.success}</p>
			{/if}
			{#if form?.errmsg}
				<p class="text-air-pink text-center">{form.errmsg}</p>
			{/if}
			<div class="text-neutral-500 text-center font-light">
				<p class="text-center">
					Already have an account?
					<span class="text-neutral-800 cursor-pointer hover:underline">Log in</span>
				</p>
			</div>
		</div>
	</svelte:fragment>
</Modal>

<script>
	import { PUBLIC_APPNAME } from '$env/static/public';
	import { registermodal } from '$Components/stores.js';
	import Modal from './Modal.svelte';
	import Button from '../Button.svelte';
	import Heading from '../Heading.svelte';
</script>

<Modal bind:isOpen={$registermodal}>
	<svelte:fragment slot="title">Register</svelte:fragment>
	<svelte:fragment slot="body">
		<Heading title="Welcome to {PUBLIC_APPNAME}" subtitle="Create an account" />
	</svelte:fragment>
	<svelte:fragment slot="footer"><Button label="Continue" /></svelte:fragment>
</Modal>

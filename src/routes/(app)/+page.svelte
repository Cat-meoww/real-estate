<script>
	import Navbar from '$Components/Navbar/Navbar.svelte';
	import { browser } from '$app/environment';

	export let data;
	//$: console.log(JSON.parse(data?.agent_data));
	// export let form;
</script>

<Navbar />

<!-- {@debug form} -->

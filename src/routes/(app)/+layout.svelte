<script>
	import '../../app.css';
	import { onMount } from 'svelte';
	import { Toaster } from 'svelte-french-toast';
</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="src/styles/global.css"  /> -->
</svelte:head>

<slot />
<Toaster />

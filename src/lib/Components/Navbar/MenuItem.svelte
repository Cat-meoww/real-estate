<script>
	export let label;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="px-4 py-3 hover:bg-neutral-100 transition font-semibold whitespace-nowrap text-start overflow-hidden" on:click
>
	{label}
</div>

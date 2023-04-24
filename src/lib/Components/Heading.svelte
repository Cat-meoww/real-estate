<script>
	export let center = false;
	export let title = 'Heading';
	export let subtitle = 'Subtitle here';
</script>

<div class={center ? 'text-center' : 'text-start'}>
	<div class="text-2xl font-bold">
		{title}
	</div>
	<div class="font-light text-neutral-500 mt-2">
		{subtitle}
	</div>
</div>

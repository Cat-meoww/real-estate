<script>
	export let id;
	export let label;
	export let disabled = false;
	export let value = '';
	export let type="text";
	export let formatPrice;
	export let errors = [];
	export let required = false;

	const name = id;

	// const handleInput = (e) => {
	// 	// in here, you can switch on type and implement
	// 	// whatever behaviour you need
	// 	value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	// };
</script>

<div class="w-full relative">
	<!-- {formatPrice && (
      <BiDollar
        size={24}  
        class="
          text-neutral-700
          absolute
          top-5
          left-2
        "
      />
    )} -->
	<input
		{id}
		{disabled}
		placeholder=" "
		{type}
		{value}
		{name}
		{required}
		class={`
        peer
        w-full
        p-[26px_12px_6px]
        
        font-light 
        bg-white 
        text-air-black
        border
        focus:border-2
        
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${formatPrice ? 'pl-9' : 'pl-4'}
        ${errors[id] ? 'border-rose-500' : 'border-air-grey-border'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
      `}
	/>
	<label
		for={id}
		class={`
        absolute 
        text-md
        duration-150 
        transform 
        -translate-y-3 
        top-5 
        z-10 
        origin-[0] 
        ${formatPrice ? 'left-9' : 'left-4'}
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
      `}
	>
		{label}
	</label>
</div>
